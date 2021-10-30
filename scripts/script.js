function toggleMobileNav() {
    var menu = document.getElementById("mobileMenuContainer");
    var body = document.getElementById("mainBody");
    var navButtonContainer = document.getElementById("navButtonContainer")
    if (menu.style.width == "0px") {
        menu.style.width = "67%";
        body.style.left = "67%";
        navButtonContainer.style.left = "67%";
    } else {
        menu.style.width = "0";
        body.style.left = "0";
        navButtonContainer.style.left = "0";
    }
}