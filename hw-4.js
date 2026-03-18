// Задание 1
let a = 0;
while (a < 2) {
  console.log("Привет");
  a++;
}

//Задание 2
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Задание 3
let b = 7;
while (b <= 22) {
    console.log(b);
    b++;
}

//Задание 4
const obj = {
  "Коля": "200",
  "Вася": "300",
  "Петя": "400"
};
for (let key in obj) {console.log(`${key} - зарплата ${obj[key]} долларов`);
}

//Задание 5
let n = 1000;
let num = 0; 
while (n >= 50) {
  n = n / 2;
  num++;
}
console.log("Конечное число:", n);
console.log("Количество итераций:", num);

//Задание 6
let firstFriday = 1;
const daysInMonth = 31;
for (let day = firstFriday; day <= daysInMonth; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`);
}