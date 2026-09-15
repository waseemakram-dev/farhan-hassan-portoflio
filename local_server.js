const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let decodedPath = '';
  try {
    decodedPath = decodeURIComponent(req.url.split('?')[0]);
  } catch(e) {
    decodedPath = req.url.split('?')[0];
  }

  // Route protection: Redirect separate pages to single-page anchor sections
  const normalizedPath = decodedPath.toLowerCase().replace(/\/+$/, '');
  const routeRedirects = {
    '/about': '/#about',
    '/service': '/#services',
    '/services': '/#services',
    '/portfolio': '/#portfolio',
    '/projects': '/#portfolio',
    '/blog': '/#blog',
    '/contact': '/#contact'
  };

  if (routeRedirects[normalizedPath]) {
    res.writeHead(302, { 'Location': routeRedirects[normalizedPath] });
    res.end();
    return;
  }

  // Check rewrites
  if (decodedPath === '/' || decodedPath === '') {
    decodedPath = '/index.html';
  } else if (decodedPath.endsWith('/')) {
    decodedPath += 'index.html';
  }

  let filePath = path.join(ROOT, decodedPath);

  // If path has no extension and directory exists with index.html
  if (!path.extname(filePath)) {
    if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    } else if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';

    // Handle range requests for video streaming without EMFILE leak
    const range = req.headers.range;
    if (range && stats.size > 0) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunksize = (end - start) + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType
      });

      const stream = fs.createReadStream(filePath, { start, end });
      stream.pipe(res);
      req.on('close', () => { stream.destroy(); });
    } else {
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes'
      });
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
      req.on('close', () => { stream.destroy(); });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
