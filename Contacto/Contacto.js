
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


//validacion de campo
const formulario = document.getElementById('formulario')
const texarea = document.querySelectorAll('#formulario textarea');
const envioref = firebase.database().ref('Mensajes')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/,
	mensaje:/^[\Wa-zA-ZÀ-ÿ0-9\s]/
}

const campos = {
	nombre: false,
	correo: false,
    mensaje:false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;

        case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}




const validarCampo = (expresion, textarea, campo) => {

	if(expresion.test(textarea.value)){
		
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;

	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


texarea.forEach((textarea) => {
	textarea.addEventListener('keyup', validarFormulario);
	textarea.addEventListener('blur', validarFormulario);
});


  formulario.addEventListener('submit',(e)=>{
	e.preventDefault()

	if(nombre.value && correo.value && mensaje.value){
		nombre = formulario ['nombre'].value
		correo = formulario ['correo'].value
		mensaje = formulario ['mensaje'].value
		
		const mensajeria = envioref.push()
		mensajeria.set({
		Uid:mensajeria.path.pieces_[1],
		Nombre:nombre,
		Correo:correo,
		Mensaje:mensaje})
	}

	  if( campos.nombre && campos.correo && campos.mensaje){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 2000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
		location.reload()
	}
	
	else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 2000);
	}
  });
