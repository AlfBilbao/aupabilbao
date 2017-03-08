const MAXIMO = 101;
const TIEMPO = 3000;
var usados = new Array();
var numMax = MAXIMO;
var numMin = 1;
var pasafoto;
var estoyFuera=true;
var fotoVisor=1;

$(document).ready(function() {  
	//poner la clase noEzno a secFotosTexto
	$("#secFotosTexto").addClass('noEzno');
	
	//Cambia la imagen de Fondo dependiendo de la estación que estamos
	cambiarImagenFondo(2);

	//No mostrar ciertos contenidos, que se dejan por motivos SEO
	$('.ezbegi').addClass('noEzno');
});


$(function (){

	//invocamos al visor de fotos
	visorFotos();
	
	//menu tipo pestaña
	menuPestana();
	
	//recoger eventos del menú horizontal
	menuClick();
});



