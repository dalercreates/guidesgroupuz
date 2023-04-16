// sticky nav
const nav = document.getElementById('nav');
const dropdownButton = document.getElementById('dropdown-btn');
const toggleBtn = document.getElementById('toggle-menu');
const mobileNav = document.getElementById('mobile__nav');
const mobileNavLinks = document.querySelectorAll('.mobile__nav-link');
let scrolled = false
document.addEventListener('scroll', () => {
    if (scrollY > 0) {
        scrolled = true
        nav.classList.add('sticky');
    } else {
        scrolled = false
        nav.classList.remove('sticky');
    }
});

// dropdown
dropdownButton.addEventListener('click', () => {
    if (dropdownButton.classList.contains('active')) {
        dropdownButton.classList.remove('active');
    } else {
        dropdownButton.classList.add('active');
    }
});

// mobile nav
toggleBtn.addEventListener('click', () => {
    if (toggleBtn.classList.contains('checked')) {
        toggleBtn.classList.remove('checked');
        mobileNav.classList.remove('active');
        if (!scrolled) {
            nav.classList.remove('sticky');
        }
    } else {
        toggleBtn.classList.add('checked');
        mobileNav.classList.add('active');
        nav.classList.add('sticky');
    }
});

for (let navLink of mobileNavLinks) {
    navLink.addEventListener('click', () => {
        toggleBtn.classList.remove('checked');
        mobileNav.classList.remove('active');
        if (!scrolled) {
            nav.classList.remove('sticky');
        }
    });
}

// popup
const openPopups = document.querySelectorAll(".open__popup");
const closePopups = document.querySelectorAll(".popup__close");
const popup = document.getElementById("popup");

for (const openPopup of openPopups) {
    openPopup.addEventListener("click", function (e) {
        e.preventDefault();

        if (popup !== null) {
            popup.classList.add("active");
        }
    });
}

for (const closePopup of closePopups) {
    closePopup.addEventListener("click", () => {
        if (popup !== null) {
            popup.classList.remove("active");
        }
    });
}

// swiper JS
new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});