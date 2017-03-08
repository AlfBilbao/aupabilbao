$(document).ready(function() {  
	//Cambia la imagen de Fondo dependiendo de la estación que estamos
	cambiarImagenFondo(1);
});

$(function (){
	//menu tipo pestaña
	menuPestana();
	
	//recoger eventos del menú horizontal
	menuClick();
	
	$('.rss ul li a').on('click', function(e){
		e.preventDefault();
		var nom='';
		var id=$(this).data('id');
		if(id==1) nom="agendabilbao";
		else if(id==2) nom="noticiasbilbao";
		else if(id==3) nom="avisosbilbao";
		else if(id==4) nom="bizkaia";
		else if(id==5) nom="gobiernovasco";		
		else if(id==6) nom="elcorreo";
		else if(id==7) nom="deia";
		else if(id==8) nom="gara";		
		else if(id==9) nom="berria";
		else if(id==10) nom="argia";
		else if(id==11) nom="elpais";
		else if(id==12) nom="turismobilbao";
		else if(id==13) nom="turismoagendaeuskadi";
		else if(id==14) nom="enterat";
		llamadaAjax('llamadas/'+nom+'.php',"",pintarRss,'xml');
	});
	
	$('body').on('click','#resultado li',function(){
		window.open($(this).find('a').attr('href'),$(this).find('a').attr('target'));
	});
});
