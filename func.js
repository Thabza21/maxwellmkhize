// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
// }


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu.classList.contains("open")) {
        menu.classList.add("slide-out");
        setTimeout(() => {
            menu.classList.remove("open", "slide-out");
        }, 300); // Duration should match the CSS animation
    } else {
        menu.classList.add("open");
    }

    icon.classList.toggle("open");
}
