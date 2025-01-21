window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelector('.hamburger').addEventListener('click', function() {
    var navLinks = document.querySelector('.nav-links.mobile');
    navLinks.classList.toggle('show');
});
