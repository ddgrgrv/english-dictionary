let arr = [
    { eng: 'apple', rus: 'яблоко'},
    { eng: 'dog' , rus: 'собака'},
    { eng: 'cat' , rus: 'кошка'},
];
const inputEng = document.getElementById('input-eng-word'),
    inputRus = document.getElementById('input-rus-word'),
    confirmBtn = document.getElementById('confirm-btn');

function addNewWord(){
    arr.push({
        eng: inputEng.value, rus: inputRus.value
    });
    arr.push('добавили');
    inputEng.value = '';
    inputRus.value = '';
    alert('Вы добавили новое слово!');
}

try {
    confirmBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        addNewWord();
        // arr.push('добавили');
    });
} catch{}

export {arr}; // список экспортируемых переменных