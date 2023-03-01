const scrollIcon = document.getElementById("scrollIcon");
const scrollBtn = document.getElementById("scrollIcon");
const topSection = document.getElementById("top");
const projects = document.getElementById("projects");
const aboutPara = document.getElementById("aboutParagraph");
const darkmodeIcon = document.getElementById("darkmodeicon");
const lightmodeIcon = document.getElementById("lightmodeicon");
const darkmodeBtn = document.getElementById("darkmodeBtn");
const body = document.body;
const icons = document.querySelectorAll(".icons");
const cards = document.querySelectorAll(".projectCards");
const cardTitle = document.querySelectorAll(".projectName");
const cardDesc = document.querySelectorAll(".projectDesc");
const carouselDots = document.querySelectorAll(".dot");
const carousel = document.getElementById("carousel");


$(window).on("load",function() {
    window.scrollTo(0, 0);
    $(".loadingContainer").fadeOut(2500);
    body.style.overflow = "visible"
});


// Darkmode is default
var isDarkmode = true;
var height = window.innerHeight/2;


window.addEventListener("scroll", () => {
    if(this.scrollY >= height) {
        scrollIcon.style.transform = "rotate(180deg)";
    }
    else if (this.scrollY >= 0 && this.scrollY <= height) {
        scrollIcon.style.transform = "rotate(360deg)";
    }
});

darkmodeBtn.addEventListener('click', () => {
    // Change to lightmode
    if(isDarkmode) {
        isDarkmode = !isDarkmode;
        toggleIcon(darkmodeIcon,lightmodeIcon);
        toggleColor("#fff","#27272b","#474747","#F0F1F7","#66666b");
        
    }
    // Change to darkmode
    else {
        isDarkmode = !isDarkmode;
        toggleIcon(lightmodeIcon,darkmodeIcon);
        toggleColor("#1F1F23","#fff","#b3b3b3","#151518","#9a9a9a");

    }
})


function handleScrollBtn() {
    // scroll to top of webpage
    if(this.scrollY >= height) {
        topSection.scrollIntoView();
    }
    // scroll to projects section
    else if (this.scrollY >= 0 && this.scrollY <= height) {
        projects.scrollIntoView();
    }
}

function handleToggleDarkmode() {
    // Change to lightmode
    if(isDarkmode) {
        isDarkmode = !isDarkmode;
        toggleIcon(darkmodeIcon,lightmodeIcon);
        toggleColor("#fff","#27272b","#474747","#E5E5E5","#66666b");
        
    }
    // Change to darkmode
    else {
        isDarkmode = !isDarkmode;
        toggleIcon(lightmodeIcon,darkmodeIcon);
        toggleColor("#1F1F23","#fff","#b3b3b3","#151518","#9a9a9a");

    }
}

// Hides the visibility/display of the second arg and sets the first arg to visible
function toggleIcon(onIcon,offIcon) {
    onIcon.style.visibility = "visible";
    onIcon.style.display = "inline";
    offIcon.style.visibility = "hidden";
    offIcon.style.display = "none";
}

function toggleColor(bodyColor, color, paragraphColor,cardColor,cardDescColor) {
    // Change color of body (text,background)
    body.style.backgroundColor = bodyColor;
    body.style.color = color;
    aboutPara.style.color = paragraphColor;
    // Change color of project cards
    for(i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = cardColor;
        cardTitle[i].style.color = color;
        cardDesc[i].style.color = cardDescColor;
    }
    // Change the class of the icons to darkmode icons or lightmode icons
    for(i = 0; i < icons.length; i++) {
        // Icon is in darkmode change it to lightmode
        if(icons[i].classList.contains("icons")) {
            icons[i].classList.replace("icons","icLight");
        }
        // Icon is in lightmode change it to darkmode
        else if(icons[i].classList.contains("icLight"))  {
            icons[i].classList.replace("icLight","icons");
        }
    }
}


// Scrolls to the card that is clicked 
function handleCardClick(cardNum) {
    cards[cardNum-1].scrollIntoView({behavior: "smooth"});
}


// Initially the first card is active
handleCarouselClick(1);

function handleCarouselClick(cardNum) {
    // console.log("THIS IS THE BUTTON CLICKED:" + cardNum);
    for(i = 0; i < cards.length; i++) {
        if(cardNum == cards[i].getAttribute("data-cardNum")) {
            // Darken the corresponding carousel dot to show it is active
            carouselDots[i].style.backgroundColor = "#025a7d";
            cards[i].scrollIntoView({behavior: "smooth"});
        }
        else {
            // Make all other dots non active
            carouselDots[i].style.backgroundColor = "#01B7FF";
        }
    }
    // scroll directly to the card, and directly change the dot using cardNum
}

// Check for scroll on the carousel
carousel.onscroll = carouselScroll;

function carouselScroll(e) {
    // Get left and right bounds of the carousel
    const carouselBounds = carousel.getBoundingClientRect();
    for(i = 0; i < cards.length; i++) {
        const currCard = cards[i].getBoundingClientRect();  
        // Current card is within bounds of carousel, so update dot to be active
        if(currCard.left >= carouselBounds.left && currCard.right <= carouselBounds.right) {
            // Darken the corresponding carousel dot to show it is active
            carouselDots[i].style.backgroundColor = "#025a7d";
        }
        // Card is not in bounds of carousel
        else {
            // Make all other dots non active
            carouselDots[i].style.backgroundColor = "#01B7FF";
        }
    }
}