var sectionDondeEstoy = 0;

$(document).ready(function() {  

});

window.onload = function() {
	//poner la clase noEzno a las secciones que no quiero que se vean
	// no se pone en el html por temas de SEO
	quitarContenido(true);

	//Cambia la imagen de Fondo dependiendo de la estación que estamos
	cambiarImagenFondo(1);

	//Habilitar la navegabilidad
	for(var i = 0; i <= 6; i++){
		navegacion(i);
	}
	
	//navegacion();
	
	//cuando se cambia de tamaño la pantalla
	$(window).resize(function() {
		setTimeout(	pintaLogotipo(), 200);
	});
	
	//cuando se realiza un scroll
	$(window).scroll(function() {
		setTimeout(	pintaUp(), 200);
	});

	//menu tipo pestaña
	menuPestana();
	
	//recoger eventos del menú horizontal
	menuClick()
}