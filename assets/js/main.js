document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Navbar Background Opacity Control on Scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-xl', 'bg-slate-950/95');
            navbar.classList.remove('bg-slate-950/85');
        } else {
            navbar.classList.remove('shadow-xl', 'bg-slate-950/95');
            navbar.classList.add('bg-slate-950/85');
        }
    });
});