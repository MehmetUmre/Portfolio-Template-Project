/*----------[PO-24]-Work-Html-Header-----------*/
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
/*----------[PO-24]-Work-Html-Header-----------*/
/*----------[PO-25]-Header-İmage-----------*/
/*----------[PO-25]-Header-İmage-----------*/
/*----------[PO-5]-Problem-Statement-Component-and-Covibe-Component-----------*/
const covibeData = {
    company: "COVIBE",
    title: "Co-working spaces for tech startups",
    client: "Covibe",
    role: "Product Designer",
    industry: "Co-working",
    duration: "2 Months",
    problem: "Designing a product that helps new startups setup their business in a coworking space with budget constraints."
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('covibe-company').textContent = covibeData.company;
    document.getElementById('covibe-title').innerHTML = covibeData.title.replace(' for', ' for<br>');
    document.getElementById('covibe-client').textContent = covibeData.client;
    document.getElementById('covibe-role').textContent = covibeData.role;
    document.getElementById('covibe-industry').textContent = covibeData.industry;
    document.getElementById('covibe-duration').textContent = covibeData.duration;
    document.getElementById('covibe-problem').textContent = covibeData.problem;

    setTimeout(() => {
        document.querySelector('.covibe-wrapper').style.opacity = '1';
    }, 100);

    setTimeout(() => {
        document.querySelector('.covibe-header p').style.opacity = '1';
        document.querySelector('.covibe-header p').style.transform = 'translateY(0)';
    }, 300);

    setTimeout(() => {
        document.querySelector('.covibe-header h1').style.opacity = '1';
        document.querySelector('.covibe-header h1').style.transform = 'translateY(0)';
    }, 500);

    const detailItems = document.querySelectorAll('.covibe-detail-item');
    detailItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 700 + index * 200);
    });

    setTimeout(() => {
        document.querySelector('.covibe-problem').style.opacity = '1';
        document.querySelector('.covibe-problem').style.transform = 'translateY(0)';
    }, 1500);
});
/*----------[PO-5]-Problem-Statement-Component-and-Covibe-Component-----------*/
/*----------[PO-8]-Prototype-Section-----------*/
const data = {
    headerText:"LAUNCH PROTOTYPE",
    imageUrl: "assets/[PO-8]/image.svg",
    imageAlt: "A long hallway with glass walls on both sides, a gray floor, and black light fixtures hanging from the ceiling. There is a lounge area with a white couch and blue pillows visible through the glass on the left.",
  };

  document.getElementById("banner-text").textContent = data.headerText;

  const imageElement = document.getElementById("main-image");
  imageElement.src = data.imageUrl;
  imageElement.alt = data.imageAlt;

  window.addEventListener("load", () => {
    setTimeout(() => {
      imageElement.classList.add("visible");
    }, 500);
  });
/*----------[PO-8]-Prototype-Section-----------*/
/*----------[PO-1]-Solution Component-----------*/
const solutionData = {
    image: "https://replicate.delivery/xezq/Lwb2RdNDX5Z1HpsqOjGZAoHtZf7vNS8eO9BPaYUkXtgMhxGUA/out-0.png",
    label: "SOLUTION 1",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
};

function populateContent() {
    document.getElementById('solutionImage').src = solutionData.image;
    document.getElementById('solutionLabel').textContent = solutionData.label;
    document.getElementById('solutionTitle').textContent = solutionData.title;
}

function animateContent() {
    setTimeout(() => {
        document.getElementById('visualComponent').style.opacity = '1';
        document.getElementById('visualComponent').style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        document.getElementById('contentSection').style.opacity = '1';
        document.getElementById('contentSection').style.transform = 'translateY(0)';
    }, 600);
}

document.addEventListener('DOMContentLoaded', () => {
    populateContent();
    animateContent();
});
/*----------[PO-1]-Solution Component-----------*/