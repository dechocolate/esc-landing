// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Background Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(249, 246, 240, 0.98)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(249, 246, 240, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .testimonial-card, .step, .stat');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Button Click Handlers
document.addEventListener('DOMContentLoaded', function() {
    // AI Analysis buttons
    const aiAnalysisBtns = document.querySelectorAll('.btn-primary');
    aiAnalysisBtns.forEach(btn => {
        if (btn.textContent.includes('AI')) {
            btn.addEventListener('click', function() {
                showModal('AI 첫인상 분석', 
                    '🤖 AI가 당신의 매력을 분석합니다<br><br>' +
                    '• 외모 & 패션 스타일 분석<br>' +
                    '• 첫인상 매력 포인트 도출<br>' +
                    '• 맞춤형 매칭 전략 제안<br><br>' +
                    '분석 결과는 24시간 내에 이메일로 발송됩니다.',
                    '분석 신청하기'
                );
            });
        }
    });
    
    // Manager Consultation buttons
    const consultationBtns = document.querySelectorAll('.btn-secondary');
    consultationBtns.forEach(btn => {
        if (btn.textContent.includes('상담')) {
            btn.addEventListener('click', function() {
                showModal('1:1 매칭 상담', 
                    '👨‍💼 전문 매니저와 개인 상담<br><br>' +
                    '• 개인별 맞춤 매칭 전략<br>' +
                    '• 프리미엄 회원 추천<br>' +
                    '• 데이트 장소 & 시간 제안<br>' +
                    '• 후기 기반 재매칭 관리<br><br>' +
                    '상담은 평일 10:00-18:00에 진행됩니다.',
                    '상담 예약하기'
                );
            });
        }
    });
    
    // Quick menu items
    const quickItems = document.querySelectorAll('.quick-item');
    quickItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            if (text.includes('AI')) {
                showModal('AI 매력 분석', 
                    '🧠 당신만의 매력 포인트를 발견하세요<br><br>' +
                    'AI가 분석하는 항목:<br>' +
                    '• 외모 & 스타일 점수<br>' +
                    '• 첫인상 매력도<br>' +
                    '• 개선 포인트 제안<br>' +
                    '• 이상형 매칭률',
                    'AI 분석 시작'
                );
            } else if (text.includes('매니저')) {
                showModal('매니저 상담', 
                    '🤝 전문 매니저가 도와드립니다<br><br>' +
                    '• 개인 맞춤 매칭 서비스<br>' +
                    '• 프리미엄 회원 큐레이션<br>' +
                    '• 안전한 만남 보장<br>' +
                    '• 노쇼 시 전액 환불',
                    '매니저 연결'
                );
            } else if (text.includes('가면')) {
                showModal('가면 대화', 
                    '🎭 익명으로 시작하는 진짜 대화<br><br>' +
                    '• 외모가 아닌 대화로 시작<br>' +
                    '• 진솔한 소통 가능<br>' +
                    '• 상호 관심 시 프로필 공개<br>' +
                    '• 안전하고 품격있는 만남',
                    '가면 대화 시작'
                );
            } else if (text.includes('상담톡')) {
                showModal('실시간 상담', 
                    '💬 궁금한 점을 바로 문의하세요<br><br>' +
                    '• 실시간 1:1 상담<br>' +
                    '• 서비스 이용 가이드<br>' +
                    '• 매칭 과정 안내<br>' +
                    '• 기술적 문의 해결',
                    '상담톡 시작'
                );
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

    actionBtn.addEventListener('click', function() {
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
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 25px 80px rgba(163, 138, 79, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 40px rgba(28, 28, 46, 0.1)';
        });
    });
});

// Testimonial Cards Animation
document.addEventListener('DOMContentLoaded', function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('fade-in-up');
    });
});

// Stats Counter Animation
document.addEventListener('DOMContentLoaded', function() {
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
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 120px;
        right: 32px;
        width: 50px;
        height: 50px;
        background: #A38A4F;
        color: #FFFFFF;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        font-size: 18px;
        box-shadow: 0 8px 25px rgba(163, 138, 79, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollBtn.addEventListener('mouseenter', function() {
        this.style.background = '#8B7A43';
        this.style.transform = 'scale(1.1)';
    });

    scrollBtn.addEventListener('mouseleave', function() {
        this.style.background = '#A38A4F';
        this.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', addScrollToTop);

// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class after page loads
    window.addEventListener('load', function() {
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