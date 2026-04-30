document.addEventListener('DOMContentLoaded', () => {
    // Add load class to body for initial animations
    document.body.classList.add('loaded');

    // Scroll reveal animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.ps-list, .ps-comparison-img, .hiw-item, .testimonial-wrapper, .cta-box, .section-header, .hero-content, .hero-visual');
    
    animatedElements.forEach(el => {
        el.classList.add('fade-up-element');
        observer.observe(el);
    });
});
