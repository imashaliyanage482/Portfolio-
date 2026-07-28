// Toggle mobile menu
let menuIcon = document.querySelector('.menu-icon i');
let navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navLinks.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinksItems = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinksItems.forEach(links => {
                links.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav ul li a[href*="#' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        };
    });

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('fa-times');
    navLinks.classList.remove('active');
};
