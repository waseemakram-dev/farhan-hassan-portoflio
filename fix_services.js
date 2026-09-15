const fs = require('fs');
let content = fs.readFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', 'utf8');

const newServices = `
              <section id="services" class="services-area">
                <div class="container">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12">
                      <div class="section-title section-black-title wow fadeInUp delay-0-2s" style="visibility: visible; animation-name: fadeInUp">
                        <h2>Services</h2>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-6">
                      <div class="service-item wow fadeInUp delay-0-2s" style="visibility: visible; animation-name: fadeInUp; cursor: pointer; background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); text-align: left;" onclick="openServiceModal('SEO', 'Boost your videos and channel to rank higher in search results. I provide comprehensive YouTube SEO strategies to gain organic traffic and increase views.', 'Keyword Research & Optimization', 'Competitor Analysis', 'Metadata & Tag Optimization', '/assets/images/seo.jpg')">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 20px;">
                          <span style="font-size: 12px; color: #ccc; border: 1px solid #eee; padding: 2px 8px; border-radius: 4px;">01</span>
                          <i class="ri-search-line" style="font-size: 24px; color: #111;"></i>
                        </div>
                        <h4 style="font-size: 22px; font-weight: 700; color: #111; margin-bottom: 15px; text-transform: uppercase;">SEO</h4>
                        <p style="color: #666; font-size: 14px; line-height: 1.6;">Boost your videos and channel to rank higher in search results. I provide comprehensive YouTube SEO strategies to gain organic traffic and increase views.</p>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="service-item wow fadeInUp delay-0-2s" style="visibility: visible; animation-name: fadeInUp; cursor: pointer; background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); text-align: left;" onclick="openServiceModal('Script Write', 'Engaging, well-researched scripts tailored to keep your audience hooked from start to finish. Perfect for Cashcow and Talking Head videos.', 'Audience Retention Strategies', 'In-depth Topic Research', 'Call-to-Action Integration', '/assets/images/script.jpg')">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 20px;">
                          <span style="font-size: 12px; color: #ccc; border: 1px solid #eee; padding: 2px 8px; border-radius: 4px;">02</span>
                          <i class="ri-edit-line" style="font-size: 24px; color: #111;"></i>
                        </div>
                        <h4 style="font-size: 22px; font-weight: 700; color: #111; margin-bottom: 15px; text-transform: uppercase;">Script Write</h4>
                        <p style="color: #666; font-size: 14px; line-height: 1.6;">Engaging, well-researched scripts tailored to keep your audience hooked from start to finish. Perfect for Cashcow and Talking Head videos.</p>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="service-item wow fadeInUp delay-0-2s" style="visibility: visible; animation-name: fadeInUp; cursor: pointer; background: #fff; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); text-align: left;" onclick="openServiceModal('Video Edits', 'Professional video editing for trendy, seamless transitions. I specialize in engaging Reels, Shorts, and long-form YouTube content.', 'Color Grading & Audio Mixing', 'Dynamic Transitions & Effects', 'B-roll & Motion Graphics', '/assets/images/video.jpg')">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 20px;">
                          <span style="font-size: 12px; color: #ccc; border: 1px solid #eee; padding: 2px 8px; border-radius: 4px;">03</span>
                          <i class="ri-scissors-cut-line" style="font-size: 24px; color: #111;"></i>
                        </div>
                        <h4 style="font-size: 22px; font-weight: 700; color: #111; margin-bottom: 15px; text-transform: uppercase;">Video Edits</h4>
                        <p style="color: #666; font-size: 14px; line-height: 1.6;">Professional video editing for trendy, seamless transitions. I specialize in engaging Reels, Shorts, and long-form YouTube content.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
`;

content = content.replace(/<section id="services" class="services-area">[\s\S]*?<div class="projects-area" id="portfolio">/i, newServices + '\n              <div class="projects-area" id="portfolio">');

fs.writeFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', content);
console.log('Fixed services section');
