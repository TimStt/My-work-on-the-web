const btnClick = document.getElementById('btn-hero-area')
const formLogin = document.getElementById('form-login')
    btnClick.onclick = function () {
        formLogin.scrollIntoView({ behavior: "smooth" });
    };