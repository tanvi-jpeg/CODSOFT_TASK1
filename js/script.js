/*TABS*/

const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

function opentab(tabname, element) {

    tabLinks.forEach(link => {
        link.classList.remove("active-link");
    });

    tabContents.forEach(content => {
        content.classList.remove("active-tab");
    });

    if (element) {
        element.classList.add("active-link");
    }

    const tab = document.getElementById(tabname);

    if (tab) {
        tab.classList.add("active-tab");
    }
}


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const isOpen =
            navLinks.classList.contains("show");

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

}


document.addEventListener("DOMContentLoaded", () => {

    const themeToggle =
        document.getElementById("theme-toggle");

    const logo =
        document.getElementById("logo");


    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

    }


    function updateTheme() {

        const isLight =
            document.body.classList.contains("light-theme");


        if (themeToggle) {

            themeToggle.textContent =
                isLight ? "🌙" : "☀️";

            themeToggle.setAttribute(
                "aria-label",
                isLight
                    ? "Switch to dark theme"
                    : "Switch to light theme"
            );

        }

        if (logo) {

            logo.src =
                isLight
                    ? "images/light-logo.webp"
                    : "images/dark-logo.webp";

        }

    }

    updateTheme();


    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle(
                "light-theme"
            );


            const isLight =
                document.body.classList.contains(
                    "light-theme"
                );


            /* Save theme */

            localStorage.setItem(
                "theme",
                isLight ? "light" : "dark"
            );

            updateTheme();

        });

    }

});