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

// Display favorite foods array in the HTML element with the id of "food"
foodElement.innerHTML = favoriteFoods.join(", ");

// Declare and instantiate a variable to hold another single favorite food item
const newFavoriteFood = "Burgers";

// Add the new favorite food item to the favoriteFoods array
favoriteFoods.push(newFavoriteFood);

// Update the content of the foodElement to include the new favorite food item
foodElement.innerHTML += `<br>${newFavoriteFood}`;

// Remove the first element in the favorite food array
favoriteFoods.shift();

// Append the new array values onto the displayed content with a line break
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;

// Remove the last element in the favorite food array
favoriteFoods.pop();

// Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favoriteFoods.join(", ")}`;






