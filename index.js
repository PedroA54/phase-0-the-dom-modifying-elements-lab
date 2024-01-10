console.log('index.js is being executed');

const mainElement = document.getElementById('main');
console.log('mainElement:', mainElement);
mainElement.remove();

// Get a reference to the <h1> element in your HTML
const headerElement = document.querySelector('h1');
console.log('headerElement:', headerElement);

// Define the newHeader variable and assign it the value of headerElement
const newHeader = headerElement;
console.log('newHeader:', newHeader);
newHeader.textContent = "pedro is the champion";