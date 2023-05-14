const inputEng = document.getElementById('input-eng-word'),
    inputRus = document.getElementById('input-rus-word'),
    innerText = document.getElementById('inner-text'),
    confirmBtn = document.getElementById('confirm-btn');

//хранилище всех слов
let arr = [];

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

//Добавляем рандомное слово из массива arr на англ на экран
export function addRandomWord(){
    arr = JSON.parse(localStorage.getItem('myArray'));
    if(!Object.is(innerText,null)){
        innerText.textContent = arr[Math.floor(Math.random()*arr.length)].eng;
    }
}

try {
    confirmBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        addNewWord();
    });
} catch {}

export default {arr, addRandomWord};