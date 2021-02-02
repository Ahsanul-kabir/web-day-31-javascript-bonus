function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];

    if (pin.length === 4) {
        return pin;
    } else {
        //console.log('short pin', pin);
        return getPin();
    }
}

// display generate pin
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// handle calculator button event
const buttonContainer = document.getElementById('degit-container');
buttonContainer.addEventListener('click', function(event) {
    // console.log(event.target);
    // console.log(event.target.innerText);
    const degit = event.target.innerText;
    if (isNaN(degit)) {
        // handle backspace

        // handle clear

        console.log('handle non digit');
    } else {
        //console.log(degit);
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + degit;
    }
})

function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {

    } else {

    }

}