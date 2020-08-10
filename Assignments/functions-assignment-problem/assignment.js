// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();

//1.
console.log('Functions Assignment 1');
const fun1 = name => console.log("hi " + name);
fun1('Pushpa');


//2.1
console.log('Functions Assignment 2.1');
const greet = 'Welcome';
const fun21 = (greetings, name) => console.log(greetings +' '+ name);
fun21(`${greet}`, 'Pushpa');

//2.2
console.log('Functions Assignment 2.2');
const greet1 = 'Welcome Home Pushpa';
const fun22 = () => console.log(`${greet1}`);
fun22();

//2.3
console.log('Functions Assignment 2.3');
const greet2 = 'Welcome Home Pushpa';
const fun23 = (greet) => { return greet; };
console.log(fun23(`${greet2}`));

//3
console.log('Functions Assignment 3');
const greet3 = 'Family';
const fun3 = (msg, name = `${greet3}`) => console.log(msg + name);
fun3(' I love ', prompt('Enter a name', ''));
fun3('I like to play with ');
 const n1 = prompt('Enter a name', '');
!!(n1) ? fun3(' Welcome ', n1) : fun3('Welcome');
