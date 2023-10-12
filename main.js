let totalString = ''; // String displayed on screen

const screenElement = document.getElementById('screenShow');

// Map button IDs to their respective characters or actions
const buttonMapping = {
    n1: '1',
    n2: '2',
    n3: '3',
    n4: '4',
    n5: '5',
    n6: '6',
    n7: '7',
    n8: '8',
    n9: '9',
    n0: '0',
    clear: 'clear', // Special action to clear the totalString
    addition: ' + ',
    subtraction: ' - ',
    division: ' / ',
    multiplication: ' * ',
    power2: ' ** ',
    log10: 'Math.log10(',
    leftbracket: '(',
    rightbracket: ')',
};

// Event listeners for buttons
for (const buttonId in buttonMapping) {
    if (buttonMapping.hasOwnProperty(buttonId)) {
        const button = document.getElementById(buttonId);
        button.addEventListener("click", function() {
            if (buttonMapping[buttonId] === 'clear') {
                totalString = '';
            } else {
                totalString += buttonMapping[buttonId];
            }
            screenElement.innerHTML = totalString;
        });
    }
}

// Calculate and display the result
result.addEventListener("click", function() {
    try {
        totalString = eval(totalString).toString();
        screenElement.innerHTML = totalString;
    } catch (error) {
        totalString = 'Error';
        screenElement.innerHTML = totalString;
    }
});
