// Smooth scroll animation for elements
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll reveal animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all sections to animate
    const sections = document.querySelectorAll('.question-section, .shocked-section, .woman-section, .conversation-section, .manager-section, .result-section, .meeting-section, .list-section, .qa-section, .cta-section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(section);
    });

    // Animate list items on scroll
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    });

    const listObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, 100);
            }
        });
    }, observerOptions);

    listItems.forEach(item => {
        listObserver.observe(item);
    });

    // Add floating animation to emojis and images
    const emojis = document.querySelectorAll('.emoji, .woman-emoji, .people-emoji, .trash-emoji, .meeting-emoji, .manager-icon, .result-icon');
    emojis.forEach(emoji => {
        emoji.style.animation = 'float 3s ease-in-out infinite';
    });
    
    // Add animation to content images
    const contentImages = document.querySelectorAll('.content-image');
    contentImages.forEach((img, index) => {
        img.style.animation = `fadeIn 0.8s ease-out ${index * 0.2}s both`;
    });

    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(style);

    // Add pulse animation to exclamation icon
    const exclamationIcon = document.querySelector('.exclamation-icon');
    if (exclamationIcon) {
        exclamationIcon.style.animation = 'pulse 2s ease-in-out infinite';
    }

    // Add hover effect to question marks
    const questionMarks = document.querySelector('.question-marks');
    if (questionMarks) {
        questionMarks.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        questionMarks.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Smooth scroll to sections when clicking on list items
    const listItemElements = document.querySelectorAll('.list-item');
    listItemElements.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const sections = ['.header', '.question-section', '.shocked-section', '.woman-section'];
            if (sections[index]) {
                const targetSection = document.querySelector(sections[index]);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    });

    // Add parallax effect to background and images
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.exclamation-icon, .question-marks');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Parallax for content images
        const images = document.querySelectorAll('.content-image');
        images.forEach((img, index) => {
            const rect = img.getBoundingClientRect();
            const speed = 0.3;
            const yPos = rect.top * speed;
            img.style.transform = `translateY(${yPos * 0.1}px) scale(${1 + (scrolled * 0.0001)})`;
        });
    });

    // Add click ripple effect to buttons and clickable elements
    const clickableElements = document.querySelectorAll('.list-item, .tag');
    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple effect CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(74, 144, 226, 0.3);
            width: 100px;
            height: 100px;
            margin-top: -50px;
            margin-left: -50px;
            animation: rippleEffect 0.6s;
            pointer-events: none;
        }
        
        @keyframes rippleEffect {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .list-item, .tag {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(rippleStyle);

    // Add typewriter effect to main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                mainTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 150);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
    
    // Add CTA button click handler
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // You can add form submission or modal open logic here
            console.log('상담 신청 버튼 클릭됨');
            
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('button-ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
});
