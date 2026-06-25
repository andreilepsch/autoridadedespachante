document.addEventListener("DOMContentLoaded", () => {
    // 1. Header Scroll Effect (Glassmorphism)
    const header = document.getElementById("header");
    const logoImg = document.getElementById("logo-img");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("bg-white/60", "backdrop-blur-md", "shadow-lg");
            header.classList.remove("bg-transparent");
            // Change text color to dark
            document.querySelectorAll("#header .nav-link, #header .nav-btn").forEach(el => {
                el.classList.add("text-gray-700");
                el.classList.remove("text-white");
            });
            document.getElementById("mobile-menu-btn").classList.add("text-gray-700");
            document.getElementById("mobile-menu-btn").classList.remove("text-white");
            document.getElementById("mobile-menu").classList.add("bg-white/60", "backdrop-blur-md", "rounded-lg", "p-4");
            
            // Switch Logo to Dark
            if(logoImg) logoImg.src = "assets/images/logo-horiz-positive.svg";
        } else {
            header.classList.remove("bg-white/60", "backdrop-blur-md", "shadow-lg");
            header.classList.add("bg-transparent");
            // Change text color to white
            document.querySelectorAll("#header .nav-link, #header .nav-btn").forEach(el => {
                el.classList.remove("text-gray-700");
                el.classList.add("text-white");
            });
            document.getElementById("mobile-menu-btn").classList.remove("text-gray-700");
            document.getElementById("mobile-menu-btn").classList.add("text-white");
            document.getElementById("mobile-menu").classList.remove("bg-white/60", "backdrop-blur-md", "rounded-lg", "p-4");
            
            // Switch Logo to Light
            if(logoImg) logoImg.src = "assets/images/logo-horiz-negative.svg";
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    if (mobileBtn) {
        mobileBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            if(mobileMenu.classList.contains("hidden")){
                menuIcon.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
            } else {
                menuIcon.setAttribute("d", "M6 18L18 6M6 6l12 12");
            }
        });
    }

    // 3. FAQ Accordion Logic
    const faqButtons = document.querySelectorAll('.faq-btn');

    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            
            // Close all other accordions
            document.querySelectorAll('.faq-content').forEach(c => {
                if(c !== content) {
                    c.style.maxHeight = null;
                    const cIcon = c.previousElementSibling.querySelector('i');
                    if(cIcon) cIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Close mobile menu if open
        const mobileMenu = document.getElementById("mobile-menu");
        if(mobileMenu && !mobileMenu.classList.contains("hidden")){
            mobileMenu.classList.add("hidden");
            document.getElementById("menu-icon").setAttribute("d", "M4 6h16M4 12h16M4 18h16");
        }
    }
}
