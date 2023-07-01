function counterFunction(count) {

    let plus = document.querySelector('.plus');
    let minus = document.querySelector('.minus');
    let number = document.querySelector('.number');
    let numberValue = parseFloat(number.value, 10);

    minus.addEventListener('click', function() {

        if (numberValue === 0) {
            return;
        }

        numberValue--;
        number.value = numberValue;
        alert('вы нажали на минус)')
    })

    plus.addEventListener('click', function() {
        numberValue++;
        number.value = numberValue;
        alert('вы нажали на плюс)')
    })

    number.addEventListener('click', function () {
        alert('вы нажали на инпут)')
    })

}

let counts = document.querySelectorAll('.counter');

counts.forEach(counterFunction);
