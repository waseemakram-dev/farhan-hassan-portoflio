const fs = require('fs');
let content = fs.readFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', 'utf8');

// Logo
content = content.replace(/<img[^>]*src="[^"]*logo[^"]*"[^>]*>/gi, '<img src="/assets/Site%20Logo.png" style="width:100px;" alt="Farhan Hassan Logo" />');

// Center menu
content = content.replace(/<div class="col-xl-7 col-lg-7 col-md-4 col-4 col-sm-6">/g, '<div class="col-xl-7 col-lg-7 col-md-4 col-4 col-sm-6 d-flex justify-content-center">');
content = content.replace(/<nav class="main-menu">/g, '<nav class="main-menu" style="width: 100%; display: flex; justify-content: center;">');

// Name Size Full
content = content.replace(/<h2[^>]*>FARHAN\s*HASSAN<\/h2>/i, '<h2 style="white-space: nowrap; font-size: clamp(40px, 13vw, 150px); line-height: 1; margin-bottom: 20px; font-weight: 900; letter-spacing: -2px;">FARHAN HASSAN</h2>');

// Services Box Fixes
// Replace the inner contents of service items to match the user's styling
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

content = content.replace(/<div class="service-item[^>]*>[\s\S]*?<\/div>/, `<div class="service-item wow fadeInUp delay-0-2s" style="background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); text-align: left; cursor: pointer; visibility: visible; animation-name: fadeInUp;" onclick="openServiceModal('SEO', 'Boost your videos and channel to rank higher in search results. I provide comprehensive YouTube SEO strategies to gain organic traffic and increase views.', 'Keyword Research & Optimization', 'Competitor Analysis', 'Metadata & Tag Optimization', '/assets/images/seo.jpg')">\n${newSEO}\n</div>`);
content = content.replace(/<div class="service-item[^>]*>[\s\S]*?<\/div>/, `<div class="service-item wow fadeInUp delay-0-2s" style="background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); text-align: left; cursor: pointer; visibility: visible; animation-name: fadeInUp;" onclick="openServiceModal('Script Write', 'Engaging, well-researched scripts tailored to keep your audience hooked from start to finish. Perfect for Cashcow and Talking Head videos.', 'Audience Retention Strategies', 'In-depth Topic Research', 'Call-to-Action Integration', '/assets/images/script.jpg')">\n${newScript}\n</div>`);
content = content.replace(/<div class="service-item[^>]*>[\s\S]*?<\/div>/, `<div class="service-item wow fadeInUp delay-0-2s" style="background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); text-align: left; cursor: pointer; visibility: visible; animation-name: fadeInUp;" onclick="openServiceModal('Video Edits', 'Professional video editing for trendy, seamless transitions. I specialize in engaging Reels, Shorts, and long-form YouTube content.', 'Color Grading & Audio Mixing', 'Dynamic Transitions & Effects', 'B-roll & Motion Graphics', '/assets/images/video.jpg')">\n${newVideo}\n</div>`);

fs.writeFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', content);
console.log('Update complete!');
