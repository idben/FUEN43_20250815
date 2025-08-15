var navLinks = document.querySelectorAll(".nav2 .nav-link");
var userH2 = document.querySelector(".navcontent h2");
var userH3 = document.querySelector(".navcontent h3");
var userImg = document.querySelector(".navcontent img");

navLinks.forEach(function (navLink, index) {
    navLink.addEventListener("click", function () {
        // document.querySelector(".nav2 .active")?.classList.remove("active");
        if (document.querySelector(".nav2 .active")) {
            document.querySelector(".nav2 .active").classList.remove("active");
        }
        navLink.classList.add("active");
        loadUser();
    });
});

navLinks[1].click();


function loadUser() {
    const url = "https://randomuser.me/api";
    fetch(url).then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    }).then(result => {
        console.log(result.results[0]);

        const user = result.results[0];
        userH2.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`;
        userImg.src = user.picture.large;
        userH3.innerText = user.email;
    }).catch(error => console.log(error));
}