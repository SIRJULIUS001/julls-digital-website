// footer.js
const footerHTML = `
<footer class="footer-bg py-5 mt-auto" style="background-color: #0F172A; color: white; border-top: 4px solid #F97316;">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-4 mb-4 text-center text-md-start">
                <h4 class="fw-bold mb-3"><span style="color: #F97316;">Julls</span> Digital</h4>
                <p class="small" style="color: #cbd5e1;">Innovate. Design. Grow. Crafting powerful, future-proof digital experiences in Meru.</p>
            </div>
            
            <div class="col-6 col-md-3 col-lg-2 offset-lg-1">
                <h5 class="fw-bold mb-3">Links</h5>
                <ul class="list-unstyled">
                    <li><a href="index.html" class="text-decoration-none" style="color: #cbd5e1;">Home</a></li>
                    <li><a href="about.html" class="text-decoration-none" style="color: #cbd5e1;">About</a></li>
                    <li><a href="services.html" class="text-decoration-none" style="color: #cbd5e1;">Services</a></li>
                    <li><a href="blog.html" class="text-decoration-none" style="color: #cbd5e1;">Blog</a></li>
                </ul>
            </div>

            <div class="col-6 col-md-3 col-lg-2">
                <h5 class="fw-bold mb-3">Expertise</h5>
                <ul class="list-unstyled small" style="color: #cbd5e1;">
                    <li>Web Design</li>
                    <li>M-Pesa Integration</li>
                    <li>Local SEO Meru</li>
                </ul>
            </div>

            <div class="col-lg-3 text-center text-md-start">
                <h5 class="fw-bold mb-3">Follow Julls Digital</h5>
                <p class="small mb-3" style="color: #cbd5e1;">Stay updated with digital tips:</p>
                <div class="d-flex justify-content-center justify-content-md-start gap-3">
                    <a href="https://wa.me/254790322045" target="_blank" title="WhatsApp" style="color: #25d366; font-size: 1.5rem;"><i class="fab fa-whatsapp"></i></a>
                    <a href="#" target="_blank" title="Instagram" style="color: #E4405F; font-size: 1.5rem;"><i class="fab fa-instagram"></i></a>
                    <a href="#" target="_blank" title="LinkedIn" style="color: #0A66C2; font-size: 1.5rem;"><i class="fab fa-linkedin"></i></a>
                    <a href="#" target="_blank" title="Facebook" style="color: #1877F2; font-size: 1.5rem;"><i class="fab fa-facebook"></i></a>
                    <a href="#" target="_blank" title="X (Twitter)" style="color: #ffffff; font-size: 1.5rem;"><i class="fab fa-x-twitter"></i></a>
                    <a href="#" target="_blank" title="TikTok" style="color: #ff0050; font-size: 1.5rem;"><i class="fab fa-tiktok"></i></a>
                </div>
                <p class="mt-3 mb-0 small text-muted">ntoitiulius01@gmail.com</p>
            </div>
        </div>
        <hr class="my-4" style="border-color: rgba(255,255,255,0.1);">
        <div class="text-center small text-muted">&copy; 2026 Julls Digital. All rights reserved.</div>
    </div>
</footer>`;

document.body.insertAdjacentHTML('beforeend', footerHTML);
