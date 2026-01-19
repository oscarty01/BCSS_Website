// Site Links Configuration
// This file manages all site links: social media, navigation, footer, and logos
// Update links here to change them across all pages

// Social Media Links
const socialLinksConfig = {
    facebook: {
        url: 'https://www.facebook.com/tpbcss.zebrago',
        ariaLabel: 'Facebook',
        icon: 'facebook.png'
    },
    instagram: {
        url: 'https://www.instagram.com/tpbcss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        ariaLabel: 'Instagram',
        icon: 'instagram.png'
    },
    whatsapp: {
        url: '#',
        ariaLabel: 'WhatsApp',
        icon: 'whatsapp.png'
    },
    youtube: {
        url: 'https://www.youtube.com/@tpbcss8352',
        ariaLabel: 'YouTube',
        icon: 'youtube.png'
    },
    linkedin: {
        url: 'https://www.linkedin.com/company/tpbcss/',
        ariaLabel: 'LinkedIn',
        icon: 'linkedin.png'
    }
};

// Logo Links
const logoLinksConfig = {
    zebrago: {
        url: 'index.html', // Will be adjusted based on page location
        image: 'zebrago-logo.png',
        alt: 'ZebraGo Logo'
    },
    bscc: {
        url: 'https://www.tpbcss.org/',
        image: 'bscc-logo.png',
        alt: 'BSCC Logo',
        target: '_blank'
    }
};

// Navigation Links
const navigationConfig = {
    about: {
        url: 'about.html',
        dataLang: 'nav.about'
    },
    services: {
        url: '#services',
        dataLang: 'nav.services',
        dropdown: true,
        items: {
            individual: {
                url: 'individual.html',
                dataLang: 'nav.individual'
            },
            school: {
                url: 'school.html',
                dataLang: 'nav.school'
            },
            corporate: {
                url: 'corporate.html',
                dataLang: 'nav.corporate'
            }
        }
    },
    news: {
        url: 'news.html',
        dataLang: 'nav.news'
    },
    support: {
        url: '#support',
        dataLang: 'nav.support',
        dropdown: true,
        items: {
            donation: {
                url: 'https://www.tpbcss.org/Support-Us/Donation',
                dataLang: 'nav.donation',
                target: '_blank'
            },
            products: {
                url: 'products.html',
                dataLang: 'nav.products'
            },
            specialProjects: {
                url: 'special-projects.html',
                dataLang: 'nav.specialProjects'
            }
        }
    },
    contact: {
        url: 'contact.html',
        dataLang: 'nav.contact',
        className: 'btn-contact'
    }
};

// Footer Links
const footerLinksConfig = {
    privacy: {
        url: 'privacy.html',
        dataLang: 'footer.privacy'
    },
    disclaimer: {
        url: 'disclaimer.html',
        dataLang: 'footer.disclaimer'
    },
    copyright: {
        url: 'copyright.html',
        dataLang: 'footer.copyright'
    },
    contact: {
        url: 'contact.html',
        dataLang: 'footer.contact',
        className: 'btn-contact-footer'
    }
};

// Function to determine if we're in the pages directory
function isInPagesDirectory() {
    const currentPath = window.location.pathname;
    return currentPath.includes('/pages/') || currentPath.endsWith('/pages/');
}

// Function to get the correct path prefix for links
function getPathPrefix() {
    return isInPagesDirectory() ? '' : 'pages/';
}

// Function to get the correct path prefix for going to root (index.html)
function getRootPath() {
    return isInPagesDirectory() ? '../index.html' : 'index.html';
}

// Function to determine the correct image path based on current page location
function getImagePath() {
    return isInPagesDirectory() ? '../images/Mainpage/banner/' : 'images/Mainpage/banner/';
}

// Function to generate social icons HTML
function generateSocialIcons() {
    const imagePath = getImagePath();
    const socialIconsContainer = document.querySelector('.social-icons');
    
    if (!socialIconsContainer) {
        console.warn('Social icons container not found');
        return;
    }
    
    // Clear existing content
    socialIconsContainer.innerHTML = '';
    
    // Generate HTML for each social link
    Object.values(socialLinksConfig).forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.setAttribute('aria-label', link.ariaLabel);
        
        // Add target="_blank" for external links (not #)
        if (link.url !== '#' && !link.url.startsWith('javascript:')) {
            linkElement.setAttribute('target', '_blank');
        }
        
        const imgElement = document.createElement('img');
        imgElement.src = imagePath + link.icon;
        imgElement.alt = link.ariaLabel;
        
        linkElement.appendChild(imgElement);
        socialIconsContainer.appendChild(linkElement);
    });
}

