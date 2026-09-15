const fs = require('fs');
let content = fs.readFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', 'utf8');

const newVideo = `
                    <div class="col-md-6 col-xl-6 portfolio-item">
                      <div class="portfolio-box" style="border-radius:12px; overflow:hidden;">
                        <video src="/assets/videos/ssstik.io_@yuyenwng_1788000440579.mp4" controls autoplay muted loop style="width:100%; display:block;"></video>
                      </div>
                    </div>`;

content = content.replace(/(<video src="\/assets\/videos\/U-2 Dragon Lady intro\.mp4"[^>]*><\/video>\s*<\/div>\s*<\/div>)/, '$1\n' + newVideo);

fs.writeFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', content);
console.log('Added new video!');
