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

function calc() {
    var a = document.getElementById('increment1').value;
    var b = document.getElementById('increment2').value;
    var select = document.querySelector('select');
    var indexSelected = select.selectedIndex;
    var option = select.querySelectorAll('option')[indexSelected];
    var selectedId = option.getAttribute('id');
   if (a==='' || b==='') {
       alert('необходимо заполнить все значения!')
   }
       else{
           if (selectedId === 'plus') {
               alert("Результат сложения: " + sum(a, b))
           } else if (selectedId === 'minus') {
               alert("Результат вычетания: " + sub(a, b))
           } else if (selectedId === 'del') {
               if (b==='0'){
                   alert("На ноль делить нельзя")
               }
               else {
                   alert("Результат вычетания: " + division(a, b))
               }
           } else if (selectedId === 'umn') {
               alert("Результат умножения: " + multiplication(a, b))
           }
       }
}