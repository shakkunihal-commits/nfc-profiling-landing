// Smooth scroll navigation
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Demo section interaction
const demoSteps = document.querySelectorAll('.demo-step');
const demoScreen = document.getElementById('demoScreen');

demoSteps.forEach(step => {
    step.addEventListener('click', () => {
        // Remove active class from all steps
        demoSteps.forEach(s => s.classList.remove('active'));
        // Add active class to clicked step
        step.classList.add('active');
        
        // Hide all demo contents
        const demoContents = document.querySelectorAll('.demo-content');
        demoContents.forEach(content => content.style.display = 'none');
        
        // Show selected demo content
        const stepNum = step.getAttribute('data-step');
        const selectedContent = document.querySelector(`.step-${stepNum}-content`);
        if (selectedContent) {
            selectedContent.style.display = 'flex';
        }
    });
});

// CTA form submission
const ctaForm = document.querySelector('.cta-form');
if (ctaForm) {
    ctaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = ctaForm.querySelector('input[type="email"]').value;
        console.log('Email submitted:', email);
        alert('Thank you! Check your email for next steps.');
        ctaForm.reset();
    });
}

// CTA buttons
const ctaButtons = document.querySelectorAll('.btn-primary');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar blur effect on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.background = 'rgba(15, 15, 30, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 15, 30, 0.8)';
    }
});

console.log('NFC Profiling - Modern landing page loaded!');
