
// при вызове метода страница плавно скролиться вниз к форме отправки

const btnForm = document.getElementById('btn-hero-area');
const formLogin = document.getElementById('form-login');
btnForm.onclick = function () {
    formLogin.scrollIntoView({ behavior: "smooth" });
};

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