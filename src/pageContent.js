import restaurantImg1 from "../assets/restaurant1.jpg";



const main= document.querySelector("main");

export function loadHome(){

const img= document.createElement("img");
img.src=restaurantImg1;
main.appendChild(img);

}