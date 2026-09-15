const fs = require('fs');

let content = fs.readFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', 'utf8');

// 1. Banner text in ONE LINE
content = content.replace(/<h2[^>]*>FARHAN(?:<br\/>|\s*)HASSAN<\/h2>/i, '<h2>FARHAN HASSAN</h2>');
// Wait, the current text might be 'farhan hussan' or something else since my previous regex failed!
// Let's replace 'farhan hussan' or any variation with <h2 style="font-size: 8vw; white-space: nowrap;">FARHAN HASSAN</h2>
content = content.replace(/<h2>farhan hussan<\/h2>/i, '<h2 style="font-size: 7vw; white-space: nowrap; margin-bottom: 10px;">FARHAN HASSAN</h2>');
// Also if it's currently FARHAN<br/>HASSAN:
content = content.replace(/<h2 style="[^"]*">FARHAN<br\/>HASSAN<\/h2>/i, '<h2 style="font-size: 7vw; white-space: nowrap; margin-bottom: 10px;">FARHAN HASSAN</h2>');

// 2. Walker Intro Text
// The text is: "Hi, I'm Walker, a passionate UX Designer dedicated to\s*creating user-friendly digital experiences."
content = content.replace(/Hi,\s*I.m\s*Walker,\s*a\s*passionate\s*UX\s*Designer\s*dedicated\s*to\s*creating\s*user-friendly\s*digital\s*experiences\./i, "Hi, I'm Farhan Hassan, a passionate Video Editor and SEO Expert dedicated to creating compelling content.");

// 3. About Me Text
// "I’m Nino Walker, a seasoned UX designer with over 8 years of experience..."
// Let's use a very flexible regex
content = content.replace(/I.m\s*Nino\s*Walker[^<]*/i, "I'm Farhan Hassan, a versatile professional with extensive experience in Video Editing, YouTube SEO, and Script Writing. My journey began with a passion for digital content creation, where I discovered my strength in understanding audience behavior and translating it into engaging video experiences.");

// 4. Videos Autoplay & Update Section
// The user says "video ko auto play ho"
// Let's find the video tags we added and add `autoplay muted loop` to them.
content = content.replace(/<video src="([^"]+)" controls style="([^"]+)"><\/video>/gi, '<video src="$1" controls autoplay muted loop style="$2"></video>');

// If the portfolio was NOT replaced, let's do it here
let newPortfolio = `                  <div class="row g-4 portfolio-grid">
                    <div class="col-md-6 col-xl-6 portfolio-item">
                      <div class="portfolio-box" style="border-radius:12px; overflow:hidden;">
                        <video src="/assets/videos/202608181454.mp4" controls autoplay muted loop style="width:100%; display:block;"></video>
                      </div>
                    </div>
                    <div class="col-md-6 col-xl-6 portfolio-item">
                      <div class="portfolio-box" style="border-radius:12px; overflow:hidden;">
                        <video src="/assets/videos/military Sample.mp4" controls autoplay muted loop style="width:100%; display:block;"></video>
                      </div>
                    </div>
                    <div class="col-md-6 col-xl-6 portfolio-item">
                      <div class="portfolio-box" style="border-radius:12px; overflow:hidden;">
                        <video src="/assets/videos/sample 20 t0 40 ages wealth.mp4" controls autoplay muted loop style="width:100%; display:block;"></video>
                      </div>
                    </div>
                    <div class="col-md-6 col-xl-6 portfolio-item">
                      <div class="portfolio-box" style="border-radius:12px; overflow:hidden;">
                        <video src="/assets/videos/U-2 Dragon Lady intro.mp4" controls autoplay muted loop style="width:100%; display:block;"></video>
                      </div>
                    </div>
                    <div class="col-md-12 col-xl-12 portfolio-item">
                      <div class="portfolio-box" style="border-radius:12px; overflow:hidden;">
                        <video src="/assets/videos/YTDown.com_YouTube_Rolls-Royce-Presents-Ghost-Series-II-The_Media_PCc1qDMsgMI_001_1080p.mp4" controls autoplay muted loop style="width:100%; max-height:600px; display:block; margin:auto;"></video>
                      </div>
                    </div>
                  </div>`;

// Regex to replace original portfolio if it's still there
content = content.replace(/<div class="row g-4 portfolio-grid">[\s\S]*?<!--\]-->\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, newPortfolio + '\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>');

// Ensure Logo is updated
content = content.replace(/<img src="\/_nuxt\/logo\.CgaqbBVf\.png"/i, '<img src="/assets/Site Logo.png" style="max-height:80px;"');

fs.writeFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', content);
console.log('Update complete!');
