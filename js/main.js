// Main JavaScript functionality for GREIA Life OS

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
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
            }
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .connect-card, .service-card, .lifestyle-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial check for elements in view
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Mobile navigation toggle
    const createMobileNav = () => {
        const nav = document.querySelector('.nav-links');
        const burger = document.createElement('div');
        burger.className = 'mobile-nav-toggle';
        burger.innerHTML = '<i class="fas fa-bars"></i>';
        
        document.querySelector('.nav-container').appendChild(burger);

        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.querySelector('i').classList.toggle('fa-bars');
            burger.querySelector('i').classList.toggle('fa-times');
        });
    };

    // Initialize mobile navigation if screen width is below 768px
    if (window.innerWidth < 768) {
        createMobileNav();
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768 && !document.querySelector('.mobile-nav-toggle')) {
            createMobileNav();
        } else if (window.innerWidth >= 768 && document.querySelector('.mobile-nav-toggle')) {
            document.querySelector('.mobile-nav-toggle').remove();
            document.querySelector('.nav-links').classList.remove('nav-active');
        }
    });

    // Authentication modal functionality
    const setupAuthModals = () => {
        const loginBtn = document.querySelector('.btn-login');
        const signupBtn = document.querySelector('.btn-signup');
        
        if (loginBtn && signupBtn) {
            [loginBtn, signupBtn].forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const type = btn.classList.contains('btn-login') ? 'login' : 'signup';
                    showAuthModal(type);
                });
            });
        }
    };

    const showAuthModal = (type) => {
        const modal = document.createElement('div');
        modal.className = 'auth-modal';
        modal.innerHTML = `
            <div class="auth-modal-content">
                <span class="close-modal">&times;</span>
                <h2>${type === 'login' ? 'Login' : 'Sign Up'}</h2>
                <form class="auth-form">
                    <input type="email" placeholder="Email" required>
                    <input type="password" placeholder="Password" required>
                    ${type === 'signup' ? '<input type="password" placeholder="Confirm Password" required>' : ''}
                    <button type="submit" class="btn-primary">${type === 'login' ? 'Login' : 'Sign Up'}</button>
                </form>
                <div class="social-auth">
                    <p>Or continue with</p>
                    <button class="google-auth">
                        <i class="fab fa-google"></i> Google
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });

        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // Form submission
        const form = modal.querySelector('.auth-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add authentication logic here
            console.log('Authentication submitted');
            modal.remove();
        });
    };

    // Initialize authentication modals
    setupAuthModals();

    // Add styles for auth modal
    const addAuthStyles = () => {
        const styles = document.createElement('style');
        styles.textContent = `
            .auth-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1001;
            }
            .auth-modal-content {
                background: white;
                padding: 2rem;
                border-radius: 0.5rem;
                width: 100%;
                max-width: 400px;
                position: relative;
            }
            .close-modal {
                position: absolute;
                right: 1rem;
                top: 1rem;
                font-size: 1.5rem;
                cursor: pointer;
            }
            .auth-form {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin: 1.5rem 0;
            }
            .auth-form input {
                padding: 0.75rem;
                border: 1px solid var(--border-color);
                border-radius: 0.375rem;
            }
            .social-auth {
                text-align: center;
                margin-top: 1.5rem;
            }
            .google-auth {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                width: 100%;
                padding: 0.75rem;
                border: 1px solid var(--border-color);
                border-radius: 0.375rem;
                background: white;
                cursor: pointer;
                margin-top: 0.5rem;
            }
        `;
        document.head.appendChild(styles);
    };

    // Initialize auth styles
    addAuthStyles();
});