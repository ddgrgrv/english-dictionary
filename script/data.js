const div = document.getElementById('container'),
    tbody= document.getElementById('tbody');

let arr = JSON.parse(localStorage.getItem('myArray'));

function createTableItem(el){
    const tr = document.createElement('tr'),
        tdItemEng = document.createElement('td'),
        tdItemRus = document.createElement('td');

    tdItemEng.innerText = el.eng;
    tdItemRus.innerText = el.rus;

    tr.append(tdItemEng,tdItemRus);
    return tr;
}

document.addEventListener('DOMContentLoaded', function(){
    arr.forEach((el)=>{
        let item = createTableItem(el);
        tbody.append(item);
    });
});