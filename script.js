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

    // Select all sections to animate (excluding CTA for custom faster reveal)
    const sections = document.querySelectorAll('.question-section, .shocked-section, .woman-section, .conversation-section, .manager-section, .result-section, .meeting-section, .list-section, .qa-section, .faq');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(section);
    });

    // Faster reveal for CTA section
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        // Initial hidden state
        ctaSection.style.opacity = '0';
        ctaSection.style.transform = 'translateY(20px)';
        // Immediate transition without index delay
        ctaSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        const ctaObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    ctaSection.style.opacity = '1';
                    ctaSection.style.transform = 'translateY(0)';
                    obs.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            // Trigger earlier by expanding viewport bounds
            rootMargin: '200px 0px',
            // Small threshold so it reveals as soon as it barely enters
            threshold: 0.01
        });

        ctaObserver.observe(ctaSection);
    }

    // FAQ accessible accordion toggle
    const faqButtons = document.querySelectorAll('.faq__btn');
    faqButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const panelId = btn.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            const expanded = btn.getAttribute('aria-expanded') === 'true';

            // Close others
            document.querySelectorAll('.faq__btn[aria-expanded="true"]').forEach((openBtn) => {
                if (openBtn !== btn) {
                    openBtn.setAttribute('aria-expanded', 'false');
                    const openPanel = document.getElementById(openBtn.getAttribute('aria-controls'));
                    if (openPanel) {
                        openPanel.hidden = true;
                        openBtn.parentElement.removeAttribute('open');
                    }
                }
            });

            btn.setAttribute('aria-expanded', String(!expanded));
            if (panel) panel.hidden = expanded;
            btn.parentElement.toggleAttribute('open', !expanded);
        });
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
            // Open Kakao Open Chat in a new tab immediately
            const kakaoUrl = 'https://docs.google.com/forms/d/1KNjL3A-p0e5U6jiuOCArirkPcEz0uEiJYyR6QjpPJSw/edit';
            window.open(kakaoUrl, '_blank');

            // Optional: visual feedback on current page
            const ripple = document.createElement('span');
            ripple.classList.add('button-ripple');
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    }

    // Floating CTA visibility control
    const floatingCta = document.querySelector('.floating-cta');
    const mainCta = document.querySelector('.cta-section');
    if (floatingCta) {
        // Show floating CTA by default
        floatingCta.hidden = false;

        const toggleFloating = (show) => {
            floatingCta.style.opacity = show ? '1' : '0';
            floatingCta.style.transform = show ? 'translateY(0)' : 'translateY(12px)';
            floatingCta.style.transition = 'opacity .25s ease, transform .25s ease';
            // Keep in DOM for smoothness; visually hide
        };

        // Hide floating CTA while main CTA section is in view
        if (mainCta) {
            const floatObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        toggleFloating(false);
                    } else {
                        toggleFloating(true);
                    }
                });
            }, { root: null, threshold: 0.1 });
            floatObserver.observe(mainCta);
        } else {
            toggleFloating(true);
        }
    }
});
