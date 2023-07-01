// ------ объявление переменных ------
const textbox_search = document.querySelector(".header__middle__form-search"),
    placeholder_search = document.querySelector(".header__middle__form-placeholder"),
    images = document.querySelectorAll('.adversting__banners__slider .adversting__banners__slider-squere img'),
    slider__squere = document.querySelector('.adversting__banners__slider-squere'),
    nextSlide = document.querySelector('.adversting__banners__slider-btnNext'),
    returnSlide = document.querySelector('.adversting__banners__slider-btnReturn'),
    slider__pagination_btn = document.querySelectorAll('.adversting__banners__slider-pagination button'),
    adversting__banners__slider = document.querySelector('.adversting__banners__slider');

    let count = 0;

    
textbox_search.addEventListener('input',() =>{
    placeholder_search.classList.add('form-placeholder-off')
})
textbox_search.addEventListener('blur',function(event){
    var inputValue = event.target.value;
    if(inputValue.trim() == ''){
        placeholder_search.classList.remove('form-placeholder-off')
    }
    
})


function init(){
    width =  adversting__banners__slider.offsetWidth;
    slider__squere.style.width = width*images.length+ 'px';
    images.forEach(item =>{
        item.style.width = width + 'px';
        item.style.height = 'auto';
        
    });
    scrollSlide(count)
}

nextSlide.addEventListener('click', function () {
    count++;
    if(count == images.length-1){
        scrollSlide(count)
        pag_active(count)
        return nextSlide.classList.add('btnSlideOff');
    }
    else{
        scrollSlide(count)
        pag_active(count)
        return returnSlide.classList.remove('btnSlideOff');
    }
    
})

returnSlide.addEventListener('click', function (){
    count--;
    if(count <= 0){
        scrollSlide(count)
        pag_active(count)
        return returnSlide.classList.add('btnSlideOff');
    }
    else {
        scrollSlide(count)
        pag_active(count)
        return nextSlide.classList.remove('btnSlideOff');
    }
    
})

function scrollSlide(count){
    slider__squere.style.transform = 'translate(-'+ count * width + 'px';
}

// адаптируем зоны клика слайдера при изменении разамеров страницы
window.addEventListener('load' , () => init()) 
window.addEventListener('resize', () => init())
window.addEventListener('pageshows', () => init())
window.addEventListener('beforeunload',() => init())




slider__pagination_btn.forEach(function(element ,index){
    element.addEventListener('click', ()=>{
        pag_active(index)
        
        scrollSlide(index)
    })
})

function pag_active(count){
    slider__pagination_btn.forEach(function(element ,index){
        slider__pagination_btn[index].classList.remove('slider__pagination-btn_active')
    })
    slider__pagination_btn[count].classList.add('slider__pagination-btn_active')
}
