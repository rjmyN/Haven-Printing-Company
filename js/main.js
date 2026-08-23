// =============================================
// HAVEN PRINTING COMPANY INC – MAIN JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- NAVBAR: scroll effect ----
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ---- HAMBURGER MENU ----
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            }
        });
    }

    // ---- FADE IN ON SCROLL ----
    const fadeEls = document.querySelectorAll(
        '.service-card, .why-card, .testi-card, .mvv-card, .timeline-item, ' +
        '.service-full-card, .portfolio-item, .contact-card, .about-grid, ' +
        '.section-header, .process-step, .stat'
    );

    fadeEls.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, (i % 6) * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    fadeEls.forEach(el => observer.observe(el));

    // ---- PORTFOLIO FILTER ----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.4s ease forwards';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // ---- BOOKING FORM: client-side validation feedback ----
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            const phone = document.getElementById('phone');
            if (phone && phone.value.trim().length < 7) {
                e.preventDefault();
                phone.style.borderColor = '#e63946';
                phone.focus();
                showNotice('Please enter a valid phone number.', 'error');
                return;
            }
            showNotice('Thank you! Your booking request has been submitted. We\'ll contact you shortly.', 'success');
        });
    }

    // ---- CONTACT FORM ----
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            showNotice('Message sent! We\'ll get back to you soon.', 'success');
        });
    }

    // ---- SMOOTH SCROLL for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});

// ---- NOTICE HELPER ----
function showNotice(message, type) {
    const existing = document.querySelector('.form-notice');
    if (existing) existing.remove();

    const notice = document.createElement('div');
    notice.className = 'form-notice';
    notice.style.cssText = `
    position: fixed; top: 24px; right: 24px; z-index: 9999;
    background: ${type === 'success' ? '#2d6a4f' : '#e63946'};
    color: #fff; padding: 16px 24px;
    border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    font-size: 0.95rem; font-weight: 500; max-width: 360px;
    animation: slideIn 0.3s ease;
  `;
    notice.textContent = message;
    document.body.appendChild(notice);

    setTimeout(() => {
        notice.style.opacity = '0';
        notice.style.transition = 'opacity 0.4s ease';
        setTimeout(() => notice.remove(), 400);
    }, 4000);
}

// CSS animation for notice
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);


// ---- FAQ ACCORDION ----
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items in the same category
                const category = item.closest('.faq-category');
                if (category) {
                    category.querySelectorAll('.faq-item').forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                }

                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
});
