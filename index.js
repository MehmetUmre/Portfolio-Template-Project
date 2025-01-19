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
/*----------[PO-11]-Hero Section------------*/
const data = {
    name: "Your Name",
    title: "A Product Designer",
    city: "City",
    description: "I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.",
    email: "hi@yourname.com",
    profileImage: "assets/[PO-11]/unsplash_XHVpWcr5grQ.svg"
};

document.getElementById('intro-heading').textContent = `Hi, I am ${data.name}`;
document.getElementById('role-heading').textContent = data.title;
document.getElementById('location-heading').textContent = `based in ${data.city}.`;
document.getElementById('bio-description').textContent = data.description;
document.getElementById('email-text').textContent = data.email;
document.getElementById('email-link').href = `mailto:${data.email}`;
document.getElementById('profile-img').src = data.profileImage;
document.getElementById('profile-img').alt = `Profile picture of ${data.name}, a ${data.title.toLowerCase()} based in ${data.city}`;

function animateElements() {
    const elements = document.querySelectorAll('.portfolio-heading, .portfolio-description, .contact-button, .profile-picture');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) scale(1)';
        }, index * 200);
    });
}

window.addEventListener('load', animateElements);
/*----------[PO-11]-Hero Section------------*/