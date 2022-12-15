
/*envento de la amburguesa*/
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", ()=>{
    toggle.classList.toggle("active");
});


/*evento del menu resposive*/
const navtoggle = document.querySelector(".nav-toggle")
const navmenu = document.querySelector(".nav-menu")

navtoggle.addEventListener("click",()=>{
    navmenu.classList.toggle("visible")
});


/*evento del boton sol y luna*/
const btnSwitch = document.querySelector("#switch");
btnSwitch.addEventListener("click",()=>{
document.body.classList.toggle("dark");
btnSwitch.classList.toggle("active");

});


//evento de submenu de redes
const btnsubmenuredes = document.querySelector(".btn-submenu-redes")
const submenuredes = document.querySelector(".submenu-redes")

btnsubmenuredes.addEventListener("click",()=>{
    submenuredes.classList.toggle("abrir-submenu")
});


//evento de submenu idiomas
const btnsubmenuidiomas = document.querySelector(".btn-submenu-idiomas")
const submenuidiomas = document.querySelector(".submenu-idiomas")

btnsubmenuidiomas.addEventListener("click",()=>{
    submenuidiomas.classList.toggle("abrir-idiomas")
});
