
//первый элемент калькулятора
const selectOne = document.querySelector('#select1')

//второй элемент калькулятора
const selectTwo = document.querySelector('#select2')
//третий элемент калькулятора
const selectThree = document.querySelector('#select3')
//итоговая цена
const totalDigit = document.querySelector('.digit')
//итоговое количество дней 
const totalDigitDays = document.querySelector('.digitDays')
//функция на событие 
const changeSelect = () => {
    totalDigit.innerHTML = parseInt(selectOne.value) + parseInt(selectTwo.value) + parseInt(selectThree.value)
    totalDigitDays.innerHTML =
        parseInt(selectOne.selectedOptions[0].getAttribute('days')) +
        parseInt(selectTwo.selectedOptions[0].getAttribute('days')) +
        parseInt(selectThree.selectedOptions[0].getAttribute('days'));
};


//вызов функции при возникновения события в первом элементе 
selectOne.addEventListener('change', changeSelect)
//вызов функции при возникновения события во втором элементе 
selectTwo.addEventListener('change', changeSelect)
//вызов функции при возникновения события в третьем элементе
selectThree.addEventListener('change', changeSelect)







