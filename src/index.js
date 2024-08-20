import "./styles.css";
import * as pageContent from "./pageContent.js";




// Add a click event listener to the navigation bar

    const nav= document.querySelector("nav");

     const homeBtn=document.createElement("input");
    homeBtn.type="button";
    homeBtn.value="Home";
    homeBtn.id="homeBtn";
    nav.appendChild(homeBtn);
    
    const menuBtn=document.createElement('input')
    menuBtn.type="button";
    menuBtn.value="Menu";
    menuBtn.id="menuBtn";
    nav.appendChild(menuBtn);
 
    const aboutBtn=document.createElement('input')
    aboutBtn.type="button";
    aboutBtn.value="About";
    aboutBtn.id="aboutBtn";
    nav.appendChild(aboutBtn);

pageContent.loadHome();

    


    





