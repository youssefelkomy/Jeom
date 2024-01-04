document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById("navBar");
    const sideBar = document.getElementById("sideBar");
    const closeI = document.getElementById("closeI");
    const mainSection = document.querySelector(".container");
    const navigation = document.querySelector("nav");
    navBar.addEventListener("click", function () {
        if (sideBar.style.right === "0px") {
            sideBar.style.right = "-250px";
        } else {
            sideBar.style.right = "0px";
        }
    });

    closeI.addEventListener("click", function () {
        const screenWidth = window.innerWidth;
        if (screenWidth < 301) {
            sideBar.style.right = "-220px";
        } else if (screenWidth < 351) {
            sideBar.style.right = "-240px";
        } else if (screenWidth < 401) {
            sideBar.style.right = "-280px";
        } else if (screenWidth < 451) {
            sideBar.style.right = "-320px";
        } else if (screenWidth < 501) {
            sideBar.style.right = "-350px";
        } else if (screenWidth < 551) {
            sideBar.style.right = "-370px";
        } else if (screenWidth < 601) {
            sideBar.style.right = "-410px";
        } else if (screenWidth < 651) {
            sideBar.style.right = "-450px";
        } else if (screenWidth < 701) {
            sideBar.style.right = "-480px";
        } else if (screenWidth < 770) {
            sideBar.style.right = "-540px";
        }
    });
    mainSection.addEventListener("click", function (event) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 301) {
            sideBar.style.right = "-220px";
        } else if (screenWidth < 351) {
            sideBar.style.right = "-240px";
        } else if (screenWidth < 401) {
            sideBar.style.right = "-280px";
        } else if (screenWidth < 451) {
            sideBar.style.right = "-320px";
        } else if (screenWidth < 501) {
            sideBar.style.right = "-350px";
        } else if (screenWidth < 551) {
            sideBar.style.right = "-370px";
        } else if (screenWidth < 601) {
            sideBar.style.right = "-410px";
        } else if (screenWidth < 651) {
            sideBar.style.right = "-450px";
        } else if (screenWidth < 701) {
            sideBar.style.right = "-480px";
        } else if (screenWidth < 770) {
            sideBar.style.right = "-540px";
        }
        navBar.classList.remove("change");
        closeI.classList.add('rotate');
        setTimeout(() => {
            closeI.classList.remove('rotate');
        }, 200);
    });
    document.querySelector('.close-i').addEventListener('click', function () {
        this.classList.remove('rotate');
        setTimeout(() => {
            this.classList.add('rotate');
        },);
    });
});
function myFunction(x) {
    x.classList.add("change");

    function myFunction1() {
        x.classList.remove("change");
    }

    setTimeout(myFunction1, 600);
}