const input = document.getElementById('input'),
    innerText = document.getElementById('inner-text'),
    btn = document.getElementById('btn');


let arr = JSON.parse(localStorage.getItem('myArray'));

//Добавляем рандомное слово из массива arr на англ на экран
function addRandomWord(){
    if(!Object.is(innerText,null)){
        innerText.innerText = arr[Math.floor(Math.random()*arr.length)].eng;
    }
}
//Сравниваем введенное пользователем слово с переводом
function checkRightTranslate(){
    
    if (input.value != '') {
        input.value.toLowerCase();
        
        //Перебираем массив с объектами и ищем совпадение
        console.log(arr);
        let currentWord = arr.find(el => el.eng == innerText.textContent);
        console.log(currentWord);
        
        if (input.value == currentWord.rus) {
            alert('Верно');
            addRandomWord();
        } else {
            alert('Неверно');
        }
    } else {
        alert('Введите слово');
        return;
    }
    input.value = '';
}


try {
    btn.addEventListener('click', checkRightTranslate);
} catch{}

document.addEventListener('DOMContentLoaded',addRandomWord);  







