import restaurantImg1 from "../assets/restaurant1.jpg";
import foodPic1 from "../assets/foodPic1.jpg";
import foodPic2 from "../assets/foodPic2.jpg";
import foodPic3 from "../assets/foodPic3.jpg";
import foodPic4 from "../assets/foodPic4.jpg";
import aboutImg from "../assets/about-img.jpg";




const main= document.querySelector("main");

export function loadHome() {

    main.textContent="";
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



export function loadMenu() {
    // Clear existing content
    main.textContent = "";

    // Create the menuDiv container
    const menuDiv = document.createElement('div');
    menuDiv.classList.add("menu-div");

    // Define the menu items with descriptions
    const menuItems = [
        { 
            name: "Appetizers", 
            items: [
                { name: "Ceviche de Mariscos", description: "A refreshing blend of seafood marinated in citrus juices and spices." },
                { name: "Salmon al Blanco", description: "Grilled salmon served with a creamy white sauce and herbs." },
                { name: "Tiramisu", description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream." },
                { name: "Bruschetta", description: "Grilled bread topped with fresh tomatoes, garlic, and basil." },
                { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with a savory blend of cheese and herbs." },
                { name: "Chicken Skewers", description: "Tender chicken skewers marinated and grilled to perfection." },
                { name: "Spring Rolls", description: "Crispy rolls filled with fresh vegetables and served with a tangy dipping sauce." }
            ]
        },
        { 
            name: "Main Course", 
            items: [
                { name: "Grilled Salmon", description: "Perfectly grilled salmon served with a lemon butter sauce." },
                { name: "Grilled Chicken", description: "Juicy grilled chicken breast seasoned with a blend of herbs and spices." },
                { name: "Grilled Vegetable Stir-Fry", description: "A colorful mix of grilled vegetables stir-fried with a light soy glaze." },
                { name: "Beef Wellington", description: "Tender beef fillet wrapped in puff pastry and served with a rich mushroom duxelles." },
                { name: "Lamb Chops", description: "Succulent lamb chops grilled and served with mint sauce." },
                { name: "Seafood Paella", description: "A traditional Spanish dish with saffron-infused rice, seafood, and chorizo." },
                { name: "Vegetarian Lasagna", description: "Layers of pasta, vegetables, and ricotta cheese baked to perfection." }
            ]
        },
        { 
            name: "Desserts", 
            items: [
                { name: "Chocolate Lava Cake", description: "Warm chocolate cake with a gooey center, served with vanilla ice cream." },
                { name: "Lemon Meringue", description: "A tart lemon filling topped with fluffy meringue, served in a flaky crust." },
                { name: "Cheesecake", description: "Creamy cheesecake with a graham cracker crust, topped with fresh berries." },
                { name: "Panna Cotta", description: "Silky smooth vanilla panna cotta served with a berry compote." },
                { name: "Fruit Tart", description: "A crisp tart filled with pastry cream and topped with fresh seasonal fruits." },
                { name: "Crème Brûlée", description: "Rich custard topped with a layer of caramelized sugar." },
                { name: "Apple Pie", description: "Classic apple pie with a flaky crust, served with vanilla ice cream." }
            ]
        }
    ];

    // Loop through menu items to create the menu structure
    menuItems.forEach(menuItem => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add("item-div");

        // Create and append the heading
        const heading = document.createElement('h2');
        heading.classList.add("menu-heading");
        heading.textContent = menuItem.name;
        itemDiv.appendChild(heading);

        // Loop through the items to add each dish with its description
        menuItem.items.forEach(item => {
            const itemContainer = document.createElement('div');
            itemContainer.classList.add('item-container');

            const itemName = document.createElement('h3');
            itemName.classList.add('item-name');
            itemName.textContent = item.name;
            itemContainer.appendChild(itemName);

            const itemDescription = document.createElement('p');
            itemDescription.classList.add('item-description');
            itemDescription.textContent = item.description;
            itemContainer.appendChild(itemDescription);

            itemDiv.appendChild(itemContainer);
        });

        menuDiv.appendChild(itemDiv);
    });

    // Append the menuDiv to the main element
    main.appendChild(menuDiv);
}


export function loadAbout() {
    // Clear existing content
    main.textContent = "";

    // Create the container for the about section
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add("about-div");

    // Create and append the heading
    const heading = document.createElement('h1');
    heading.classList.add("about-heading");
    heading.textContent = 'About Celtinni';
    aboutDiv.appendChild(heading);

    // Create and append the image
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('about-img-container');
    const img = document.createElement('img');
    img.classList.add('about-img');
    img.src = aboutImg;
    img.alt = "About Celtinni";
    imgContainer.appendChild(img);
    aboutDiv.appendChild(imgContainer);

    // Create and append the paragraph for the story
    const paragraph1 = document.createElement('p');
    paragraph1.textContent = "Celtinni was born from a passion for Mediterranean flavors, a deep love for culinary artistry, and the desire to create a unique dining experience. Our journey began with a commitment to bring together the finest local ingredients and the rich traditions of Mediterranean cuisine.";
    aboutDiv.appendChild(paragraph1);

    // Create and append the paragraph for the location
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = "You can find us in the heart of Santo Domingo, overlooking the serene Caribbean Sea. Our restaurant is conveniently located at Av. Tiradentes, Santo Domingo (Random location), offering breathtaking views and an inviting atmosphere.";
    aboutDiv.appendChild(paragraph2);

    // Create and append the paragraph for who we are
    const paragraph3 = document.createElement('p');
    paragraph3.textContent = "At Celtinni, we are a team of dedicated culinary professionals with a shared vision to deliver exceptional dining experiences. Our chef, with over 14 years of experience, leads a passionate team committed to crafting unforgettable memories for our guests.";
    aboutDiv.appendChild(paragraph3);

    // Append the aboutDiv to the main element
    main.appendChild(aboutDiv);
}

export function loadFooter(){
    const footer= document.querySelector("footer")
    footer.textContent="Celtinni Santo Domingo. All rights reserved.";
    footer.appendChild(footer);
}
