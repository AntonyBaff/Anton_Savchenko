/*
function printParams(param1, param2, param3){
    console.log(param1, param2, param3)  // тіло функції
}
*/
/*
function getSum(param1, param2, param3){
    const sum = param1 + param2 + param3
    return sum
}

const result = getSum(1,2,4);
console.log(result);
*/

//Функция конструктор
/*
function Person(name, age) {
    this.name = name; // this говорит что в нее может приходить разное кол-во значений.
    this.age = age;
}

const john = new Person('John', 30);
const Anton = new Person('Antony', 28);

console.log(john);
console.log(Anton);
*/
/*
// параметри
function greet(name='Guest') {
	console.log(`Hello, ${name}!`);
}

// аргумент 
greet('Antony'); // виведе Hello, Anna!
*/

function sum(...numbers) {
	let sum = 0;  

	for (let num of numbers){
		sum += num;
	}

	return sum;
}

console.log(sum(1, 2, 3)); // 6