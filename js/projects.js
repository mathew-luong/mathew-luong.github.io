const body = document.body;

const links = document.querySelectorAll(".btn");
const techBoxes = document.querySelectorAll(".techBox");
const projectDesc = document.querySelectorAll(".projectDesc");
const boldText = document.querySelectorAll(".boldText");
const bentoCards = document.querySelectorAll(".bentoCard");
const bentoCardDescs = document.querySelectorAll(".bentoCardDesc");
const projectListSubheader = document.querySelector(".projectListSubheader");

function setLightModeLocalStorage() {
    if (!localStorage.getItem("isLightmode")) {
        localStorage.setItem("isLightmode", "True");
    }
}

const setMode = () => {
    if (localStorage.getItem("isLightmode") === "False") {
        body.style.color = "#fff";
        body.style.background = "#000";
        body.classList.add("dark");
        document.documentElement.classList.add("dark");

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

        for (let card of bentoCards) {
            card.style.borderColor = "#2a2a2a";
        }

        for (let desc of bentoCardDescs) {
            desc.style.color = "rgba(255, 255, 255, 0.5)";
        }

        if (projectListSubheader) {
            projectListSubheader.style.color = "rgba(255, 255, 255, 0.5)";
        }
    }
};

// Set local storage on load (if not already set)
setLightModeLocalStorage();

// Set dark mode on load if set
setMode();

// Stagger bento card entrance
bentoCards.forEach((card, i) => {
    setTimeout(() => card.classList.add("visible"), 80 + i * 100);
});

// Stagger project section entrance
const projectSectionItems = document.querySelectorAll(".projectSection > *");
projectSectionItems.forEach((item, i) => {
    setTimeout(() => item.classList.add("visible"), 80 + i * 100);
});
