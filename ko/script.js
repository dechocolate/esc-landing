// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Header scroll behavior
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Initialize Lottie Animations
const heroAnimation = lottie.loadAnimation({
    container: document.getElementById('lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets5.lottiefiles.com/packages/lf20_49rdyysj.json' // 프리미엄 러브 애니메이션
});

const lifestyleAnimation = lottie.loadAnimation({
    container: document.getElementById('lottie-lifestyle'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets3.lottiefiles.com/packages/lf20_2cwDXD.json' // 프리미엄 러브 애니메이션
});

// Fade-in animation for elements
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, fadeInOptions);

fadeElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Helper function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add fade-in class to elements
document.querySelectorAll('.feature-card, .hero-content, .hero-animation').forEach(element => {
    element.classList.add('fade-in');
});

// Quick menu hover effect
const quickItems = document.querySelectorAll('.quick-item');
quickItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Add animation to stats when they come into view
const stats = document.querySelectorAll('.stat-number');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

stats.forEach(stat => {
    observer.observe(stat);
});

// Button Click Handlers
document.addEventListener('DOMContentLoaded', function () {
    // AI Analysis buttons
    const aiAnalysisBtns = document.querySelectorAll('.btn-primary');
    aiAnalysisBtns.forEach(btn => {
        if (btn.textContent.includes('AI')) {
            btn.addEventListener('click', function () {
                window.location.href = 'https://web.classy.social/analyze';
            });
        }
    });

    const analysisBtns = document.querySelectorAll('.btn-primary');
    analysisBtns.forEach(btn => {
        if (btn.textContent.includes('상담')) {
            btn.addEventListener('click', function () {
                window.location.href = 'https://web.classy.social/analyze';
            });
        }
    });

    // Manager Consultation buttons
    const consultationBtns = document.querySelectorAll('.btn-secondary');
    consultationBtns.forEach(btn => {
        if (btn.textContent.includes('상담')) {
            btn.addEventListener('click', function () {
                window.open('http://pf.kakao.com/_GXHBn', '_blank');
            });
        }
    });

    // Quick menu items
    const quickItems = document.querySelectorAll('.quick-item');
    quickItems.forEach(item => {
        item.addEventListener('click', function () {
            const text = this.querySelector('span').textContent;
            if (text.includes('AI')) {
                window.location.href = 'https://web.classy.social/analyze';                
            } else if (text.includes('상담톡')) {
                window.open('http://pf.kakao.com/_GXHBn', '_blank');
            }
        });
    });
});

// Modal functionality
function showModal(title, content, buttonText) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.classy-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'classy-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>${content}</p>
                </div>
                <div class="modal-footer">
                    <button class="btn-modal-action">${buttonText}</button>
                    <button class="btn-modal-cancel">취소</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles
    const modalStyles = `
        .classy-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: modalFadeIn 0.3s ease;
        }

        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(28, 28, 46, 0.8);
            backdrop-filter: blur(5px);
        }

        .modal-content {
            background: #FFFFFF;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            z-index: 1;
            box-shadow: 0 20px 60px rgba(28, 28, 46, 0.3);
        }

        .modal-header {
            padding: 2rem 2rem 1rem;
            border-bottom: 1px solid #F0F0F0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .modal-header h3 {
            color: #1C1C2E;
            font-size: 24px;
            font-weight: 600;
            margin: 0;
        }

        .modal-close {
            background: none;
            border: none;
            font-size: 28px;
            color: #9B9B9B;
            cursor: pointer;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .modal-close:hover {
            background: #F0F0F0;
            color: #1C1C2E;
        }

        .modal-body {
            padding: 2rem;
        }

        .modal-body p {
            color: #1C1C2E;
            font-size: 16px;
            line-height: 1.6;
            margin: 0;
        }

        .modal-footer {
            padding: 1rem 2rem 2rem;
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
        }

        .btn-modal-action {
            background: #A38A4F;
            color: #FFFFFF;
            border: none;
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-modal-action:hover {
            background: #8B7A43;
            transform: translateY(-2px);
        }

        .btn-modal-cancel {
            background: transparent;
            color: #9B9B9B;
            border: 1px solid #E0E0E0;
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-modal-cancel:hover {
            background: #F0F0F0;
            color: #1C1C2E;
        }

        @keyframes modalFadeIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @media (max-width: 480px) {
            .modal-content {
                width: 95%;
                margin: 1rem;
            }

            .modal-header, .modal-body {
                padding: 1.5rem;
            }

            .modal-footer {
                padding: 1rem 1.5rem 1.5rem;
                flex-direction: column;
            }

            .btn-modal-action, .btn-modal-cancel {
                width: 100%;
            }
        }
    `;

    // Inject modal styles if not already present
    if (!document.querySelector('#modal-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'modal-styles';
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
    }

    // Modal event listeners
    const closeBtn = modal.querySelector('.modal-close');
    const cancelBtn = modal.querySelector('.btn-modal-cancel');
    const actionBtn = modal.querySelector('.btn-modal-action');
    const overlay = modal.querySelector('.modal-overlay');

    function closeModal() {
        modal.style.animation = 'modalFadeOut 0.3s ease';
        setTimeout(() => modal.remove(), 300);
    }

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    actionBtn.addEventListener('click', function () {
        // Simulate form submission
        actionBtn.textContent = '처리중...';
        actionBtn.disabled = true;

        setTimeout(() => {
            alert('신청이 완료되었습니다! 곧 연락드리겠습니다.');
            closeModal();
        }, 1500);
    });

    // Add fadeOut animation
    const fadeOutKeyframes = `
        @keyframes modalFadeOut {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(0.9);
            }
        }
    `;

    if (!document.querySelector('#modal-fadeout-styles')) {
        const fadeOutStyleSheet = document.createElement('style');
        fadeOutStyleSheet.id = 'modal-fadeout-styles';
        fadeOutStyleSheet.textContent = fadeOutKeyframes;
        document.head.appendChild(fadeOutStyleSheet);
    }
}

// Feature Cards Hover Effect
document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 25px 80px rgba(163, 138, 79, 0.2)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.boxShadow = '0 10px 40px rgba(28, 28, 46, 0.1)';
        });
    });
});

