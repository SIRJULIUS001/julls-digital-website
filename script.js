document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Scroll-Based Navigation Effect ---
    const mainNavbar = document.getElementById('main-navbar');
    const scrollThreshold = 100; // Pixels to scroll before changing the nav style

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            mainNavbar.classList.add('scrolled-nav');
        } else {
            mainNavbar.classList.remove('scrolled-nav');
        }
    };

    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);

    // --- 2. Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Check if form is valid (Bootstrap's internal validation)
            if (!contactForm.checkValidity()) {
                event.preventDefault(); // Stop form submission
                event.stopPropagation();
            }

            // Custom checks for required fields
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            let isValid = true;

            // Name validation
            if (nameField.value.trim() === '') {
                nameField.classList.add('is-invalid');
                isValid = false;
            } else {
                nameField.classList.remove('is-invalid');
            }

            // Email validation (simple check for non-empty and basic format)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailField.value.trim() === '' || !emailPattern.test(emailField.value.trim())) {
                emailField.classList.add('is-invalid');
                isValid = false;
            } else {
                emailField.classList.remove('is-invalid');
            }
            
            // If any custom validation failed, prevent submission
            if (!isValid) {
                event.preventDefault();
            }

            // Apply Bootstrap's visual validation styles
            contactForm.classList.add('was-validated');

            // NOTE: For a real site, successful submission would involve an AJAX request
            // to a server-side endpoint (like PHP, Node.js, etc.) here.
            if (isValid && contactForm.checkValidity()) {
                console.log("Form successfully validated and ready for server submission!");
                // event.preventDefault(); // Uncomment this to test validation without refreshing the page
                // alert('Thank you for your message! We will be in touch shortly.');
            }
        });
    }

});