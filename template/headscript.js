let menuvis = false;
function handlemenu() {
    if (menuvis) {
        document
            .getElementById("ullistcnt")
            .setAttribute("class", "dispnone");
        document.getElementById("navicn").setAttribute("src", "close.png");
    } else {
        document.getElementById("ullistcnt").setAttribute("class", "dispvis");
        document.getElementById("navicn").setAttribute("src", "open.png");
    }
}
document.getElementById("nav-btn").addEventListener("click", () => {
    menuvis = !menuvis;
    handlemenu();
});