// Testimonial Cards Animation
document.addEventListener('DOMContentLoaded', function () {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in-up');
    });
});

// Stats Counter Animation
document.addEventListener('DOMContentLoaded', function () {
    const stats = document.querySelectorAll('.stat-number');

    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const isPercentage = finalValue.includes('%');
                const numericValue = parseInt(finalValue);

                let currentValue = 0;
                const increment = numericValue / 50; // 50 steps

                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        currentValue = numericValue;
                        clearInterval(timer);
                    }

                    target.textContent = Math.floor(currentValue) + (isPercentage ? '%' : (finalValue.includes('일') ? '일' : ''));
                }, 30);

                observer.unobserve(target);
            }
        });
    };

    const statsObserver = new IntersectionObserver(animateStats, {
        threshold: 0.5
    });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Scroll to Top Functionality
document.addEventListener('DOMContentLoaded', function () {
    const scrollTopBtn = document.querySelector('.scroll-top');
    const quickChatBtn = document.querySelector('.quick-chat');

    // Scroll to top button
    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Quick chat button
    if (quickChatBtn) {
        quickChatBtn.addEventListener('click', function () {
            window.open('http://pf.kakao.com/_GXHBn', '_blank');
        });
    }
});

// Loading Animation
document.addEventListener('DOMContentLoaded', function () {
    // Add loading class to body initially
    document.body.classList.add('loading');

    // Remove loading class after page loads
    window.addEventListener('load', function () {
        document.body.classList.remove('loading');

        // Trigger hero animation
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.animation = 'heroFadeIn 1s ease forwards';
        }
    });
});

// Add CSS for loading and hero animations
const additionalStyles = `
    .loading {
        overflow: hidden;
    }
    
    .loading .hero-content {
        opacity: 0;
        transform: translateY(50px);
    }
    
    .fade-in-up {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes heroFadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Floating hearts animation enhancement */
    .floating-hearts i {
        animation: floatHeart 4s ease-in-out infinite;
    }

    @keyframes floatHeart {
        0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg); 
            opacity: 0.7; 
        }
        50% { 
            transform: translateY(-15px) scale(1.1) rotate(10deg); 
            opacity: 1; 
        }
    }

    /* Step icons pulse effect */
    .step-icon {
        animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;

// Inject additional styles
const additionalStyleSheet = document.createElement('style');
additionalStyleSheet.textContent = additionalStyles;
document.head.appendChild(additionalStyleSheet);

document.addEventListener('DOMContentLoaded', function () {
    // Fade-in Animation on Scroll
    const fadeElements = document.querySelectorAll('.feature-card, .testimonial-card, .step');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });

    // Add fade-in class
    document.addEventListener('scroll', function () {
        fadeElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('fade-in');
            }
        });
    });

    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add fade-in class CSS
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// Testimonials Carousel Logic
function initTestimonialsCarousel() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.carousel-track .testimonial-card');
    if (!track || cards.length === 0) return;

    let cardsPerView = window.innerWidth <= 768 ? 1 : 3;
    let cardWidth = track.offsetWidth / cardsPerView;
    let totalCards = cards.length;
    let currentIndex = 0;

    // 기존 복제 제거
    const clones = track.querySelectorAll('.carousel-clone');
    clones.forEach(clone => clone.remove());

    // cardsPerView만큼 앞에서 복제해서 뒤에 붙임 (무한루프)
    for (let i = 0; i < cardsPerView; i++) {
        const clone = cards[i].cloneNode(true);
        clone.classList.add('carousel-clone');
        track.appendChild(clone);
    }

    function updateCarousel(behavior = 'smooth') {
        track.scrollTo({
            left: currentIndex * cardWidth,
            behavior
        });
    }

    function slideNext() {
        currentIndex++;
        updateCarousel();
        // 마지막(복제) 카드셋에 도달하면, 첫 카드셋으로 순간이동
        if (currentIndex === totalCards) {
            setTimeout(() => {
                currentIndex = 0;
                updateCarousel('auto');
            }, 400); // transition 시간과 맞춤
        }
    }

    let autoSlide = setInterval(slideNext, 3000);

    // 반응형 대응: 리사이즈 시 카드 수/너비 재계산 및 복제 재설정
    window.addEventListener('resize', () => {
        cardsPerView = window.innerWidth <= 768 ? 1 : 3;
        cardWidth = track.offsetWidth / cardsPerView;
        // 복제 재설정
        const clones = track.querySelectorAll('.carousel-clone');
        clones.forEach(clone => clone.remove());
        for (let i = 0; i < cardsPerView; i++) {
            const clone = cards[i].cloneNode(true);
            clone.classList.add('carousel-clone');
            track.appendChild(clone);
        }
        updateCarousel('auto');
    });

    // 마우스 올리면 멈춤, 내리면 재시작
    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
        autoSlide = setInterval(slideNext, 3000);
    });
}
document.addEventListener('DOMContentLoaded', initTestimonialsCarousel); 
