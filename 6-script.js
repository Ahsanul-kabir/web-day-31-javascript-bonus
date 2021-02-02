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
        // handle clear
        if (degit === 'C') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
        // handle backspace

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
        // const correctShow = document.getElementById('correct-pin');
        // correctShow.style.display = 'block';

        // const incorrectShow = document.getElementById('incorrect-pin');
        // incorrectShow.style.display = 'none';

        displayMatchResult('block', 'none');

    } else {
        // const correctShow = document.getElementById('correct-pin');
        // correctShow.style.display = 'none';
        // const incorrectShow = document.getElementById('incorrect-pin');
        // incorrectShow.style.display = 'block';

        displayMatchResult('none', 'block');

    }

    function displayMatchResult(correctStatus, incorrectStatus) {
        const correctShow = document.getElementById('correct-pin');
        correctShow.style.display = correctStatus;

        const incorrectShow = document.getElementById('incorrect-pin');
        incorrectShow.style.display = incorrectStatus;
    }


}