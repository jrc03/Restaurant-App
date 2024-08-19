import "./styles.css";

console.log("Trying to understand lol")


// Add a click event listener to the navigation bar

    const nav= document.querySelector("nav");

    homeBtn=document.createElement("input");
    homeBtn.type="button";
    homeBtn.value="Home";
    homeBtn.id="homeBtn";
    nav.appendChild(homeBtn);
    
    menuBtn=document.createElement('input')
    menuBtn.type="button";
    menuBtn.value="Menu";
    menuBtn.id="menuBtn";
    nav.appendChild(menuBtn);

    aboutBtn=document.createElement('input')
    aboutBtn.type="button";
    aboutBtn.value="About";
    aboutBtn.id="aboutBtn";
    nav.appendChild(aboutBtn);

    





