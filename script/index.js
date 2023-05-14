import  arr from "./add-word.js";
import {addRandomWord} from "./add-word.js";

const input = document.getElementById('input'),
    btn = document.getElementById('btn');

//Сравниваем введенное пользователем слово с переводом
function checkRightTranslate(){
    
    if (input.value != '') {
        input.value.toLowerCase();
        
        //Перебираем массив с объектами и ищем совпадение
        let currentWord = arr.find(el => el.eng == innerText.textContent);
        
        if (input.value == currentWord.rus) {
            alert('Верно');
            addNewWord();
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







