document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        } else {
            header.style.boxShadow = "none";
        }
    });


    const dropdownWrapper = document.getElementById("dropdownwrapper");
    const dropdownMenu = document.getElementById("dropdownmenu");

    dropdownWrapper.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function () {
        dropdownMenu.style.display = "none";
    });

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    function checkScroll() {
        elementsToAnimate.forEach(element => {
            const position = element.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                element.classList.add("fade-in");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
