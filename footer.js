// footer.js
const footerHTML = `
<footer class="footer-bg py-5 mt-auto" style="background-color: #0F172A; color: white; border-top: 4px solid #F97316;">
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-4 mb-4">
                <h4 class="fw-bold mb-3"><span style="color: #F97316;">Julls</span> Digital</h4>
                <p class="small text-muted">Innovate. Design. Grow. Crafting powerful, future-proof digital experiences in Meru.</p>
            </div>
            <div class="col-6 col-md-3 col-lg-2 offset-lg-1">
                <h5 class="fw-bold mb-3">Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="index.html" class="footer-link text-decoration-none" style="color: #cbd5e1;">Home</a></li>
                    <li><a href="about.html" class="footer-link text-decoration-none" style="color: #cbd5e1;">About</a></li>
                    <li><a href="services.html" class="footer-link text-decoration-none" style="color: #cbd5e1;">Services</a></li>
                    <li><a href="blog.html" class="footer-link text-decoration-none" style="color: #cbd5e1;">Blog</a></li>
                </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-2">
                <h5 class="fw-bold mb-3">Expertise</h5>
                <ul class="list-unstyled small" style="color: #cbd5e1;">
                    <li>Web Design</li>
                    <li>M-Pesa Integration</li>
                    <li>SEO Meru</li>
                </ul>
            </div>
            <div class="col-lg-3">
                <h5 class="fw-bold mb-3">Connect</h5>
                <p class="small text-muted mb-2">ntoitiulius01@gmail.com</p>
                <div class="d-flex gap-3">
                    <a href="https://wa.me/254790322045" style="color: #25d366; font-size: 1.5rem;"><i class="fab fa-whatsapp"></i></a>
                    <a href="#" style="color: white; font-size: 1.5rem;"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        <hr class="mt-4 mb-3" style="border-color: rgba(255,255,255,0.1);">
        <div class="text-center small text-muted">&copy; 2026 Julls Digital. All rights reserved.</div>
    </div>
</footer>`;

document.body.insertAdjacentHTML('beforeend', footerHTML);
