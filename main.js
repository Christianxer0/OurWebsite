document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scroll for the Hero "Discover More" button
    const discoverBtn = document.querySelector('.btn-discover');
    const content = document.querySelector('.content-wrapper');

    if (discoverBtn && content) {
        discoverBtn.addEventListener('click', () => {
            content.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Responsive Click Effect for all "Learn More" links
    const learnMoreButtons = document.querySelectorAll('.btn-learn');

    learnMoreButtons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });

        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});