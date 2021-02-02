function getFullName1(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    return fullName;
}

const name1 = getFullName1('omuk', 'sonket', 'bin', 'Hanif');
console.log(name1);


// catch all parameter together
// arguments funtion er bahire kaj kore nah
function getFullName2() {
    console.log(arguments);
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        fullName = fullName + ' ' + arguments[i];
    }
    return fullName;
}

const name2 = getFullName2('Hanif', 'sonket', 'paribahan', 'subokta');
console.log(name2);