// When the 'hedgehog' elemnt is hovered over, the image will spin

// Grab the element
const hedgehog: HTMLElement = document.getElementById('HEDGEHOG');


// Add an event listener to the element
hedgehog.addEventListener('mouseover', () => {
    // Add a class to the element
    hedgehog.classList.add('spin');
});

