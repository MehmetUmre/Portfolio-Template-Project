/*----------[PO-9]-Header-Components------------*/
const navData = [
    { name: 'Home', url: 'index.html' },
    { name: 'Work', url: 'work.html' },
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
/*----------[PO-3]-Featured Work Section------------*/
/*----------[PO-3]-Featured Work Section------------*/
/*----------[PO-2]-Visual Explorations Section------------*/
const images = [
    {
        src: "assets/[PO-2]/image1.svg",
    },
    {
        src: "assets/[PO-2]/image2.svg",
    },
    {
        src: "assets/[PO-2]/image3.svg",
    },
    {
        src: "assets/[PO-2]/image4.svg",
    },
    {
        src: "assets/[PO-2]/image5.svg",
    },
    {
        src: "assets/[PO-2]/image6.svg",
    }
];

function createGridItems() {
    const container = document.getElementById('grid-container');
    images.forEach((image, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.style.animationDelay = `${index * 0.1}s`;

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.width = 400;
        img.height = 400;

        gridItem.appendChild(img);
        container.appendChild(gridItem);
    });
}

document.addEventListener('DOMContentLoaded', createGridItems);
/*----------[PO-2]-Visual Explorations Section------------*/
/*----------[PO-12]-Personal Projects Section------------*/
const projects = [
    {
        image: "assets/[PO-12]/image1.svg",
    },
    {
        image: "assets/[PO-12]/image2.svg",
    },
    {
        image: "assets/[PO-12]/image3.svg",
    }
];

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animation = `fadeInUp 0.8s ease forwards ${index * 0.2}s`;

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.alt;

    card.appendChild(img);
    return card;
}

function loadProjects() {
    const projectGrid = document.getElementById('projectGrid');
    projects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        projectGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);
/*----------[PO-12]-Personal Projects Section------------*/
/*----------[PO-13]-Contact Component-----------*/
const dataContact = {
    title: "Contact Me",
    description1: "If you are looking to hire a product designer,",
    description2: "I'm currently available for freelance work",
    email: "hi@yourname.com"
};

const contentDiv = document.getElementById("content");


const title = document.createElement("h1");
title.textContent = dataContact.title;
title.classList.add("main-title", "fade-in");
contentDiv.appendChild(title);


const description1 = document.createElement("p");
description1.textContent = dataContact.description1;
description1.classList.add("description-text", "fade-in");
description1.style.animationDelay = "0.2s";
contentDiv.appendChild(description1);


const description2 = document.createElement("p");
description2.textContent = dataContact.description2;
description2.classList.add("description-text", "fade-in");
description2.style.animationDelay = "0.4s";
contentDiv.appendChild(description2);


const emailButton = document.createElement("a");
emailButton.href = `mailto:${dataContact.email}`;
emailButton.className = "email-button fade-in";
emailButton.style.animationDelay = "0.6s";

const emailIcon = document.createElement("i");
emailIcon.className = "far fa-envelope";
emailButton.appendChild(emailIcon);

const emailText = document.createTextNode(` ${dataContact.email}`);
emailButton.appendChild(emailText);

contentDiv.appendChild(emailButton);
/*----------[PO-13]-Contact Component-----------*/
/*----------[PO-14]-Footer Section-----------*/
function animateCopyright() {
    const copyrightEl = document.getElementById('copyright');
    const currentYear = new Date().getFullYear();
    const text = `Made by <span class="highlight">Your Name</span> — Copyright ${currentYear}`;
    let index = 0;

    copyrightEl.style.opacity = '1';
    copyrightEl.style.transform = 'translateY(0)';

    function typeWriter() {
        if (index < text.length) {
            copyrightEl.innerHTML = text.substring(0, index + 1);
            index++;
            setTimeout(typeWriter, 50); 
        }
    }

    setTimeout(typeWriter, 500); 
}

function animateSocialIcons() {
    const icons = document.querySelectorAll('.social-icons a');
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, index * 200); 
    });
}

document.addEventListener('DOMContentLoaded', () => {
    animateCopyright();
    animateSocialIcons();
});
/*----------[PO-14]-Footer Section-----------*/