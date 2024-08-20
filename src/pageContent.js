import restaurantImg1 from "../assets/restaurant1.jpg";
import foodPic1 from "../assets/foodPic1.jpg";
import foodPic2 from "../assets/foodPic2.jpg";
import foodPic3 from "../assets/foodPic3.jpg";
import foodPic4 from "../assets/foodPic4.jpg";





const main= document.querySelector("main");

export function loadHome() {
    // Create the homeWrapper container
    const homeWrapper = document.createElement('div');
    homeWrapper.classList.add('home-wrapper'); 

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    homeWrapper.appendChild(imgContainer);

   
    const img = document.createElement('img');
    img.classList.add('restaurant-img');
    img.src = restaurantImg1;
    imgContainer.appendChild(img);

    const textDiv = document.createElement('div');
    textDiv.classList.add('text-div');
    imgContainer.appendChild(textDiv);


    const imgText = document.createElement('p');
    imgText.classList.add('img-text');
    imgText.textContent = 'Welcome to Celtinni!';
    textDiv.appendChild(imgText);

    const reservaBtn = document.createElement('input');
    reservaBtn.type = 'button';
    reservaBtn.value = 'Book a table';
    reservaBtn.classList.add('reserva-btn');
    textDiv.appendChild(reservaBtn);

    const galleryArray = [foodPic1, foodPic2, foodPic3, foodPic4];
    const galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery');

    galleryArray.forEach(element => {
        const galleryImg = document.createElement('img');
        galleryImg.classList.add('gallery-img');
        galleryImg.src = element;
        galleryDiv.appendChild(galleryImg);
    });

    homeWrapper.appendChild(galleryDiv);

    const textContentDiv = document.createElement('div');
    textContentDiv.classList.add('text-content');

    
    const heading = document.createElement('h1');
    heading.textContent = 'Philosophy of Celtinni Santo Domingo';
    textContentDiv.appendChild(heading);

    
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Celtinni offers a unique Mediterranean dining experience with a touch of local flavors. Our restaurant specializes in grilled Mediterranean cuisine, skillfully fused with local ingredients to create exquisite dishes that cater to discerning tastes. Enjoy our delectable menu prepared with high-quality local produce, primarily cooked on traditional charcoal grills, and accompanied by breathtaking views of the serene Caribbean Sea through our panoramic windows.';
    textContentDiv.appendChild(paragraph1);

   
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Our dedicated team is committed to crafting unforgettable experiences for our guests, providing exceptional lodging and dining services characterized by warmth and courtesy, always surpassing customer expectations. With over 14 years of experience, our chef excels in blending remarkable flavors to delight even the most refined palate, creating distinctive and memorable dishes that set us apart.';
    textContentDiv.appendChild(paragraph2);

    homeWrapper.appendChild(textContentDiv);

    

    main.appendChild(homeWrapper);
}



export function loadMenu(){
    
const menuDiv=document.createElement('div');
menuDiv.classList.add("menu-div");

const menuItems = [
    { 
        name: "Appetizers", 
        items: [
            "Ceviche de Mariscos", 
            "Salmon al Blanco", 
            "Tiramisu", 
            "Bruschetta", 
            "Stuffed Mushrooms", 
            "Chicken Skewers", 
            "Spring Rolls"
        ]
    },
    { 
        name: "Main Course", 
        items: [
            "Grilled Salmon", 
            "Grilled Chicken", 
            "Grilled Vegetable Stir-Fry", 
            "Beef Wellington", 
            "Lamb Chops", 
            "Seafood Paella", 
            "Vegetarian Lasagna"
        ]
    },
    { 
        name: "Desserts", 
        items: [
            "Chocolate Lava Cake", 
            "Lemon Meringue", 
            "Cheesecake", 
            "Panna Cotta", 
            "Fruit Tart", 
            "Crème Brûlée", 
            "Apple Pie"
        ]
    }
];
menuItems.forEach(menuItem => {
    const itemDiv=document.createElement('div');
    itemDiv.classList.add("item-div");

    const heading=document.createElement('h2');
    heading.classList.add("menu-heading");
    heading.textContent=menuItem.name;
    itemDiv.appendChild(heading);

    menuItem.items.forEach(item => {
        const itemP=document.createElement('p');
        itemP.textContent=item;
        itemDiv.appendChild(itemP);
    })

    menuDiv.appendChild(itemDiv);
})
main.appendChild(menuDiv);

}

export function loadFooter(){
    const footer= document.querySelector("footer")
    footer.textContent="Celtinni Santo Domingo. All rights reserved.";
    footer.appendChild(footer);
}
