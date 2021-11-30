do { 
    var num = +prompt('Введите число: ')
} while (isNaN(num) || num == 0);

var degree = +prompt('Введите степень: ');

var degreeDec = 1;

if (degree == 0 || isNaN(degree)) {
    degreeDec = num * num
} else {
    for (let i = 1; i <= degree; i++) {
        degreeDec = degreeDec * num
    }
}
alert('Ответ ' + degreeDec);