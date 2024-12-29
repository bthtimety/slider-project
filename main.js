const completedProjects = [
    {
        imgURL: "./img/Rostov-On-Don-Admiral.png",
        city: ["Rostov-on-Don", "LCD admiral"],
        area: "81 m2",
        repairTime: "3.5 months",
        repairCost: "Upon request"
    },
    {
        imgURL: "./img/Sochi-Thieves.png",
        city: ["Sochi", "Thieves"],
        area: "105 m2",
        repairTime: "4 months",
        repairCost: "Upon request"
    },
    {
        imgURL: "./img/Rostov-On-Don-Patriotic.png",
        city: ["Rostov-on-Don", "Patriotic"],
        area: "93 m2",
        repairTime: "3 months",
        repairCost: "Upon request"
    }
]

const leftArrow = document.getElementById("left_arrow");
const rightArrow = document.getElementById("right_arrow");
const navPoints = document.querySelectorAll(".nav__point")

const navRostovAdmiral = document.getElementById("nav_rostovAdmiral");
const navSochiThieves = document.getElementById("nav_sochiThieves");
const navRostovPatriotic = document.getElementById("nav_rostovPatriotic");
const navItem = document.querySelectorAll(".nav__item");
