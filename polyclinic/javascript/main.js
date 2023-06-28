
const btnFormSend = document.getElementById('send');
const textBoxName = document.getElementById('nameInput');
const textBoxNumber = document.getElementById('numberInput');
let valueName = textBoxName.value;
let valueNumber = textBoxNumber.value;
btnFormSend.onclick = function(event){
    if(valueName == ""|| valueNumber.onemptied == "") {
        alert("введите данные");
    }
}



// карусель

let offset = 0; // смещение от левого края
const lineSlide = document.querySelector('.slider-reviews-line')


document.getElementById('btn-reviews-right').addEventListener('click',function(){
    offset+=450;
    if(offset > 1350){
        offset = 0;
    }
    lineSlide.style.left = -offset + 'px';
    
});
document.getElementById('btn-reviews-left').addEventListener('click',function(){
    offset-=450;
    if(offset < 0){
        offset = 1350;
    }
    lineSlide.style.left = -offset + 'px';
   
});


let massiv = [2, 4, 5, 7676, 3, 5, 2, 4, 9, 0, 2, 45, 7676];
let count = Math.max(massiv[0, massiv.length-1]);
console.log('Максимальное значение: ' + count );

massiv.forEach(function(mas, index){
    console.log("значение: " + mas + ' индекс: ' + index);
    if(mas === count){
        console.log('индекс: ' + index )
    }
    
})
