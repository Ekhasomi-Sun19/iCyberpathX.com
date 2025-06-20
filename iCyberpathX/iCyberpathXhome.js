// Improved mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const headerButtons = document.querySelector('.header-buttons');
    const mobileHeaderButtons = document.getElementById('mobile-header-buttons');
    
    // Function to handle mobile menu setup
    function setupMobileMenu() {
        if (window.innerWidth <= 768) {
            // Clone header buttons to mobile menu if not already there
            if (mobileHeaderButtons && headerButtons && mobileHeaderButtons.children.length === 0) {
                const buttons = headerButtons.cloneNode(true);
                buttons.classList.add('mobile-buttons');
                mobileHeaderButtons.appendChild(buttons);
            }
        } else {
            // Clear mobile buttons when in desktop view
            if (mobileHeaderButtons) {
                mobileHeaderButtons.innerHTML = '';
            }
        }
    }
    
    // Toggle menu when hamburger is clicked
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            if (navMenu) navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Run setup on page load
    setupMobileMenu();
    
    // Run on window resize
    window.addEventListener('resize', setupMobileMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && mobileMenuToggle && 
            navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !mobileMenuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu && mobileMenuToggle) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
    });
