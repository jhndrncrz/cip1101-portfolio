function openSidebar() {
    document.querySelectorAll(".nav-item a").forEach((node) => {node.classList.remove("sidebar-retract");});
    document.querySelector(".nav-item a").classList.remove("sidebar-retract");
}

function closeSidebar() {
    document.querySelectorAll(".nav-item a").forEach((node) => node.classList.add("sidebar-retract"));
    document.querySelector(".nav-item a").classList.add("sidebar-retract");
}