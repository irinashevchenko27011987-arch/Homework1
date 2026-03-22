//Задание 1
const min = (a, b) => a < b ? a : b;
console.log(min(7, 3));

//Задание 2 
const parity = (n) => n % 2 === 0 ? 'Число чётное' : 'Число нечётное';
console.log(parity(17));

//Задание 3
const Square = (number) => number ** 2;
console.log(Square(13));

//Задание 4
/*
function checkAge() {
    const ageInput = prompt('Сколько тебе лет?');
    const age = Number(ageInput);
    if (isNaN(age) || age < 0) {
        alert ('Вы ввели неправильное значение');
    }
    else if (age >= 0 && age <= 12) {
        alert ('Привет, друг!');
    } else   {
        alert ('Добро пожаловать!');
    }
}
checkAge()*/

//задание 5
function calc(a, b) {
    console.log(isNaN(a));
    console.log(isNaN(b));
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }
    return a * b;

}
console.log(calc('lklj', 3));

//Задание 6
function getNumber() {
    let number = prompt('Введите любое число');
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    }
    else {
        return `${number} в кубе равняется ${number ** 3}`; }
}
console.log(getNumber())

//Задание 7
function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * Math.PI * this.radius;
}
const circle1 = {
    radius: 3,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
const circle2 = {
    radius: 5,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea())