const navLinks = document.querySelectorAll(".nav2 .nav-link");

navLinks.forEach(function (navLink, index) {
    console.log(navLink);
    console.log(index);

    navLink.addEventListener("click", function () {
        // document.querySelector(".nav2 .active")?.classList.remove("active");
        if (document.querySelector(".nav2 .active")) {
            document.querySelector(".nav2 .active").classList.remove("active");
        }
        navLink.classList.add("active");
    });
});
