//Задание 1
let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (userPassword === password) {
    console.log('Пароль введён верно');
}
else {
    console.log('Пароль введён не верно');
}

//Задание 2
let c = 7;
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 10;
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = -3;
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 2;
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3
let d = 15;
let e = 121;
if (d >= 100 || e >= 100) {
    console.log('Верно');
} else {
    console.log('Неверно')
}

//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = Number(prompt('Ведите номер месяца'));
if (monthNumber < 1 || monthNumber > 12) {
    console.log('Такого месяца не существует');
} else {
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
}
}
//Дополнительное задание 1
let i = prompt('Пожалуйста, введите любое число');
let number = Number(i);
if (isNaN(number)) {
    alert('Ошибка: вы ввели не число!');
} else {
    if (number % 2 === 0) {
    alert('Число чётное');
} else {
    alert('Число нечётное');
}
}
//Дополнительное задание 2
let clientOS = Number(prompt('Введите тип OS'));
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if(clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} 

