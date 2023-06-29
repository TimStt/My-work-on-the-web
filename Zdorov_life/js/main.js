// ------ объявление переменных ------
const textbox_search = document.querySelector(".header__middle__form-search"),
    placeholder_search = document.querySelector(".header__middle__form-placeholder"),
    images = document.querySelectorAll('.adversting__banners__slider .adversting__banners__slider-squere img'),
    slider__squere = document.querySelector('.adversting__banners__slider-squere'),
    nextSlide = document.querySelector('adversting__banners__slider-btnNext'),
    returnSlide = document.querySelector('adversting__banners__slider-btnReturn');


    let count = 0;
textbox_search.addEventListener('input',() =>{
    placeholder_search.classList.add('form-placeholder-off')
})
textbox_search.addEventListener('blur',function(){
    var inputValue = event.target.value;
    if(inputValue.trim() == ''){
        placeholder_search.classList.remove('form-placeholder-off')
    }
    
})


function init(){
    width =  document.querySelector('.adversting__banners__slider').offsetWidth;
    slider__squere.style.width = width*images.length+ 'px';
    images.forEach(item =>{
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    scrollSlide()
}

nextSlide.addEventListener('click', () => {
    count++;
    if(count == 4){
        count = 0;
        nextSlide.classList.add('btnSlideOff');
        return
    }
    else{
        nextSlide.classList.remove('btnSlideOff');
        scrollSlide()
    }
    
})

returnSlide.addEventListener('click', () => {
    count--;
    if(count < 0){
        count = 0;
    }
    scrollSlide()
})


