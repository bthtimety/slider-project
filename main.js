const projectsList = [
    {
        imgURL: "./img/Rostov-On-Don-Admiral.png",
        city: ["Rostov-on-Don", "LCD admiral"],
        apartmentArea: "81 m2",
        repairTime: "3.5 months",
        repairCost: "Upon request"
    },
    {
        imgURL: "./img/Sochi-Thieves.png",
        city: ["Sochi", "Thieves"],
        apartmentArea: "105 m2",
        repairTime: "4 months",
        repairCost: "Upon request"
    },
    {
        imgURL: "./img/Rostov-On-Don-Patriotic.png",
        city: ["Rostov-on-Don", "Patriotic"],
        apartmentArea: "93 m2",
        repairTime: "3 months",
        repairCost: "Upon request"
    }
];

const leftArrow = document.getElementById("left_arrow");
const rightArrow = document.getElementById("right_arrow");
const navPoints = document.querySelectorAll(".nav__point");

const navItem = document.querySelectorAll(".nav__item");

let currentProject = 0;
let autoScrollInterval;

function setProjectInfo(project) {
    const projectIMG = document.getElementById("project_image");
    const projectCity = document.querySelectorAll(".project-info__city-text");
    const projectApartmentArea = document.getElementById("text_area");
    const projectRepairTime = document.getElementById("text_time");
    const projectRepairCost = document.getElementById("text_cost");

    projectIMG.src = projectsList[project].imgURL;

    for (let i = 0; i < projectCity.length; i++) {
        projectCity[i].textContent = projectsList[project].city[i];
    }

    projectApartmentArea.textContent = projectsList[project].apartmentArea;
    projectRepairTime.textContent = projectsList[project].repairTime;
    projectRepairCost.textContent = projectsList[project].repairCost;
}

function updateSlider(index) {
    currentProject = index;
    setProjectInfo(currentProject);

    navItem.forEach((item, i) => {
        if (i === currentProject) {
            item.classList.add("nav__item_active");
        } else {
            item.classList.remove("nav__item_active");
        }
    });

    navPoints.forEach((point, i) => {
        const pointIMG = point.querySelector("img");
        if (i === currentProject) {
            point.classList.add("nav__point_active");
            pointIMG.src = "./img/active-point.svg";
        } else {
            pointIMG.src = "./img/unactive-point.svg";
        }
    });
}

function setNextProject() {
    const nextIndex = (currentProject + 1) % projectsList.length;
    updateSlider(nextIndex);
}

function setLastProject() {
    const lastIndex = (currentProject - 1 + projectsList.length) % projectsList.length;
    updateSlider(lastIndex);
}

rightArrow.addEventListener("click", setNextProject);
leftArrow.addEventListener("click", setLastProject);

navPoints.forEach((point, i) => {
    point.addEventListener("click", () => updateSlider(i));
});

navItem.forEach((item, i) => {
    item.addEventListener("click", () => updateSlider(i));
});

function startAutoScroll() {
    autoScrollInterval = setInterval(setNextProject, 3000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

updateSlider(0);
startAutoScroll();

document.addEventListener("mouseover", stopAutoScroll);
document.addEventListener("mouseout", startAutoScroll);
