// if the user types the word "secret", add the "spin" class to the element

// grab the element
const body = document.getElementById('body');


// add an event listener to the element
body.addEventListener('keyup', (e: KeyboardEvent) => {
    // If the key pressed is "secret"
    if (e.key === 's') {
        // Add a class to the element
        body.classList.add('spin');
    }
});