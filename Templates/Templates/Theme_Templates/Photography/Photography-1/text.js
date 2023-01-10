document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nav-icon1").addEventListener("click", function () {
        this.classList.toggle("open");
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}