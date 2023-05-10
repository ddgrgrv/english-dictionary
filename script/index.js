import { arr} from "./add-word.js";

const innerText = document.getElementById('inner-text'),
    input = document.getElementById('input'),
    btn = document.getElementById('btn');

//Добавляем рандомное слово из массива arr на англ 
function addRandomWord(arr){
    let copyArr = arr.slice();
    return innerText.textContent = copyArr[Math.floor(Math.random()*copyArr.length)].eng;
}

//Сравниваем введенное пользователем слово с переводом
function checkRightTranslate(){
    
    if (input.value != '') {
        input.value.toLowerCase();
        
        //Перебираем массив с объектами и ищем совпадение
        let currentWord = arr.find(el => el.eng == innerText.textContent);
        
        if (input.value == currentWord.rus) {
            alert('Верно');
        } else {
            alert('Неверно');
        }
    } else {
        alert('Введите слово');
        return;
    }
    input.value = '';
}

document.addEventListener('DOMContentLoaded', (event)=>{
    event.preventDefault();
    addRandomWord(arr);
});

btn.addEventListener('click', checkRightTranslate);


