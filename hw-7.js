//Задание 1
let js = ("js");
let upp = js.toUpperCase();
console.log(upp);

//Задание 2
const filtering = (array, line) =>
  array.filter(str => str.toLowerCase().startsWith(line.toLowerCase()));
const cities = ['Самара', 'Волгоград', 'Сaнкт-Петербург', 'Воронеж', 'Севастополь'];
const citi = ("с");
console.log(filtering(cities, citi));

//Задание 3
const a = 32.58884;
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));

//Здание 4
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5
console.log(Math.ceil(Math.random() * 10));

//Задание 6
function generateRandom(positiveInteger) {
  if (!Number.isInteger(positiveInteger) || positiveInteger <= 0) {
    throw new Error('Функция должна принимать положительное целое число');
  }
  const arrayLength = Math.floor(positiveInteger / 2);
  const result = [];
  for (let i = 0; i < arrayLength; i++) {
    const randomNum = Math.floor(Math.random() * (positiveInteger + 1));
    result.push(randomNum);
  }
  console.log('Входное число:', positiveInteger);
  console.log('Сгенерированный массив:', result);
  return result;
}
const number = 10;
const randomArray = generateRandom(number);

//Задание 7
function getRandomInRange(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    throw new Error('Оба аргумента должны быть целыми числами');
  }
  if (num1 > num2) {
    throw new Error('Минимальное значение не может быть больше максимального');
  }
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}
console.log(getRandomInRange(5, 10))

//Задание 8
let currentDate = new Date();
console.log(currentDate);

//Задание 9
let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log('Дата через 73 дня:', futureDate.toLocaleDateString());

//Задание 10
function formatDate(date) {
    const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const weekdays = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
  ];
  const day = date.getDate();
  const month = months[date.getMonth()]; 
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()]; 

  const hours = String(date.getHours()).padStart(2, '0'); 
  const minutes = String(date.getMinutes()).padStart(2, '0'); 
  const seconds = String(date.getSeconds()).padStart(2, '0'); 

  
  const formattedDate = `Дата: ${day} ${month} ${year} — это ${weekday}.
Время: ${hours}:${minutes}:${seconds}`;

  return formattedDate;
}
console.log(formatDate(new Date()));