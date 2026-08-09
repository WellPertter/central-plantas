document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menuPrincipal");
    const links = document.querySelectorAll("#menuPrincipal .nav-link");

    links.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 992 && menu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });
});
