// Navbar Scroll Blur Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-xl', 'bg-slate-950/90');
    } else {
        nav.classList.remove('shadow-xl', 'bg-slate-950/90');
    }
});