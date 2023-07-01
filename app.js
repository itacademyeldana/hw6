function counterFunction(count) {

    let plus = document.querySelector('.plus');
    let minus = document.querySelector('.minus');
    let number = document.querySelector('.number');
    let numberValue = parseFloat(number.value, 10);

    minus.addEventListener('click', function() {

        if (numberValue === 0) {
            return;
        };

        numberValue--;
        number.value = numberValue;
    });

    plus.addEventListener('click', function() {
        numberValue++;
        number.value = numberValue;
    });

}

let counts = document.querySelectorAll('.counter');

counts.forEach(counterFunction);
