// import { arr} from "./add-word.js";

const innerText = document.getElementById('inner-text'),
    input = document.getElementById('input'),
    btn = document.getElementById('btn'),
    inputEng = document.getElementById('input-eng-word'),
    inputRus = document.getElementById('input-rus-word'),
    confirmBtn = document.getElementById('confirm-btn');

let arr = [];



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

//добавляем возможность записи новых слов в словарик
function addNewWord(){
    let newWord = {
        eng: inputEng.value, rus: inputRus.value
    };
    arr.push(newWord)
    localStorage.myArray = JSON.stringify(arr);
    inputEng.value = '';
    inputRus.value = '';
    alert('Вы добавили новое слово!');
}

//Добавляем рандомное слово из массива arr на англ 
function addRandomWord(){
    arr = JSON.parse(localStorage.getItem('myArray'));
    innerText.textContent = arr[Math.floor(Math.random()*arr.length)].eng;
}


try {
    confirmBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        addNewWord();
    });
} catch {}

try {
    btn.addEventListener('click', checkRightTranslate);
} catch {}

if (!Object.is(innerText,null)) {
    document.addEventListener('DOMContentLoaded',addRandomWord);  
}







