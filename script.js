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
/* Social Proof Section */
.social-proof {
    background: #f8fdff;
    padding: 100px 0;
}

.social-proof-header {
    text-align: center;
    margin-bottom: 60px;
}

.social-proof-header h2 {
    color: #02263f;
    font-size: 2.3rem;
    font-weight: 700;
    margin-bottom: 16px;
}

.social-proof-header p {
    color: var(--secondary-color);
    font-size: 1.1rem;
}

/* Stats Grid */
.social-stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

/* Card */
.social-stat-card {
    background: #ffffff;
    padding: 40px 30px;
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s ease;
}

.social-stat-card:hover {
    transform: translateY(-8px);
}

/* Icon */
.stat-icon {
    font-size: 2rem;
    margin-bottom: 15px;
}

/* Numbers */
.stat-number {
    font-size: 2.2rem;
    font-weight: 800;
    color: #02263f;
    margin-bottom: 10px;
}

/* Text */
.stat-text {
    font-size: 1rem;
    color: var(--text-light);
}

/* Mobile */
@media (max-width: 768px) {
    .social-stats-grid {
        grid-template-columns: 1fr;
    }

    .social-proof {
        padding: 60px 0;
    }
}
