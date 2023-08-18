const body = document.body;

const returnBtn = document.querySelector(".returnBtn");
const links = document.querySelectorAll(".btn");
const techBoxes = document.querySelectorAll(".techBox");
const projectDesc = document.querySelectorAll(".projectDesc");
const boldText = document.querySelectorAll(".boldText");

function setLightModeLocalStorage() {
    if (!localStorage.getItem("isLightmode")) {
        localStorage.setItem("isLightmode", "True");
    }
}

const setMode = () => {
    if (localStorage.getItem("isLightmode") === "False") {
        body.style.color = "#fff";
        body.style.background = "#000";

        returnBtn.style.color = "#fff";
        returnBtn.style.backgroundColor = "#000";

        for (let link of links) {
            link.classList.replace("btn", "btnDark");
        }

        for (let desc of projectDesc) {
            desc.style.color = "rgba(255, 255, 255, 0.5)";
        }

        for (let bold of boldText) {
            bold.style.color = "#fff";
        }

        for (let techBox of techBoxes) {
            techBox.style.backgroundColor = "rgba(0, 136, 255, 0.264)";
        }
    }
};

// Set local storage on load (if not already set)
setLightModeLocalStorage();

// Set dark mode on load if set
setMode();
