// Dark mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

// Set dark mode as default
document.documentElement.setAttribute('data-theme', 'dark');
toggleSwitch.checked = true;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleSwitch.checked = false;
}

toggleSwitch.addEventListener('change', switchTheme);

// Typing animation
new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 1000,
    loop: true
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animate skill bars on scroll
const skillLevels = document.querySelectorAll('.skill-level');
const animateSkills = () => {
    skillLevels.forEach(level => {
        const rect = level.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
        
        if (isVisible) {
            const width = level.getAttribute('data-level') + '%';
            level.style.width = width;
        } else {
            level.style.width = '0';
        }
    });
};

// Initial check for visible skill bars
animateSkills();

// Animate skill bars when scrolling
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(animateSkills);
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Contact info toggle
function toggleContactInfo(card, type) {
    const infoSpan = card.querySelector('.contact-info');
    const labelSpan = card.querySelector('.contact-label');
    
    if (infoSpan.classList.contains('hidden')) {
        infoSpan.classList.remove('hidden');
        labelSpan.classList.add('hidden');
        
        // Copy to clipboard
        const text = infoSpan.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert(`${type.charAt(0).toUpperCase() + type.slice(1)} copied to clipboard!`);
        });
    } else {
        infoSpan.classList.add('hidden');
        labelSpan.classList.remove('hidden');
    }
}

// Particle effect configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#007bff' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: true,
            animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#007bff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'bounce' },
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detectsOn: 'canvas',
        events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
        
        // Animate skill bars after page load
        animateSkills();
    }, 100);
});

// Scroll reveal animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(section => {
    observer.observe(section);
});

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax img');
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const rect = element.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (visible) {
            const yOffset = (window.pageYOffset - rect.top) * speed;
            element.style.transform = `translateY(${yOffset}px)`;
        }
    });
});

// Add floating animation to tech icons
const floatingIcons = document.querySelectorAll('.floating-icons i');
floatingIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`;
});

// Update footer name
document.querySelector('footer p').textContent = '© 2025 Okubazgi. All rights reserved.';
