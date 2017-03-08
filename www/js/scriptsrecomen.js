$(document).ready(function() {  
	//recoger eventos de los a de recomendación y poner clase noEzno
	navegaRecomen();  

	//Cambia la imagen de Fondo dependiendo de la estación que estamos
	cambiarImagenFondo(1);
	
	//No mostrar ciertos contenidos, que se dejan por motivos SEO
	$('.ezbegi').addClass('noEzno');
});

window.onload = function() {

	//menu tipo pestaña
	menuPestana();
	
	//recoger eventos del menú horizontal
	menuClick();
	
	//recoger eventos de los a de recomendación y poner clase noEzno
	navegaRecomen();
}



