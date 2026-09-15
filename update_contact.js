const fs = require('fs');
let content = fs.readFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', 'utf8');

const newContactContent = `
                      <div class="contact-content-part wow fadeInUp delay-0-2s" style="visibility: visible; animation-name: fadeInUp">
                        <div class="single-contact wow fadeInUp" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp">
                          <span class="circle-btn"><i class="ri-map-pin-line"></i></span>
                          <h2>Our Office:</h2>
                          <p>chishtian punjab pakistan</p>
                        </div>
                        <div class="single-contact wow fadeInUp" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp">
                          <span class="circle-btn"><i class="ri-headphone-line"></i></span>
                          <h2>Contact Number:</h2>
                          <p>+92 322 1567677</p>
                        </div>
                        <div class="single-contact wow fadeInUp" data-wow-delay=".6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp">
                          <span class="circle-btn"><i class="ri-mail-line"></i></span>
                          <h2>Email Us:</h2>
                          <p>farhanhussan@gmail.com</p>
                        </div>
                        <div class="single-contact wow fadeInUp" data-wow-delay=".6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp">
                          <h2>Socials</h2>
                          <div class="about-social">
                            <ul>
                              <li><a target="_blank" href="#"><i class="ri-facebook-circle-fill"></i></a></li>
                              <li><a target="_blank" href="#"><i class="ri-twitter-x-line"></i></a></li>
                              <li><a target="_blank" href="#"><i class="ri-linkedin-fill"></i></a></li>
                              <li><a target="_blank" href="#"><i class="ri-github-line"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
`;

// Replace the contact content part safely
content = content.replace(/<div\s*class="contact-content-part wow fadeInUp delay-0-2s"[\s\S]*?<div class="col-lg-8">/, newContactContent + '\n                    </div>\n                    <div class="col-lg-8">');

fs.writeFileSync('C:/Users/Addiztech/Desktop/farhan/index.html', content);
console.log('Contact updated successfully.');
