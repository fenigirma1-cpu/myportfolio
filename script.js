// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // GitHub
    document.getElementById("github").addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://github.com/fenigirma1-cpu", "_blank");
    });

    // LinkedIn
    document.getElementById("linkedin").addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://linkedin.com/in/fenet-girma", "_blank");
    });

    // Email
    document.getElementById("email").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "mailto:jigtotame@gmail.com";
    });

 console.log("JS is working!");
});