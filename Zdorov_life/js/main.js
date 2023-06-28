const textbox_search = document.querySelector(".header__middle__form-search"),
    placeholder_search = document.querySelector(".header__middle__form-placeholder");





textbox_search.addEventListener('input',() =>{
    placeholder_search.classList.add('form-placeholder-off')
})
textbox_search.addEventListener('blur',function(){
    var inputValue = event.target.value;
    if(inputValue.trim() == ''){
        placeholder_search.classList.remove('form-placeholder-off')
    }
    
})


