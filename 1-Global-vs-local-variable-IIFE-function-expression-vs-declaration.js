function test() {
    const localVariable = 'Nayeem';
    console.log(localVariable);
}

// global variable use kom kora valo
const globalVariable = 'kabir';

function test1() {
    console.log(globalVariable);
}

function test2() {
    localToGlobal = 'Ahsanul Kabir';
    // ei khane variable type deya jbe nah FOR make local variable to global variable = Global lick o bola hoy
    //console.log(localToGlobal);
}

test();
test1();
test2();
console.log(localToGlobal);

// IIFE function = This function called = imidiately invoked function = likhar sate sate use kore pala
(function test4() {
    console.log('imidiately invoked function');
})();


// Function Declaration type
function addToDo() {

}

// Function Expression
var myTodo = function(task) {

};