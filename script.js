// Add any interactive features here
// Currently using pure CSS for minimal, lightweight approach

// Optional: Smooth scroll for any future anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('NFC Profiling - Minimal profile page loaded!');
