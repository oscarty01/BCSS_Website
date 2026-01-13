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
            // Only prevent default on mobile/tablet
            if (window.innerWidth <= 1024) {
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
    
    // Font size control using zoom
    const fontSizeBtns = document.querySelectorAll('.font-size-btn');
    
    // Default to 1x zoom for mobile/tablet devices, 1.2x for desktop
    const isMobileOrTablet = window.innerWidth <= 1024;
    const defaultZoom = isMobileOrTablet ? 'small' : 'medium';
    const savedZoomSize = localStorage.getItem('zoom-size') || defaultZoom;
    
    // Apply zoom level
    const applyZoom = (size) => {
        const zoomLevels = {
            'small': '1',
            'medium': '1.2',
            'large': '1.5'
        };
        document.documentElement.style.zoom = zoomLevels[size];
    };
    
    // Set the correct button as active based on saved setting
    fontSizeBtns.forEach(btn => {
        if (btn.dataset.size === savedZoomSize) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Add click handlers
    fontSizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const size = btn.dataset.size;
            
            // Remove active class from all buttons
            fontSizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Apply zoom and save to localStorage
            applyZoom(size);
            localStorage.setItem('zoom-size', size);
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

// Product Image Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
    const productImageWrappers = document.querySelectorAll('.product-image-wrapper');
    
    productImageWrappers.forEach(wrapper => {
        const productId = wrapper.dataset.product;
        const images = wrapper.querySelectorAll('.product-image');
        const dots = document.querySelectorAll(`.product-image-dots[data-product="${productId}"] .product-image-dot`);
        let currentIndex = 0;
        
        if (images.length <= 1) {
            // Hide dots if only one image
            const dotsContainer = document.querySelector(`.product-image-dots[data-product="${productId}"]`);
            if (dotsContainer) {
                dotsContainer.style.display = 'none';
            }
            return;
        }
        
        // Function to update carousel position
        const updateCarousel = (index) => {
            wrapper.style.transform = `translateX(-${index * 100}%)`;
            
            // Update dots
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        };
        
        // Add click handlers to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel(currentIndex);
            });
        });
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        wrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        wrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next image
                    currentIndex = (currentIndex + 1) % images.length;
                } else {
                    // Swipe right - previous image
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                }
                updateCarousel(currentIndex);
            }
        };
        
        // Mouse drag support for desktop
        let isDragging = false;
        let dragStartX = 0;
        let dragStartY = 0;
        let dragCurrentX = 0;
        
        wrapper.addEventListener('mousedown', (e) => {
            isDragging = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            dragCurrentX = dragStartX;
            wrapper.style.cursor = 'grabbing';
            e.preventDefault();
        });
        
        wrapper.addEventListener('mouseleave', (e) => {
            if (isDragging) {
                handleDragEnd();
            }
            wrapper.style.cursor = 'grab';
        });
        
        wrapper.addEventListener('mouseup', (e) => {
            if (isDragging) {
                handleDragEnd();
            }
        });
        
        wrapper.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            dragCurrentX = e.clientX;
        });
        
        const handleDragEnd = () => {
            if (!isDragging) return;
            
            const dragDistance = dragStartX - dragCurrentX;
            const dragThreshold = 50;
            
            if (Math.abs(dragDistance) > dragThreshold) {
                if (dragDistance > 0) {
                    // Dragged left - next image
                    currentIndex = (currentIndex + 1) % images.length;
                } else {
                    // Dragged right - previous image
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                }
                updateCarousel(currentIndex);
            }
            
            isDragging = false;
            wrapper.style.cursor = 'grab';
        };
        
        // Prevent image drag
        images.forEach(img => {
            img.addEventListener('dragstart', (e) => {
                e.preventDefault();
                return false;
            });
        });
        
        // Set cursor style
        wrapper.style.cursor = 'grab';
    });
    
    // Special Events - PDF opening on poster click (already handled by href, but keeping for consistency)
    // The links already have href pointing to PDFs, so they work without JavaScript
    // This is just for any additional functionality if needed in the future
});
