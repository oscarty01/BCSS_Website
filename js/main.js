// Main JavaScript file for general functionality

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Dropdown menu toggle for mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const dropdown = toggle.closest('.dropdown');
            // Only prevent default on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                const isActive = dropdown.classList.contains('active');
                
                // Close all dropdowns first
                document.querySelectorAll('.dropdown').forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });
                
                // Toggle the clicked dropdown
                if (isActive) {
                    dropdown.classList.remove('active');
                } else {
                    dropdown.classList.add('active');
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-header')) {
            mainNav?.classList.remove('active');
            mobileMenuToggle?.classList.remove('active');
            // Close all dropdowns
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Close mobile menu when clicking a dropdown link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't close if it's the dropdown toggle itself or a dropdown menu item
            if (!link.classList.contains('dropdown-toggle') && !link.closest('.dropdown-menu')) {
                mainNav?.classList.remove('active');
                mobileMenuToggle?.classList.remove('active');
            }
        });
    });
    
    // Font size control
    const fontSizeBtns = document.querySelectorAll('.font-size-btn');
    const root = document.documentElement;
    
    // Set small as default active
    const smallBtn = document.querySelector('.font-size-btn[data-size="small"]');
    if (smallBtn) {
        smallBtn.classList.add('active');
    }
    
    fontSizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const size = btn.dataset.size;
            
            // Remove active class from all buttons
            fontSizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Adjust font size
            switch(size) {
                case 'small':
                    root.style.fontSize = '14px';
                    break;
                case 'medium':
                    root.style.fontSize = '16px';
                    break;
                case 'large':
                    root.style.fontSize = '18px';
                    break;
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect (optional - add shadow on scroll)
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });
});

// Utility function to add loading state
function showLoading(element) {
    element.classList.add('loading');
    element.disabled = true;
}

function hideLoading(element) {
    element.classList.remove('loading');
    element.disabled = false;
}

// Utility function for smooth reveals on scroll (can be used for future sections)
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