// Function to generate logo links
function generateLogoLinks() {
    const logoContainer = document.querySelector('.logo');
    if (!logoContainer) {
        console.warn('Logo container not found');
        return;
    }
    
    const imagePath = getImagePath();
    const pathPrefix = getPathPrefix();
    const rootPath = getRootPath();
    
    // Clear existing logo links
    logoContainer.innerHTML = '';
    
    // ZebraGo logo
    const zebragoLink = document.createElement('a');
    zebragoLink.href = rootPath;
    zebragoLink.className = 'logo-link';
    const zebragoImg = document.createElement('img');
    zebragoImg.src = imagePath + logoLinksConfig.zebrago.image;
    zebragoImg.alt = logoLinksConfig.zebrago.alt;
    zebragoImg.className = 'logo-zebrago';
    zebragoLink.appendChild(zebragoImg);
    logoContainer.appendChild(zebragoLink);
    
    // BSCC logo
    const bsccLink = document.createElement('a');
    bsccLink.href = logoLinksConfig.bscc.url;
    bsccLink.className = 'logo-link';
    bsccLink.target = logoLinksConfig.bscc.target;
    const bsccImg = document.createElement('img');
    bsccImg.src = imagePath + logoLinksConfig.bscc.image;
    bsccImg.alt = logoLinksConfig.bscc.alt;
    bsccImg.className = 'logo-bscc';
    bsccLink.appendChild(bsccImg);
    logoContainer.appendChild(bsccLink);
}

// Function to generate navigation menu
function generateNavigation() {
    const navContainer = document.querySelector('.main-nav ul');
    if (!navContainer) {
        console.warn('Navigation container not found');
        return;
    }
    
    const pathPrefix = getPathPrefix();
    
    // Clear existing navigation
    navContainer.innerHTML = '';
    
    // Generate navigation items
    Object.entries(navigationConfig).forEach(([key, item]) => {
        const li = document.createElement('li');
        
        if (item.dropdown && item.items) {
            // Create dropdown menu
            li.className = 'dropdown';
            
            const toggle = document.createElement('a');
            toggle.href = item.url;
            toggle.className = 'dropdown-toggle';
            toggle.setAttribute('data-lang', item.dataLang);
            
            // Add fallback text (will be replaced by language system)
            const fallbackText = key === 'services' ? '我們的服務' : '支持我們';
            toggle.textContent = fallbackText;
            
            // Create dropdown arrow
            const arrowSpan = document.createElement('span');
            arrowSpan.className = 'dropdown-arrow';
            arrowSpan.textContent = ' ▼';
            toggle.appendChild(arrowSpan);
            
            li.appendChild(toggle);
            
            const dropdownMenu = document.createElement('ul');
            dropdownMenu.className = 'dropdown-menu';
            
            Object.entries(item.items).forEach(([subKey, subItem]) => {
                const subLi = document.createElement('li');
                const subLink = document.createElement('a');
                subLink.href = subItem.url.startsWith('http') ? subItem.url : pathPrefix + subItem.url;
                subLink.setAttribute('data-lang', subItem.dataLang);
                if (subItem.target) {
                    subLink.target = subItem.target;
                }
                // Add fallback text (will be replaced by language system)
                const fallbackTexts = {
                    individual: '個人服務',
                    school: '學校服務',
                    corporate: '企業服務',
                    donation: '愛心捐獻',
                    products: '周邊產品',
                    specialProjects: '特別項目'
                };
                if (fallbackTexts[subKey]) {
                    subLink.textContent = fallbackTexts[subKey];
                }
                subLi.appendChild(subLink);
                dropdownMenu.appendChild(subLi);
            });
            
            li.appendChild(dropdownMenu);
        } else {
            // Create regular link
            const link = document.createElement('a');
            link.href = item.url.startsWith('http') || item.url.startsWith('#') ? item.url : pathPrefix + item.url;
            link.setAttribute('data-lang', item.dataLang);
            if (item.className) {
                link.className = item.className;
            }
            // Add fallback text (will be replaced by language system)
            const fallbackTexts = {
                about: '關於我們',
                news: '新聞發佈',
                contact: '查詢服務'
            };
            if (fallbackTexts[key]) {
                link.textContent = fallbackTexts[key];
            }
            li.appendChild(link);
        }
        
        navContainer.appendChild(li);
    });
}

// Function to generate footer links
function generateFooterLinks() {
    const footerLinksContainer = document.querySelector('.footer-links');
    const footerContactContainer = document.querySelector('.footer-contact');
    
    if (!footerLinksContainer || !footerContactContainer) {
        console.warn('Footer containers not found');
        return;
    }
    
    const pathPrefix = getPathPrefix();
    
    // Clear existing footer links
    footerLinksContainer.innerHTML = '';
    
    // Generate footer link columns
    ['privacy', 'disclaimer', 'copyright'].forEach(key => {
        const item = footerLinksConfig[key];
        const column = document.createElement('div');
        column.className = 'footer-column';
        
        const link = document.createElement('a');
        link.href = pathPrefix + item.url;
        link.className = 'footer-link';
        link.setAttribute('data-lang', item.dataLang);
        
        // Add fallback text (will be replaced by language system)
        const fallbackTexts = {
            privacy: '私隱聲明',
            disclaimer: '免責條款',
            copyright: '版權聲明'
        };
        if (fallbackTexts[key]) {
            link.textContent = fallbackTexts[key];
        }
        
        column.appendChild(link);
        footerLinksContainer.appendChild(column);
    });
    
    // Generate footer contact link
    footerContactContainer.innerHTML = '';
    const contactLink = document.createElement('a');
    contactLink.href = pathPrefix + footerLinksConfig.contact.url;
    contactLink.className = footerLinksConfig.contact.className;
    contactLink.setAttribute('data-lang', footerLinksConfig.contact.dataLang);
    contactLink.textContent = '聯絡我們'; // Fallback text
    footerContactContainer.appendChild(contactLink);
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    generateSocialIcons();
    generateLogoLinks();
    generateNavigation();
    generateFooterLinks();
});
