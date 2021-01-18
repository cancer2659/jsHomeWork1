function sum(b, n) {
    var c = parseFloat(b) + parseFloat(n);
    return c
}

function sub(a, b) {
    var c = parseFloat(a) - parseFloat(b);
    return c
}

function division(a, b) {
    var c = parseFloat(a) / parseFloat(b);
    return c
}

function multiplication(a, b) {
    var c = parseFloat(a) * parseFloat(b);
    return c
}

function zeroMist (){
    alert("Ноль нельзя делить! Введите число отличное от 0.")
}

function calc() {
    var a = document.getElementById('increment1').value;
    var b = document.getElementById('increment2').value;
    var d = document.getElementById('increment3').value;
    /*first step of calculation */
    var selectFirst = document.getElementById('firstOperation');
    var indexSelectedFirst = selectFirst.selectedIndex;
    var optionFirst = selectFirst.querySelectorAll('option')[indexSelectedFirst];
    var selectedIdFirst = optionFirst.getAttribute('id');

    /*second step of calculation */
    var selectSec = document.getElementById('secondOperation');
    var indexSelectedSec = selectSec.selectedIndex;
    var optionSec = selectSec.querySelectorAll('option')[indexSelectedSec];
    var selectedIdSec = optionSec.getAttribute('id');
    if (a === '' || b === '' || d === '') {
        alert('необходимо заполнить все значения!')
    } else {
        /*First step multiplication */
        if (selectedIdFirst === 'umn' && selectedIdSec === 'secondUmn') {
            alert("Результат вычисления: " + multiplication(multiplication(a, b), d));
        }
        if (selectedIdFirst === 'umn' && selectedIdSec === 'secondPlus') {
            alert("Результат вычисления: " + sum(multiplication(a, b), d));
        }
        if (selectedIdFirst === 'umn' && selectedIdSec === 'secondMinus') {
            alert("Результат вычисления: " + sub(multiplication(a, b), d));
        }
        if (selectedIdFirst === 'umn' && selectedIdSec === 'secondDel') {
            if (d === '0') {
                zeroMist ();
            } else {
                alert("Результат вычисления: " + division(multiplication(a, b), d));
            }
        }
        /*First step division */
        if (selectedIdFirst === 'del' && selectedIdSec === 'secondDel') {
            if (d === '0' || b === '0') {
                zeroMist ();
            } else {
                alert("Результат вычисления: " + division(division(a, b), d));
            }
        }
        if (selectedIdFirst === 'del' && selectedIdSec === 'secondUmn') {
            if (b === '0') {
                zeroMist ();
            } else {
                alert("Результат вычисления: " + multiplication(division(a, b), d));
            }
        }
        if (selectedIdFirst === 'del' && selectedIdSec === 'secondMinus') {
            if (b === '0') {
                zeroMist ();
            } else {
                alert("Результат вычисления: " + sub(division(a, b), d));
            }
        }
        if (selectedIdFirst === 'del' && selectedIdSec === 'secondPlus') {
            if (b === '0') {
                zeroMist ();
            } else {
                alert("Результат вычисления: " + sum(division(a, b), d));
            }
        }
        /*First step blooming */
        if (selectedIdFirst === 'minus' && selectedIdSec === 'secondPlus') {
            alert("Результат вычисления: " + sum(sub(a, b), d));
        }
        if (selectedIdFirst === 'minus' && selectedIdSec === 'secondMinus') {
            alert("Результат вычисления: " + sub(sub(a, b), d));
        }
        if (selectedIdFirst === 'minus' && selectedIdSec === 'secondDel') {
            if (d === '0') {
                zeroMist ();
            } else {
                alert("Результат вычисления: " + sub(a, division(b, d)));
            }
        }
        if (selectedIdFirst === 'minus' && selectedIdSec === 'secondUmn') {
            alert("Результат вычисления: " + sub(a, multiplication(b, d)));
        }
        /*First step addition*/
        if (selectedIdFirst === 'plus' && selectedIdSec === 'secondPlus') {
            alert("Результат вычисления: " + sum(sum(a, b), d));
        }
        if (selectedIdFirst === 'plus' && selectedIdSec === 'secondMinus') {
            alert("Результат вычисления: " + sub(sum(a, b), d));
        }
        if (selectedIdFirst === 'plus' && selectedIdSec === 'secondDel') {
            if (d === '0') {
                zeroMist ();
            } else {
                alert("Результат вычисления: " + sum(a, division(b, d)));
            }
        }
        if (selectedIdFirst === 'plus' && selectedIdSec === 'secondUmn') {
            alert("Результат вычисления: " + multiplication(a, multiplication(b, d)));
        }
    }
}