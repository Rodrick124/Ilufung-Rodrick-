document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Typewriter effect
    const heroText = document.getElementById('hero-text');
    const roles = ['Full Stack Developer', 'React Specialist', 'Node.js Expert', 'Problem Solver'];
    let roleIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        let typeSpeed = isDeleting ? 75 : 150;
        
        if (isDeleting) {
            heroText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    type();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            if (!mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden');
        });
    });

    // Scroll animations
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    };
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // Email button functionality
    const emailBtn = document.getElementById('email-btn');
    emailBtn.addEventListener('click', () => {
        window.location.href = 'mailto:rodrickilufung@gmail.com';
    });
});
