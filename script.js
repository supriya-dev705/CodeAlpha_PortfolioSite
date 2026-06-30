
const typingElement = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "Web Devloper",
    "JavaScript Developer",
    "Dsa Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    }

    else {

        header.style.boxShadow = "none";

    }

});

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

const reveals = document.querySelectorAll(

    ".project-card,.skill,.timeline-box,.about-image,.about-content,.contact-box"

);

function revealAnimation() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealAnimation);

revealAnimation();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))

            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

const topBtn = document.querySelector(".top-btn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        }

        else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}

console.log("Portfolio Loaded Successfully 🚀");
