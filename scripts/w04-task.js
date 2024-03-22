/* LESSON 3 - Programming Tasks */

/* Profile Object  */

// Declare a new object literal variable named myProfile and assign an empty object to it
// Add a property named "name" and set its value to your name

let myProfile = {
    name: 'Patricia Gargano',
    photo: {
        src: 'images/Imagen de WhatsApp 2024-03-05 a las 16.58.32_3a52db91.jpg',
        alt: 'Profile Picture'
    },

    favoriteFoods: [
        'Fries',
        'Empanadas',
        'Milanesas',
        'Ice cream',
        'Dulce de leche',
        'Cake'
    ],

    hobbies: [
        'Reading',
        'Crochet',
        'Play the piano',
        'Play with my son',
    ],

    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
let places = [
    {
        place: 'Argentina', 
        length: '45 years'
    },

    {
        place: 'Provo, UT',
        length: 'Three weeks'
    },

    {
        place: 'Paris,FR',
        length: '1 month'
    },

    {
        place: 'Bahia Blanca, ARG',
        length: '5 years'
    },
];

places.forEach(place => {
    myProfile.placesLived.push(place);
});
console.log(myProfile.placesLived);




/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#favorite-foods').appendChild(li);
}
);

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#hobbies').appendChild(li);
}
);

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd')
    dt.textContent = placesLived.place;
    dd.textContent = placesLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
}
);