const body = document.body;

// const heroIntro = document.querySelector(".heroIntro");
const heroHeader = document.querySelector(".heroHeader");
const heroSubheader = document.querySelector(".heroSubheader");
const heroParagraph = document.querySelector(".heroParagraph");
const heroStatus = document.querySelector(".heroStatusContainer");
const resumeBtn = document.querySelector("#resumeBtn");
const btn = document.querySelector(".btn");
const copyright = document.querySelector(".copyright");

const socials = document.querySelector(".socials");
const boldText = document.querySelectorAll(".boldText");
const icons = document.querySelectorAll(".icon");
const heroStatusText = document.querySelectorAll(".heroStatusText");

const projectsContainer = document.querySelector(".projectCardContainer");
const moreBtns = document.querySelectorAll(".moreBtn");
const projectCards = document.querySelectorAll(".projectCard");

const darkModeToggle = document.querySelector(".darkModeTab");

const navigate = (link) => {
    window.open(link, "_blank");
};

$(window).on("load", function () {
    // heroIntro.setAttribute("loaded", "");
    heroHeader.setAttribute("loaded", "");
    heroSubheader.setAttribute("loaded", "");
    heroParagraph.setAttribute("loaded", "");
    heroStatus.setAttribute("loaded", "");
    resumeBtn.setAttribute("loaded", "");
    socials.setAttribute("loaded", "");

    projectsContainer.setAttribute("loaded", "");
});

function setLightModeLocalStorage() {
    if (!localStorage.getItem("isLightmode")) {
        localStorage.setItem("isLightmode", "True");
    }
}

const setDarkMode = () => {
    darkModeToggle.style.transform = "translateX(21px)";
    body.style.color = "#fff";
    body.style.background = "#000";
    heroParagraph.style.color = "rgba(255, 255, 255, 0.5)";
    copyright.style.color = "rgba(255, 255, 255, 0.5)";
    btn.classList.replace("btn", "btnDark");

    for (let bold of boldText) {
        bold.style.color = "#fff";
    }

    // Iterate over each project card and update it to dark mode
    for (let card of projectCards) {
        card.style.border = "solid 1px #343434";
        card.classList.replace("projectCard", "projectCardDark");
    }
    for (let moreBtn of moreBtns) {
        moreBtn.style.color = "#fff";
    }
    for (let icon of icons) {
        icon.style.color = "#fff";
    }
    for (let text of heroStatusText) {
        text.style.color = "rgba(255, 255, 255, 0.5)";
    }
};

const setLightMode = () => {
    darkModeToggle.style.transform = "translateX(0px)";
    body.style.color = "#000";
    body.style.background = "#fff";
    heroParagraph.style.color = "rgba(0, 0, 0, 0.5)";
    copyright.style.color = "rgba(0, 0, 0, 0.5)";
    btn.classList.replace("btnDark", "btn");

    for (let bold of boldText) {
        bold.style.color = "#000";
    }

    // Iterate over each project card and update it to light mode
    for (let card of projectCards) {
        card.style.border = "solid 1px #e6e7eb";
        card.classList.replace("projectCardDark", "projectCard");
    }
    for (let moreBtn of moreBtns) {
        moreBtn.style.color = "#000";
    }
    for (let icon of icons) {
        icon.style.color = "#000";
    }
    for (let text of heroStatusText) {
        text.style.color = "rgba(0, 0, 0, 0.5)";
    }
};

// Handler for darkmode toggle button
const setMode = () => {
    let isLightmode = localStorage.getItem("isLightmode");

    if (isLightmode === "True") {
        localStorage.setItem("isLightmode", "False");
        setDarkMode();
    } else {
        localStorage.setItem("isLightmode", "True");
        setLightMode();
    }
};

// Initialize screen to dark/light mode
const initializeMode = () => {
    let isLightmode = localStorage.getItem("isLightmode");
    // Lightmode is default, if user already set to dark mode switch theme
    if (isLightmode !== "True") {
        setDarkMode();
    }
};

// Set local storage containing dark mode variable if not already set
setLightModeLocalStorage();

// Check if dark mode enabled
initializeMode();
