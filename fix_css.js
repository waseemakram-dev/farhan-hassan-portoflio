const fs = require('fs');
let content = fs.readFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', 'utf8');

// 1. Logo width 100px
content = content.replace(/<img src="\/assets\/Site Logo.png" style="max-height:80px;"/g, '<img src="/assets/Site Logo.png" style="width:100px;"');

// 2. Center Menu
// The original menu container: <div class="col-xl-7 col-lg-7 col-md-4 col-4 col-sm-6">
// And the nav: <nav class="main-menu">
content = content.replace(/<div class="col-xl-7 col-lg-7 col-md-4 col-4 col-sm-6">/g, '<div class="col-xl-7 col-lg-7 col-md-4 col-4 col-sm-6 d-flex justify-content-center">');
content = content.replace(/<nav class="main-menu">/g, '<nav class="main-menu" style="width: 100%; display: flex; justify-content: center;">');

// 3. Name size full
// The current header: <h2 style="white-space: nowrap; font-size: clamp(40px, 10vw, 150px);">FARHAN HASSAN</h2>
content = content.replace(/<h2 style="white-space: nowrap; font-size: clamp\(40px, 10vw, 150px\);">FARHAN HASSAN<\/h2>/g, '<h2 style="white-space: nowrap; font-size: 13vw; line-height: 1; margin-bottom: 20px; font-weight: 900; letter-spacing: -2px;">FARHAN HASSAN</h2>');

// 4. Services box styling fix
// I'll replace the existing contents of the service items to match the user's screenshot format.
const newSEO = `
<div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 20px;">
  <span style="font-size: 12px; color: #ccc; border: 1px solid #eee; padding: 2px 8px; border-radius: 4px;">01</span>
  <i class="ri-search-line" style="font-size: 24px; color: #111;"></i>
</div>
<h4 style="font-size: 22px; font-weight: 700; color: #111; margin-bottom: 15px; text-transform: uppercase;">SEO</h4>
<p style="color: #666; font-size: 14px; line-height: 1.6;">Boost your videos and channel to rank higher in search results. I provide comprehensive YouTube SEO strategies to gain organic traffic and increase views.</p>
`;

const newScript = `
<div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 20px;">
  <span style="font-size: 12px; color: #ccc; border: 1px solid #eee; padding: 2px 8px; border-radius: 4px;">02</span>
  <i class="ri-edit-line" style="font-size: 24px; color: #111;"></i>
</div>
<h4 style="font-size: 22px; font-weight: 700; color: #111; margin-bottom: 15px; text-transform: uppercase;">Script Write</h4>
<p style="color: #666; font-size: 14px; line-height: 1.6;">Engaging, well-researched scripts tailored to keep your audience hooked from start to finish. Perfect for Cashcow and Talking Head videos.</p>
`;

const newVideo = `
<div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 20px;">
  <span style="font-size: 12px; color: #ccc; border: 1px solid #eee; padding: 2px 8px; border-radius: 4px;">03</span>
  <i class="ri-scissors-cut-line" style="font-size: 24px; color: #111;"></i>
</div>
<h4 style="font-size: 22px; font-weight: 700; color: #111; margin-bottom: 15px; text-transform: uppercase;">Video Edits</h4>
<p style="color: #666; font-size: 14px; line-height: 1.6;">Professional video editing for trendy, seamless transitions. I specialize in engaging Reels, Shorts, and long-form YouTube content.</p>
`;

// Replace the old inner HTML of the service items
content = content.replace(/<i class="ri-search-line"><\/i>\s*<h5>01<\/h5>\s*<h4>SEO<\/h4>\s*<p>.*?<\/p>/s, newSEO);
content = content.replace(/<i class="ri-edit-line"><\/i>\s*<h5>02<\/h5>\s*<h4>Script Write<\/h4>\s*<p>.*?<\/p>/s, newScript);
content = content.replace(/<i class="ri-scissors-cut-line"><\/i>\s*<h5>03<\/h5>\s*<h4>Video Edits<\/h4>\s*<p>.*?<\/p>/s, newVideo);

// Also add a little inline style to the service-item itself so it has a nice white background and padding, in case the original class was lost
content = content.replace(/(<div class="service-item wow fadeInUp delay-0-2s" style="[^"]+)(")/g, '$1; background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); text-align: left;$2');

fs.writeFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', content);
console.log('Done');
