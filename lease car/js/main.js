
// ------ объявление переменных ------
const images = document.querySelectorAll('.slider .slider__squere img'),
    firstBtn = document.getElementById('firstBtn'),
    secondBtn = document.getElementById('secondBtn'),
    trirdBtn = document.getElementById('trirdBtn'),
    fourthBtn = document.getElementById('fourthBtn'),
    slider__squere = document.querySelector('.slider__squere'),
    clickArea = document.querySelectorAll('.clickArea div'),
    clickAreaRight = document.querySelector('.clickAreaRight'),
    clickAreaLeft= document.querySelector('.clickAreaLeft'),
    slider = document.getElementById('slider'),
    slider__pagination= document.querySelectorAll('.slider__pagination button');                                   

let flgMouseUp = false;
let flgClick = false;


//счетчик
let count = 0;

let width;

// ------ цвета для слайдера ------
const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
const defoltColor = getComputedStyle(document.documentElement).getPropertyValue('--color-white');

// метод адаптации самого слайдера 
function init(){
    console.log('resize');
    width =  document.querySelector('.slider').offsetWidth;
    slider__squere.style.width = width*images.length+ 'px';
    images.forEach(item =>{
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    scrollSlide()
  
    
    
    console.log(slider__squere.style.width);
}

// адаптируем зоны клика слайдера при полной загрузк страницы 
window.addEventListener('load' , function(){
    init();
    clickAreaSize();
});
// адаптируем зоны клика слайдера при изменении разамеров страницы 
window.addEventListener('resize', function(){
    init();
    clickAreaSize();
    
});


function scrollSlide(){
    console.log(count);
    slider__squere.style.transform = 'translate(-'+ count * width + 'px';
}

// автоматическая прокрутка
setInterval(()=>{
    if(flgClick == false && flgMouseUp == false ){
        nextSlide();
    }
    return;

} ,8000);


// метод адаптации зон клика 
function clickAreaSize(){
    heightSlider = window.getComputedStyle(slider);
    clickArea.forEach(area =>{
        area.style.width = width/2 + 'px';
        area.style.height = heightSlider.height ;
        
        area.addEventListener('mouseover',()=>{
            flgMouseUp = true;
        })
            area.addEventListener('mouseout',()=>{
            flgMouseUp = false;
            flgClick = false;
        })
    });

    // content__top.forEach(content =>{
    //     content.style.height = heightSlider.height;
    // })
}



// перемещение слайдов вперед
function nextSlide(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    scrollSlide();
    paginationActive(count);
    slideActive(count);
}

// перемещение слайдов назад
function returnSlide(){
    count--;
    if(count <= 0){
        count = 0;
    }
    scrollSlide();
    paginationActive(count);
    slideActive(count);
}

clickAreaRight.addEventListener('click',function () {
    nextSlide();
    flgClick = true;
});

clickAreaLeft.addEventListener('click',function (){
    returnSlide();
    flgClick = true;
});


function paginationActive(countPag){
    slider__pagination.forEach(pag =>{
        pag.classList.remove('slider__pagination-btn_active');
    });
    slider__pagination[countPag].classList.add('slider__pagination-btn_active');
}

function slideActive(countSlide){
    document.querySelectorAll('.slider .slider__squere div').forEach(div =>{
        div.classList.remove('slide_active');
    });
    document.querySelectorAll('.slider .slider__squere div')[countSlide].classList.add('slide_active');
}

slider__pagination.forEach((pag,countPag) =>{
    pag.addEventListener('click',()=>{
        count = countPag;
        flgClick = true;
        scrollSlide();
        slideActive(countPag);
        paginationActive(countPag);
    })
    pag.addEventListener('mouseover',()=>{
            flgMouseUp = true;
        })
    pag.addEventListener('mouseout',()=>{
            flgMouseUp = false;
            flgClick = false;
    })
});



