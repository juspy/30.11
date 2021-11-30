do {
    num = +prompt('Введите колличество строк: ');
} while (num == 0);
if (isNaN(num)) {
    num = 5
} else {
    num = num;
}
do {
    a = prompt('Введите первый символ');
} while (a == 0);
do {
    b = prompt('Введите следующий символ');
} while (b == 0);
result = a
console.log(a + b);
for (let i = 0; i <= num; i++) {
    result = a + result;
    console.log(result + b);
}

