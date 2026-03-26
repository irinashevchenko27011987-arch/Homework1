//Задание 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 10) break;
    console.log(numbers[i]);
}

//Задание 2
const numbs = [1, 5, 4, 10, 0, 3];
numbs.forEach((el, index) => {
    console.log(`${el} : ${index}`)
})

//Задание3
const arr = [1, 3, 5, 10, 20];
const result = arr.join(' ');
console.log(result);

//Задание 4
const array = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
for (const item of array) {
    for (let i = 0; i < item.length; i++) {
        if (i === 0) {
            console.log(`Числа ${item[i]}`);
        } else {
            console.log(` ${item[i]}`);
        }
    }
}

//Задание 5
const figure = [1, 1, 1];
figure.push(2, 2, 2);
console.log(figure);

//Задание 6

const element = [9, 8, 7, 'a', 6, 5];
const edArray = element.sort();
const filteredArray = edArray.filter(item => !isNaN(item));
console.log(filteredArray);

//Задание 7
const num = [9, 8, 7, 6, 5];
let guessNumber = prompt('Попробуй угадать число!');
if (guessNumber === null) {
    alert('Пока!');
} else {
    let guessAsNumber = Number(guessNumber);
    let isFound = num.includes(guessAsNumber);
    if (isFound) {
        alert('Угадал!');
    }
    else {
        alert('Увы(');
    }
}
//Задание 8
const line = "abcdef";
const reverseLine = line.split('').reverse().join('');
console.log(reverseLine);

//Задание 9
const a = [[1, 2, 3], [4, 5, 6]];
const b = [...a[0], ...a[1]];
console.log(b);

//Задание 10
const c = [3, 5, 6, 7, 9];
for (let i = 0; i < c.length - 1; i++) {
    console.log(c[i] + c[i + 1]);
}

//Задание 11
const length = [2, 5, 10, 13];
const square = length.map(item => item ** 2);
console.log(square);

//Задание 12
const names = ['Лена', 'Катя', 'Света'];
function transWordLength(names) {
    return names.map(name => name.length);
}
console.log(transWordLength(names));


//Задание 13
const data = [3, -5, 6, -1, 2];
function negative(data) {
    return data.filter(item => item < 0);
}
console.log(negative(data));

//Задание 14
const random = Array.from({length:5}, () => Math.floor(Math.random() * 10) + 1);
function issue(random) {
    return random.filter(item => item % 2 === 0);
}
console.log('исходный массив: ', random);
console.log('массив с чётными значениями: ', issue(random));

//Задание 15
const meaning = Array.from({length:6}, () => Math.floor(Math.random() * 10) + 1);
const sum = meaning.reduce((total, item) => total + item, 0);
const average = sum / meaning.length;
console.log(average);
