const inputEng = document.getElementById('input-eng-word'),
    inputRus = document.getElementById('input-rus-word'),
    
    confirmBtn = document.getElementById('confirm-btn');

//хранилище всех слов
let arr = JSON.parse(localStorage.getItem('myArray'));


//добавляем возможность записи новых слов в словарик
function addNewWord(){
    //проверка на пустые поля
    //проверить есть ли это слово уже в массиве
    console.log(arr);
    let newWord = {
        eng: inputEng.value, rus: inputRus.value
    };
    arr.push(newWord);
    localStorage.myArray = JSON.stringify(arr);
    inputEng.value = '';
    inputRus.value = '';
    alert('Вы добавили новое слово!');
}



try {
    confirmBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        addNewWord();
    });
} catch {}

export default { arr, addRandomWord};