// =========================
// Typing Animation
// =========================

const text = [
    "Frontend Developer",
    "CodeAlpha Intern",
    "Web Designer"
];

let index = 0;
let char = 0;
let typing = document.querySelector(".typing");

function type() {

    if (char < text[index].length) {

        typing.textContent += text[index].charAt(char);
        char++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    if (char > 0) {

        typing.textContent = text[index].substring(0, char - 1);
        char--;

        setTimeout(erase, 50);

    } else {

        index++;

        if (index >= text.length) {

            index = 0;

        }

        setTimeout(type, 300);

    }

}

type();


// =========================
// Navbar Shadow
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow = "none";

    }

});


// =========================
// Fade Animation
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});


// =========================
// Active Navigation Link
// =========================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});