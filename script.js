// ============================================
// Weeranan Honsawat - Resume Website Scripts
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update footer year
    const footerYear = document.querySelector('.footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `© ${currentYear} วีระนันท์ หอมสวัสดิ์. สงวนลิขสิทธิ์`;
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards with animation
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Contact item click feedback
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.tagName === 'A') {
                this.style.transform = 'scale(0.97)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 120);
            }
        });
    });

    // Skill tag and interest tag click animation
    document.querySelectorAll('.skill-tag, .interest-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.93)';
            setTimeout(() => {
                this.style.transform = '';
            }, 80);
        });
    });

    // Project item hover enhancement
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.25s ease';
        });
    });

    // Add subtle parallax effect to avatar on mouse move
    const avatar = document.querySelector('.avatar-placeholder');
    if (avatar) {
        document.addEventListener('mousemove', function(e) {
            const rect = avatar.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const moveX = (e.clientX - centerX) / 50;
            const moveY = (e.clientY - centerY) / 50;
            
            avatar.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }

    // Language dots tooltip
    const languageItems = document.querySelectorAll('.language-item');
    languageItems.forEach(item => {
        const dots = item.querySelectorAll('.dot');
        const filledCount = item.querySelectorAll('.dot.filled').length;
        
        item.style.cursor = 'pointer';
        item.title = `ระดับความชำนาญ: ${filledCount}/5`;
    });

    console.log('Weeranan Honsawat Resume Website loaded successfully!');
});
