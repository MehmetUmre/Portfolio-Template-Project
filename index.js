/*----------[PO-9]-Header-Components------------*/
const navData = [
    { name: 'Home', url: '#' },
    { name: 'Work', url: '#' },
    { name: 'Contact', url: '#' }
];

const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');


navData.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.name;
    navLinks.appendChild(a);
});


menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});


window.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo img');
    const scrollPosition = window.scrollY;
    logo.style.transform = `rotate(${scrollPosition / 2}deg)`;
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#1a1a1a';
    } else {
        navbar.style.backgroundColor = '#2d2d2d';
    }
});


const links = document.querySelectorAll('.nav-links a');
links.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.animation = `fadeIn 0.5s ease forwards ${index / 7 + 0.5}s`;
});


const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
/*----------[PO-9]-Header-Components------------*/