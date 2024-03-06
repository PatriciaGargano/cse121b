/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */


let fullName ='Patricia Gargano';

const currentYear = new Date().getFullYear();

const profilePicture = "images/Imagen de WhatsApp 2024-03-05 a las 16.58.32_3a52db91.jpg";

/* Step 3 - Element Variables */

const nameElement= document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('.profile-image');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile image of ${profilePicture}`);



/* Step 5 - Array */

// Declare an array variable to hold favorite foods
const favoriteFoods = ["Pizza", "iceCream", "Chocolate", "FriedPotatoes"];

foodElement.innerHTML = favoriteFoods.join(", ");

const newFavoriteFood = "Burgers";

favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML = favoriteFoods.join(", ");

foodElement.innerHTML += `<br>${newFavoriteFood}`;

favoriteFoods.shift();

favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${newFavoriteFood}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;





