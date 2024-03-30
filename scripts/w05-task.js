// Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
const templesElement = document.getElementById('#temples');

// Declare a global empty array variable to store a list of temples named templeList.
let templeList = [

];

// Declare a function expression using const named displayTemples that uses an arrow 
//function to accept a list of temples as an array argument.

const displayTemples = (temples) => {
    // Clear existing temple elements
    //templesElement.innerHTML = '';

    // Process each temple in the temple array using a forEach method
    temples.forEach(temple => {
        // Create an HTML <article> element (createElement)
        const article = document.createElement('article');

        // Create an HTML <h3> element and add the temple's templeName property to this new element
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        // Create an HTML <img> element
        const img = document.createElement('img');

        // Add the temple's imageUrl property to the src attribute
        img.src = temple.imageUrl;

        // Add the temple's location property to the alt attribute
        img.alt = temple.location;

        // Append the <h3> element and the <img> element to the <article> element as children
        article.appendChild(h3);
        article.appendChild(img);

        // Append the <article> element to the templesElement
        templesElement.appendChild(article);
    });
};

// Declare a function expression named getTemples
const getTemples = async () => {
    try {
        // Declare a const variable named response that awaits the built-in fetch method
        const response = await fetch('Thttps://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

        // Convert the fetch response into a JavaScript object
        const templeData = await response.json();

        // Assign the result to the templeList global array variable
        templeList = templeData;

        // Call the displayTemples function with templeList as the argument
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};

// Declare a function expression named reset that clears all of the <article> elements from the templesElement
const reset = () => {
    templesElement.innerHTML = '';
};

// Declare a function expression named filterTemples
const filterTemples = (temples) => {
    // Call the reset function to clear the output
    reset();

    // Obtain the value of the HTML element with the ID of filtered (The pull-down menu)
    const filter = document.getElementById('filtered').value;

    // Use a switch statement that uses the filter value as the selector
    switch (filter) {
        case 'utah':
            // Filter for temples where the location contains "Utah" as a string
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            // Filter for temples where the location does not contain "Utah" as a string
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            // Filter for temples where the dedicated date is before 1950
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
            // No filter, just use temples as the argument
            displayTemples(temples);
            break;
        default:
            console.error('Invalid filter value');
    }
};

// Event Listener: filterTemples Element change
document.getElementById('filtered').addEventListener('change', () => {
    // Call the filterTemples function and send an arrow function result with the templeList as the argument
    filterTemples(templeList);
});

// Call the getTemples function to fetch temple data
getTemples();
