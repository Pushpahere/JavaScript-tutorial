const task3Element = document.getElementById('task-3');

function fun1()
{
    alert('Hello Im in funtion 1');
}

function fun2(name)
{
alert('Im in function2 and value of name is '+name);
}

fun1();
fun2('Pushpa');

task3Element.addEventListener('click',fun1);

function addStrings(name1, name2, name3)
{
//  let comString= name1+ name2 + name3;
let comString =`${name1} ${name2} ${name3}`;
 return comString;
}

alert('concatenated strings ='+ addStrings('hello','welcome','Chennai'));