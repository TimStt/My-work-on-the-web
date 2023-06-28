'use strict'
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
    slider__pagination= document.querySelectorAll('.slider__pagination button'),
    btn_menu = document.querySelector('.menu__button'),
    menu_header = document.querySelector('.menu__list'),
    header = document.querySelector('.header');                                   

let flgMouseUp = false;
let flgClick = false;
let sliderActiv = false;

let heightSlider;

//счетчик
let count = 0;
let width;

// метод адаптации самого слайдера 
function init(){
    width =  document.querySelector('.slider').offsetWidth;
    slider__squere.style.width = width*images.length+ 'px';
    images.forEach(item =>{
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    scrollSlide()
    if(width <= 890){
        images[0].src = "img/img-slider-bmw-mobile.jpg";
        images[1].src = "img/img-slider-jeep-mobile.jpg";
        images[2].src = "img/img-slider-crown-mobile.jpg";
        images[3].src = "img/img-slider-santafe-mobile.jpg";
        clickAreaSize();
        
    }
    else{
        images[0].src = "img/img-slider-bmw.jpg";
        images[1].src = "img/img-slider-jeep.jpg";
        images[2].src = "img/img-slider-crown.jpg";
        images[3].src = "img/img-slider-santafe.jpg";
    }
    heightSlider =  document.querySelector('.slider').offsetHeight;
    
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
window.addEventListener('pageshows', function(){
    init();
    clickAreaSize();
});
window.addEventListener('beforeunload', function(){
    console.log("рвпрпвпр");
    clickAreaSize();  
    init();
});

function scrollSlide(){
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
    
    localStorage.setItem('myHeght',heightSlider)
    let storeHeight = localStorage.getItem('myHeght')
    clickArea.forEach(area =>{
        console.log(width);
        console.log(storeHeight);

        area.style.width = width/2 + 'px';
        area.style.height = storeHeight + 'px' ;
        
        area.addEventListener('mouseover',()=>{
            flgMouseUp = true;
        })
            area.addEventListener('mouseout',()=>{
            flgMouseUp = false;
            flgClick = false;
        })
    });
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

// присваиваем класс для активации меню шапки 

btn_menu.addEventListener('click',function(){
    console.log("аошрвора");
    menu_header.classList.toggle('menu__header-active');
    btn_menu.classList.toggle('menu__button-active');
    document.querySelector('body').classList.toggle('body-hidden')
    // header.classList.toggle('header-active');

})
// window.onload = function() {
//     heightSlider = parseInt(slider.height);
//     const observer = new ResizeObserver(entries =>{
//     for(let entry of entries ){
//         const target = entry.target;
//         heightSlider = target.getBoundingClientRect().height;
//     }
    
// });
// observer.observe(slider);
// }
