'use strict'
// ------ объявление переменных ------
const btn_menu = document.querySelector('.menu__button'),
    menu_header = document.querySelector('.menu__list'),
    choose_car_btn = document.querySelectorAll('.choose-car__menu-item a'),

    choose_car_catalog = document.querySelectorAll('.choose-car__menu__catalog');                              

let count = 0;

// присваиваем класс для активации меню шапки 
btn_menu.addEventListener('click',function(){
    console.log("аошрвора");
    menu_header.classList.toggle('menu__header-active');
    btn_menu.classList.toggle('menu__button-active');
    document.querySelector('body').classList.toggle('body-hidden')
})



choose_car_btn.forEach(function(btn,indexBtn) {
    choose_car_catalog.forEach(function(catalog){
        btn.addEventListener('click' , () =>{

            catalog.classList.remove('choose-car__menu__catalog-active')
            deleteClass(); 
            choose_car_catalog[indexBtn].classList.add('choose-car__menu__catalog-active')
            choose_car_btn[indexBtn].classList.add('choose-car__menu-link-active')
    })
    })
    
});
function deleteClass(){
    choose_car_btn.forEach(function(element) {
        element.classList.remove('choose-car__menu-link-active') 
    
});
}