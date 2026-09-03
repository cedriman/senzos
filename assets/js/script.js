
/*=====================================
  LOADER
=====================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.classList.add("hide");

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/*=====================================
  STICKY NAVBAR
=====================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/*=====================================
  COUNTER ANIMATION
=====================================*/

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        if (counter.dataset.started) return;

        counter.dataset.started = "true";

        const target = Number(counter.dataset.target);

        let value = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        const timer = setInterval(() => {

            value += increment;

            if (value >= target) {

                value = target;

                clearInterval(timer);

            }

            counter.innerText = value;

        }, 20);

    });

};

const stats = document.querySelector(".statistics");

if (stats) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounters();

            }

        });

    }, {

        threshold: 0.4

    });

    observer.observe(stats);

}

/*=====================================
  GALLERY MODAL
=====================================*/

function showGallery(image){

    const img = document.getElementById("galleryImage");

    if(img){

        img.src = image;

    }

}

/*=====================================
  BACK TO TOP
=====================================*/

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=====================================
  ACTIVE NAVIGATION
=====================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (

            window.pageYOffset >= sectionTop &&

            window.pageYOffset < sectionTop + sectionHeight

        ) {

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

/*=====================================
  FADE-IN ANIMATION
=====================================*/

const animatedItems = document.querySelectorAll(

    ".feature-item,.choose-card,.service-card,.package-card,.process-card,.facility-card,.testimonial-card,.office-card,.gallery-img"

);

const fadeObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

animatedItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "all .7s ease";

    fadeObserver.observe(item);

});

/*=====================================
  CLOSE MOBILE MENU AFTER CLICK
=====================================*/

const menu = document.querySelector(".navbar-collapse");

document.querySelectorAll(".navbar .nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (menu.classList.contains("show")) {

            new bootstrap.Collapse(menu).hide();

        }

    });

});