function navegacion(iId){

	//for(var iId = 0; iId <= 6; iId++){
		for(var j=0; j<=1; j++){
			var texto = "men";
			texto += (j==0)?"u":"fij";
			
			$("#"+texto+iId).on('click', function(e){
				e.preventDefault();
				var texto = tituloH3(iId);
				
				if ($(this).closest('#menuini').length){
					efectocajas(this);
					setTimeout( function(){jarrai(iId,texto);}, 600 );
				}else{
					jarrai(iId,texto);				
				}
			});
		}	
	//}	
	return false;
}

function tituloH3(iId){
	var texto="";
	switch(iId){
		case 0:	texto = "";	break;		
		case 1:	texto = "Información";	break;
		case 2:	texto = "Presentación";	break;
		case 3:	texto = "Experiencia";	break;
		case 4:	texto = "Conocimientos"; break;
		case 5:	texto = "Contacto";	break;
		case 6:	texto = "Aficiones"; break;
		case 7:	texto = "Logotipos"; break;
		default: texto = "error"; break;
	}
	return texto;
}

function jarrai(iId,texto){
	ponerActive(iId);
	pintaSection(iId,texto);
	setTimeout(pintaFondo() , 600 );
}

function efectocajas(ele){
	var elepadre = ele.parentNode.parentNode;

	ponerClase("nuevoStilo",elepadre);
	ponerClase("nuevoStilo",ele);
	
	setTimeout( function(){quitaEstilos(elepadre,ele);}, 1000 );
}

function quitaEstilos(elepadre,ele){
	quitarClase("nuevoStilo", elepadre);
	quitarClase("nuevoStilo", ele);
}

function hasClass(clase, elemento){
	var patron = new RegExp("\\b" + clase +"\\b");
	//Miramos si tiene el atributo Class, en caso contrario retorna false
	//y comprobamos si la clase que buscamos esta dentro
	return (patron.test(elemento.className))
}

function quitarClase(clase,elemento){
	var patron = new RegExp("\\b" + clase +"\\b");
	elemento.className = elemento.className.replace(patron,'');
}

function ponerClase(clase,elemento){
	if (! hasClass(clase,elemento)) {
		if (elemento.className){
			elemento.className += " " + clase;
		}else{
			elemento.className += clase;
		}
	}
}

function pintaSection(iId,titulo){

	if( sectionDondeEstoy != iId){

		//primero comprobamos si ya tenemos la clase noEzno, 
		//en caso contrario la ponemos al logo y quitamos al menufijo
		var ele = document.getElementById("logotipo");
		if( ! hasClass("noEzno", ele) ){
			ponerClase("noEzno",ele);

			ele = document.getElementById("menufijo");
			quitarClase("noEzno",ele);
		}else{
			if (iId == 0){
				quitarClase("noEzno",ele);
				ele = document.getElementById("menufijo");
				ponerClase("noEzno",ele);
			}
		}

		//Compruebo si vengo de la opción 1 o si voy a la opción 1
		if(sectionDondeEstoy == 1){
			quitarContenido(false);
		}else if(iId == 1){
			mostrarContenido();
		}
		
		if( (sectionDondeEstoy == 0) || (iId != 1) ){
			//Donde estaba antes de pulsar nueva opción, pongo la clase noEzno
			ele = document.getElementById("sec" + sectionDondeEstoy);
			ponerClase("noEzno",ele);

		}

		//memorizamos donde nos encotramos y le quitamos la clase noEzno para que se visualice
		sectionDondeEstoy = iId;
		ele = document.getElementById("sec" + sectionDondeEstoy);
		quitarClase("noEzno",ele);
		pintaLogotipo();

		if(iId == 1){
			creaTodosLosTitulos();
		}else{
			creaTitulo(ele,titulo,iId);
		}

		//voy al inicio de la página
		window.scrollTo(0,0);
	}
}

function creaTodosLosTitulos(){
	for(var i=1; i <= 7; i++){creaTitulo(document.getElementById("sec" + i),tituloH3(i),i);}
}

function creaTitulo(nodoEle, texto, iId) {
	var textoins = texto || " ";

	//Creamos esta estructura DOM
	//<h3 class="titusection"> valor de textoins </h3>

	//Siempre borramos primero por si ya existe
	borraTitulo(nodoEle);

	var nodoH3 = document.createElement('h3');
	nodoH3.className = "titusection";
	nodoH3.id = "tit" + iId;

	if (textoins){
		nodoH3.appendChild(document.createTextNode(textoins));
	}
	
	/*antes de añadir hay que saber si hay algo en la section, si hay se inserta*/
	var arra = nodoEle.getElementsByTagName("*");
	if(arra.length > 0){
		arra[0].parentNode.insertBefore(nodoH3,arra[0]);
	}else{
		nodoEle.appendChild(nodoH3);	
	}
	nodoH3.style.cursor = "pointer";

	nodoH3.onclick = function()
	{
		cajaModal("sec" + iId);
		return false;
	}

	return nodoH3;
}

function borraTitulo(nodoEle){
	var arra = getElementsByClass("titusection",'h3',nodoEle);
	var narra = arra.length;
	
	for (var i = 0; i < narra; i++) {
		nodoEle.removeChild(arra[i]);
	}

	return false;
}

//Nuestra propia function getElementsByClassName
function getElementsByClass(clase, elemento, parent) {
	var elemento = elemento || "*";
	var parent = parent || document;
	var ArrayReto = new Array();							//Array que guarda los elementos encontrados
	var ArrayNodo = parent.getElementsByTagName(elemento);	//Array que contiene todos los Nodos
	var nNodos = ArrayNodo.length;
		
	for (var i = 0; i < nNodos; i++) {
		if (hasClass(clase, ArrayNodo[i])){
			ArrayReto.push(ArrayNodo[i]);					//añadimos el resultado a la matriz de resultados
		}
	}
	return ArrayReto;										//retornamos el resultado
}

function cambiarImagenFondo(tipo){
	var texto="";
	if(tipo ==1){
		var fecha = new Date();
		var dia = fecha.getDate();
		var mes = fecha.getMonth() + 1;
		texto = "inicial";

		switch(estacion(dia,mes)){	
		case 1: texto += "primavera"; break;
		case 2:	texto += "verano"; break;
		case 3:	texto += "otono"; break;	
		case 4:	texto += "invierno"; break;		
		default: texto = ""; break;
		}
	}else if(tipo==2){texto = "fotos";
	}else if(tipo==3){texto = "construccion";}

	var ancho = document.documentElement.clientWidth;
	var alto = document.body.scrollHeight;

	$('#page-body').css({
		'backgroundImage': 'url(http://www.aupabilbao.eu/imagenes/fondo'+texto+'.jpg)',
		'backgroundRepeat': 'no-repeat',
		'background-size': ancho + 'px ' + alto + 'px',
		'background-position': 'top center'
	});	

	window.onresize = function(){pintaFondo();}
}

function pintaFondo(){
	var ancho = document.documentElement.clientWidth;
	var alto = document.body.scrollHeight;
	$('#page-body').css({'background-size': ancho + 'px ' + alto + 'px'});	
}

function enRango(dHoy, mHoy, dIni, mIni, dFin, mFin){ 
	var bRes = true; 
	bRes = bRes && ((mHoy > mIni) || ((mHoy == mIni) && (dHoy >= dIni))); 
	bRes = bRes && ((mHoy < mFin) || ((mHoy == mFin) && (dHoy <= dFin))); 
	return bRes; 
} 

function estacion(dia, mes){ 
	var nReto;
	if(enRango(dia, mes, 21, 3, 20, 6)){nReto = 1;}
	else if(enRango(dia, mes, 21, 6, 20, 9)){nReto = 2;}
	else if(enRango(dia, mes, 21, 9, 20, 12)){nReto = 3;}
	else {nReto = 4;}
	return nReto; 
} 

function quitarContenido(todo){
	if(todo){
		quitarContenidoAux("menufijo");
		quitarContenidoAux("divup");
	}
	quitarContenidoAux("sec1");
	quitarContenidoAux("sec2");
	quitarContenidoAux("sec3");
	quitarContenidoAux("sec4");
	quitarContenidoAux("sec5");
	quitarContenidoAux("sec6");
	quitarContenidoAux("sec7");
	quitarContenidoAux("navegadock");
	$('.ezbegi').addClass('noEzno');
}

function quitarContenidoAux(texto){
	var ele = document.getElementById(texto);
	var clase = "noEzno";
	if(!hasClass(clase,ele)){ponerClase(clase,ele);}
}

function mostrarContenido(){
	mostrarContenidoAux("sec1");
	mostrarContenidoAux("sec2");
	mostrarContenidoAux("sec3");
	mostrarContenidoAux("sec4");
	mostrarContenidoAux("sec5");
	mostrarContenidoAux("sec6");
	mostrarContenidoAux("sec7");
	mostrarContenidoAux("navegadock");
}

function mostrarContenidoAux(texto){
	var ele = document.getElementById(texto);
	var clase = "noEzno";
	quitarClase(clase,ele);
}

function ponerActive(iId){
	if( iId > 0 && iId <=6){
		var texto = "menfij";
		var clase = "active";		
		
		//quitamos active a todas las opciones de menú
		for(var i=1; i<6; i++){
			if(i!=3){
				var ele = document.getElementById(texto + i);
				if(hasClass(clase, ele)){quitarClase(clase,ele);}
			}
		}

		//quitamos active a todas las opciones de menú
		for(var i=3; i<=6; i+=3){
			var ele = $('#' + texto + i);
			ele = $(ele).parentsUntil("div","li");
			if(ele.hasClass(clase)){ele.removeClass(clase);}
		}

		//ponemos el active a la opción de menú seleccionada
		if(iId==3 || iId==6){
			var ele = $('#' + texto + iId);
			ele = $(ele).parentsUntil("div","li");
			if(!ele.hasClass(clase)){ele.addClass(clase);}
		}else{
			//ponemos el active a la opción de menú seleccionada
			var ele = document.getElementById(texto + iId);
			ponerClase(clase,ele);
		}

		// pintamos el menú fijo según circunstancias de pantalla
		pintaMenuFijo();
	}
}

function pintaMenuFijo(){
	//si estamos en resolucion 767px o menor y en menu superior a 0, 
	//simulo pulsación boton barra fija
	if((sectionDondeEstoy != 0) && (window.innerWidth <= 767)){
		$('#boton').click();
	}
}

function pintaLogotipo(){
	var ele = document.getElementById("logotipo");
	if(sectionDondeEstoy == 0){
		ele.style.display = "";
		/*//si estamos en resolucion 700px o menor no muestro el logotipo
		if(window.innerWidth <= 700){ele.style.display = "none";}
		else{ele.style.display = "";}*/
	}else{ele.style.display = "none";}
}

var menuPestana = function (){
	var container = $('#pestana-contenedor');
	var content = $('#pestana-content-in');
	var pestana = $('#pestana-click');

	$(container).css('left', '-210px');
	$(content).hide();
	
	$(pestana).on('click', function(){
		if($(container).hasClass('open')){
			$(content).fadeOut(500, function (){
				$(container).stop().animate(
				{
					'left': '-210px'
				}, 500, function () {
					$(container).removeClass('open');
					$(pestana).find('img').attr('src','imagenes/Next.png');
					$(pestana).find('img').attr('alt','icono de apertura menú');
				});
			});
			
		}else{
			$(container).stop().animate(
				{
					'left': '0'
				}, 500, function (){
					$(pestana).find('img').attr('src','imagenes/Prev.png');
					$(pestana).find('img').attr('alt','icono de cierre menú');
					$(content).fadeIn(500, function (){
						$(container).addClass('open');
					});
				}
			);
		}
	});
}

function getScrollY() {
  var scrOfY = 0;
  if (typeof (window.pageYOffset) == 'number') {
    //Netscape compatible
    scrOfY = window.pageYOffset;
  }else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
    //DOM compatible
    scrOfY = document.body.scrollTop;
  }else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
    //Normas IE6 modo compatible
    scrOfY = document.documentElement.scrollTop;
  }
  return scrOfY;
}

function pintaUp(){
	var elemento = document.getElementById("divup");	
	if(sectionDondeEstoy > 1){
		if(getScrollY() > 10){quitarClase("noEzno",elemento);}
		else{ponerClase("noEzno",elemento);}		
	}else{ponerClase("noEzno",elemento);}
}

$('#menunavegar').on('click','a[href*=#]', function(e){
	if($(this).attr("id") == "iniup"){
		$(this).attr("href", "#sec" + sectionDondeEstoy);
	}
	var $target = $(this.hash);
	$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	
	if ($target.length) {
		$('html,body').stop().animate({scrollTop: ($target.offset().top - 75)}, 1000, dameEfecto());
		e.preventDefault();
	}
});

function dameEfecto(){
	var nEfect = new Array("InSine","OutSine","InOutSine","InQuad","OutQuad","InOutQuad","InCubic","OutCubic", "InOutCubic","InQuart","OutQuart","InOutQuart","InQuint","OutQuint","InOutQuint","InExpo","OutExpo","InOutExpo", "InCirc","OutCirc","InOutCirc","InBack","OutBack","InOutBack","InElastic","OutElastic","InOutElastic","InBounce","OutBounce","InOutBounce")
	return "ease" + nEfect[getRandomInt(0, nEfect.length-1)];
}

//Retorna un random entero entre un mínimo y un máximo
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function cajaModal(texto){
	this.blur();
	var elediv;
	var nodoBody = document.getElementsByTagName("body")[0];
	var nodoPrimerHijo = nodoBody.getElementsByTagName("*")[0];

	//Insertamos Primero el Marco (div)
	var nodoDiv = document.createElement('div');
	nodoDiv.id = "modalMarco";
	nodoDiv.style.top = "0";
	nodoDiv.style.left = "0";
	nodoDiv.style.position = "fixed";
	nodoDiv.style.width = "100%";
	nodoDiv.style.height = "100%";
	nodoDiv.style.background = "#000";
	nodoDiv.style.opacity = "0.0";
	nodoDiv.style.zIndex = "9999";
	var nodoNuevoPrimerHijo = nodoBody.insertBefore(nodoDiv,nodoPrimerHijo);	
	
	//Insertamos el div del mensaje y botón
	var nodoDiv2 = document.createElement('div');
	nodoDiv2.id = "modalMensaje";
	nodoDiv2.style.position = "fixed";
	nodoDiv2.style.top = "0%";
	nodoDiv2.style.left = "50%";
	nodoDiv2.style.background = "#EEF3E2";	
	nodoDiv2.style.zIndex = "10000";
	nodoDiv2.style.borderStyle = "solid";
	nodoDiv2.style.borderWidth = "5px";
	nodoDiv2.style.borderColor = "#C1CDCD";
	nodoDiv2.style.borderRadius = "8px";
	nodoDiv2.style.overflow = "hidden";
	var nodoSegundoHijo = nodoBody.insertBefore(nodoDiv2,nodoPrimerHijo);

	var nodoA = document.createElement('a');
	nodoA.id = "cerrarModalMensaje";
	nodoA.href = "";
	nodoA.title = "cerrar ventana modal";
	nodoDiv2.appendChild(nodoA);
	nodoA.appendChild(document.createTextNode("X"));
	nodoA.style.textAlign = "center";
	nodoA.style.display = "block";
	nodoA.style.padding = "5px";
	nodoA.style.backgroundColor = "#53868B";	
	nodoA.style.fontWeight = "normal";
	nodoA.style.color = "#FFFFF2";	
	nodoA.style.textDecoration = "none";
	nodoA.style.position = "fixed";
	nodoA.style.borderRadius = "5px";

	nodoA.onmouseover = function() {
		this.style.backgroundColor = "#8B7D6B";
		this.style.fontWeight = "bold";
	}
	
	nodoA.onmouseout = function() {
		this.style.backgroundColor = "#53868B";
		this.style.fontWeight = "normal";
	}

	var nodoDiv3 = document.createElement('div');
	nodoDiv2.appendChild(nodoDiv3);
	nodoDiv3.style.padding = "15px";
	var tipomodal;

	if(typeof(texto) == "string"){
		//Insertamos el padre del Div mensaje
		var nodoS = document.createElement('section');
		var nodoaClonar = document.getElementById(texto);
		nodoS.appendChild(nodoaClonar.cloneNode(true));
		getElementsByClass(texto,'section',nodoS)[0].setAttribute("id","secX");
		nodoDiv3.appendChild(nodoS);
		nodoDiv3.style.overflow = "auto";
		nodoDiv2.style.maxHeight = "75%";		
		nodoDiv2.style.minHeight = "30%";
		nodoDiv2.style.maxWidth = "50%";
		nodoDiv2.style.paddingTop = "10px";
		nodoDiv2.style.paddingBottom = "10px";		
		tipomodal=false;
	}else{
		$(texto).clone(true).appendTo($(nodoDiv3)).attr('width','100%').attr('height','auto');
		nodoDiv2.style.background = "";	
		ponerClase("transparente",nodoDiv2);
		nodoDiv2.style.overflow = "";
		elediv = creaTextos($(nodoDiv2),-1);
		tipomodal=true;
	}
	
	nodoDiv2.style.height = "auto";

	setTimeout( medirTamanio, 950 );
	function medirTamanio(){
		var ancho = tamVentana()[0];
		var alto = tamVentana()[1];
		var menos = 0;
		$(nodoDiv3).css('height', ($(nodoDiv2).height()  - 1) + "px");		

		if(tipomodal){
			if(ancho < 768){$("#modalDatos .text-right").css('display','none');
							$("#modalDatos .text-left").css('padding-left','25px');
			}else{			$("#modalDatos .text-right").css('display','');
							$("#modalDatos .text-left").css('padding-left','');
			}
							
			if(ancho > 650){nodoDiv2.style.width = '570px'; nodoDiv2.style.height = '570px';}
			else if(ancho > 550){nodoDiv2.style.width = '470px'; nodoDiv2.style.height = '470px';}
			else if(ancho > 450){nodoDiv2.style.width = '370px'; nodoDiv2.style.height = '370px';}
			else if(ancho > 350){nodoDiv2.style.width = '270px'; nodoDiv2.style.height = '270px';}
			else if(ancho > 300){nodoDiv2.style.width = '220px'; nodoDiv2.style.height = '220px';}
			else if(ancho > 250){nodoDiv2.style.width = '170px'; nodoDiv2.style.height = '170px';}
			else{nodoDiv2.style.width = '100px'; nodoDiv2.style.height = '100px';}
			menos = 24;
			posicionaTextos($(nodoDiv2),$(elediv));
		}

		$(nodoDiv2).css({
			marginLeft: "-" + ($(nodoDiv2).width()/2) + "px",
			marginTop: "-" + (($(nodoDiv2).height()/2) + menos) + "px",
			top:"50%",
			left:"50%"
		});
		
		nodoA.style.top = nodoDiv2.offsetTop;
		if(!tipomodal){nodoA.style.marginTop = "-10px";}
		nodoA.style.left = nodoDiv2.offsetLeft;
	}
	
	var fade = setInterval(fadeIn, 75);
	function fadeIn(){
		nodoDiv.style.opacity = parseFloat(nodoDiv.style.opacity) + 0.1;
		if(parseFloat(nodoDiv.style.opacity) == 0.7){clearInterval(fade);}
	}
	
	var caer = setInterval(caidaTop, 2);
	function caidaTop(){
		var str = nodoDiv2.style.top;
		var num = parseInt(str.substring(0, str.length-1));
		nodoDiv2.style.top = ( num + 1 ) + "%";
		if(num >= 50){clearInterval(caer);}
	}
		
	nodoNuevoPrimerHijo.onclick = function(){CajaModalAuxCerrar();}	

	nodoA.onclick = function(){
		CajaModalAuxCerrar();
		return false;
	}

	document.onkeyup = function(elEvento){
		var evento = elEvento || window.event;
		if(evento.keyCode == 27){CajaModalAuxCerrar();}
	}

	window.onresize = function(){setTimeout(	medirTamanio(), 200);}
	
	function CajaModalAuxCerrar(){
		if(nodoDiv){
			function subirTop(){
				if(nodoDiv2){
					var num = parseInt(nodoDiv2.style.top);
					nodoDiv2.style.top = ( num - 1 ) + "%";
				}else{num = 0;}

				if(num == 0){clearInterval(subir);}
			}
			
			function fadeOut(){
				nodoDiv.style.opacity = parseFloat(nodoDiv.style.opacity) - 0.1;
				if(parseFloat(nodoDiv.style.opacity) < 0.2){
					clearInterval(fade2);
					nodoDiv.parentNode.removeChild(nodoDiv);
					nodoDiv2.parentNode.removeChild(nodoDiv2);
					if(tipomodal){$(elediv).remove();}
					nodoDiv = null;
					nodoDiv2 = null;
					document.onkeyup = null;
					window.onresize = null;
				}
			}	
			var subir = setInterval(subirTop, 2);
			var fade2 = setInterval(fadeOut,80);
		}
	}
}

function posicionaTextos(nodoDiv2, elediv){
	$(elediv).css({
		position: "absolute",
		bottom: "-47px",
		left: "15px",
		padding: "1px",
		color: "#000",
		background: "#EEF3E2",
		borderStyle: "solid",
		borderWidth: "4px",
		borderColor: "#C1CDCD",
		borderRadius: "4px",
		zIndex: "10001",
		"font-size": "0.8em",
		width: $(nodoDiv2).find('img').width(),
		height: "auto",
		opacity: ".7"
	});
}

function creaTextos(nodoDiv2, nFoto){
	var numFoto = ceros(nFoto,3);
	if(nFoto==-1){numFoto = $(nodoDiv2).find("img").attr('src').substr(17,3);}
	var nodoP = $("#img" + numFoto);	
	var texto = "<div id='modalDatos' draggable='true'><ul class='row'><li class='col-sm-3 text-right'><strong>Descripción:</strong></li><li class='col-sm-9 cols-xs-12 text-left'>"+$(nodoP).data('descri')+"</ul><ul class='row'><li class='col-sm-3 text-right'><strong>Lugar:</strong></li><li class='col-sm-9 cols-xs-12 text-left'>"+$(nodoP).data('lugar')+" (Año: <strong>"+$(nodoP).data('anio')+"</strong>)</ul><ul class='row'><li class='col-sm-3 text-right'><strong>#hashtag:</strong></li><li id='playhash' class='col-sm-9 cols-xs-12 text-left'>"+$(nodoP).data('hashtag')+"</ul></div>"
	var elediv = $(texto).appendTo($(nodoDiv2))
	$(elediv).find("ul").css({"margin-bottom": "0"});
	return (elediv);
}

function ceros(numero, numceros){
   numero = numero.toString();
   while(numero.length < numceros) numero = "0" + numero;
   return numero;
}

function ordAscModif(a,b){
if (a < b) return -1;
if (a > b) return 1;
if (a = b) return 0;
}

function dimeNumeroDistinto(){
	var repe, num, ilen;
	
	do  { 
		repe = false;
		ilen = usados.length
		
		if (ilen == MAXIMO){
			usados.length = 0;
			ilen = 0;
			numMax = MAXIMO;
			numMin = 1;
		}
		numMin = dameHueco(numMin,numMax,true);
		numMax = dameHueco(numMax,numMin,false);
		num = getRandomInt(numMin, numMax);
		usados.sort(ordAscModif);
		repe = ( jQuery.inArray(num,usados)!=-1 );

	} while (repe != false)
	
	usados.push(num);
	return (num);
}

function dameHueco(numero1,numero2,busMin){
	var reto = numero1;
	var lenU = usados.length;

	if(busMin){
		for(var i=numero1;i<=numero2;i++){
			if(jQuery.inArray(i,usados)==-1){
				reto = i;
				break;
			}
		}
	}else{
		for(var i=numero1;i>=numero2;i--){
			if(jQuery.inArray(i,usados)==-1){
				reto = i;
				break;
			}
		}
	}
	return (reto);
};

function nombreFoto(){
	return ("FotoViajes/Lekuak" + ceros(dimeNumeroDistinto(),3) + ".jpg");
}

function dimeAnimacion(){
	var animacion = ['right','left','top','bottom','rightFade','leftFade','topFade','bottomFade'];
	return animacion[getRandomInt(0, animacion.length-1)];
}

function creaDOMimg(ele){
	//Creamos este DOM en el elemento
	//<img src="FotoViajes/Lekuak001.jpg" alt="">
	if ($(ele).find('img').size() <= 1){
		$(ele).prepend("<img class='fotovisible' src='"+ nombreFoto() +"' alt=''>");
	}
	return ($(ele).find('img:last'));
}

function animaImgAux(imgold, imgnew){
	$(imgold).hide().css({
		'z-index'   : '1',
		'left'      : '0',
		'top'       : '0',
		'opacity'   : '1'
	});
	$(imgnew).css('z-index','997');
	setTimeout( function(){$(imgold).remove();}, 475);
}

function animaImg(ele){
	var anim = dimeAnimacion();
	var animSpeed = 450;
	var easeType = dameEfecto();
	var imgnew = creaDOMimg($(ele));
	var imgold = $(ele).find('img:eq(1)');

	switch(anim){
		case 'right':
			$(imgold).animate({'left':$(imgold).width()+'px'}, 
			animSpeed, easeType, function(){animaImgAux(imgold,imgnew);});
		break;
		
		case 'left':
			$(imgold).animate({'left':-$(imgold).width()+'px'},
			animSpeed, easeType, function(){animaImgAux(imgold,imgnew);});
		break;
		
		case 'top':
			$(imgold).animate({'top':-$(imgold).height()+'px'},
			animSpeed, easeType, function(){animaImgAux(imgold,imgnew);});
		break;

		case 'bottom':
			$(imgold).animate({'top':$(imgold).height()+'px'},
			animSpeed, easeType, function(){animaImgAux(imgold,imgnew);});
		break;

		case 'rightFade':
			$(imgold).animate({
				'left':$(imgold).width()+'px',
				'opacity':'0'
			}, animSpeed, easeType, function(){animaImgAux(imgold,imgnew);});
		break;

		case 'leftFade':
			$(imgold).animate({
				'left':-$(imgold).width()+'px',
				'opacity':'0'
			}, animSpeed, easeType, function(){animaImgAux(imgold,imgnew);});
		break;		

		case 'topFade':
			$(imgold).animate({
				'top':-$(imgold).height()+'px',
				'opacity':'0'
			}, animSpeed, easeType, function(){animaImgAux(imgold,imgnew);});
		break;

		case 'bottomFade':
			$(imgold).animate({
				'top':$(imgold).height()+'px',
				'opacity':'0'
			}, animSpeed, easeType, function(){animaImgAux(imgold,imgnew);});
		break;      

		default:
			$(imgold).animate({'left':-$(imgold).width()+'px'},
			animSpeed, easeType, function(){animaImgAux(imgold,imgnew);});
		break;		
	}
}

var pasaFoto = function (){
	var ancho = tamVentana()[0];
	var n = 5;
	if(ancho <= 337){n=1}
	else if(ancho <=515){n=3}
	if(n!=1){n=getRandomInt(1,n);}
	animaImg($("#marcofoto"+n));
}	

var temporizador = function(){if(estoyFuera){pasafoto = setInterval(pasaFoto,TIEMPO);}}
var stopTemporizador = function(){estoyFuera = false;clearInterval(pasafoto);}

function visorFotos(){
	var num = 5;
		
	for(var i=1;i<=num;i++){creaDOMimg($("#marcofoto" + i));}

	temporizador();
	
	$("#marcofoto1").on('mouseover', function(e){animaImg($(this));});
	$("#marcofoto2").on('mouseover', function(e){animaImg($(this));});
	$("#marcofoto3").on('mouseover', function(e){animaImg($(this));});
	$("#marcofoto4").on('mouseover', function(e){animaImg($(this));});
	$("#marcofoto5").on('mouseover', function(e){animaImg($(this));});

	$("#marcofoto1").on('click','img:eq(0)', function(e){cajaModal($(this));});
	$("#marcofoto2").on('click','img:eq(0)', function(e){cajaModal($(this));});
	$("#marcofoto3").on('click','img:eq(0)', function(e){cajaModal($(this));});
	$("#marcofoto4").on('click','img:eq(0)', function(e){cajaModal($(this));});
	$("#marcofoto5").on('click','img:eq(0)', function(e){cajaModal($(this));});

	$("#fotocontenedor").on('mouseout',  function(e){temporizador();});	
	$("#panelfotos").on('mouseout',      function(e){temporizador();});
	$("#fotocontenedor").on('mouseover', function(e){clearInterval(pasafoto);});
	$("#panelfotos").on('mouseover',     function(e){clearInterval(pasafoto);});
	
	
	var botonesFotosAux = function (ele){
		cajaModal($("#marco" + $(ele).attr('id').slice(-5)).find("img"));
	}

	$("#botfoto1").on('click', function(e){botonesFotosAux($(this));});
	$("#botfoto2").on('click', function(e){botonesFotosAux($(this));});
	$("#botfoto3").on('click', function(e){botonesFotosAux($(this));});
	$("#botfoto4").on('click', function(e){botonesFotosAux($(this));});
	$("#botfoto5").on('click', function(e){botonesFotosAux($(this));});
	
	//Botón del Play
	$("#botfoto0").on('click', function(e){e.preventDefault();playFoto(this);});
}

function tamVentana() {
	var Tamanyo = [0, 0];
	if (typeof window.innerWidth != 'undefined') {
		Tamanyo = [	window.innerWidth, window.innerHeight ];
	} else if (typeof document.documentElement != 'undefined'
	  && typeof document.documentElement.clientWidth !=
	  'undefined' && document.documentElement.clientWidth != 0)	{
		Tamanyo = [	document.documentElement.clientWidth, document.documentElement.clientHeight	];
	} else {
	Tamanyo = [	document.getElementsByTagName('body')[0].clientWidth,
				document.getElementsByTagName('body')[0].clientHeight ];
	}
	return Tamanyo;
}

var menuClick = function(){
	$('#menhor7 a').click(function(e){
		e.preventDefault(); 
		$('#pestana-click').click();
	});
	$("#pestana-contenedor").on('mouseleave', function(e){$('#pestana-click').click();});
}

var playFoto = function (ele){
	ele.blur();
	estoyFuera=false;
	clearInterval(pasafoto);

	//Insertamos Primero el Marco (div)	
	var texto = "<div id='modalMarco'></div>";
	var eleMarco = $(texto).appendTo($('.wrapper'));
	$(eleMarco).css({
		top:"0",
		left:"0",
		position:"fixed",
		width:"100%",
		height:"100%",
		opacity:"0.7",
		color: "#333",
		"text-shadow":"0 0 150px #FFF, 0 0 60px #FFF, 0 0 10px #FFF",
		background:"#BFCFCC",
		"background-attachment": "fixed",
		backgroundImage: "url('imagenes/fondo.png')",
		backgroundRepeat:"repeat",
		zIndex:"1000"
	});

	$('img').css({
		"-webkit-filter":"blur(15px)",
		"-moz-filter":"blur(15px)",
		"-ms-filter":"blur(15px)",
		"-o-filter":"blur(15px)",
		"filter":"blur(15px)"
	});

	texto = "<div id='playfoto'><ul id='playul'></ul><div id='playmensa'></div><nav id='playnav'><span id='playprev'>prev</span><span id='playstop'>stop</span><span id='playnext'>next</span></nav></div>";
	var elePlay = $(texto).appendTo($('.wrapper'));

	$("#playfoto").css({
		position:"fixed",
		top:"50%",
		left:"50%",
		marginLeft: "-280px",
		marginTop: "-307px",
		width:"560px",
		height:"615px",
		color:"#aaa",
		background:"#EEF3E2",	
		backgroundImage: "url('imagenes/espera.gif')",
		"background-repeat": "no-repeat",
		"background-position":"center", 
		borderStyle:"solid",
		borderWidth:"15px",
		borderColor:"#C1CDCD",
		borderRadius:"15px",
		zIndex:"1001"
	});
	
	var eleul = $("#playul");

	$(eleul).css({
		width:"100%",
		height:"auto",
		"box-shadow":"0 1px 2px rgba(0,0,0,0.2)",
		position:"relative",
		padding:"0",
		"list-style-type":"none",
		"margin-bottom": "0"	
	});

	$("#playul li").css({
		padding:"0",
		width:"100%",
		height:"100%",
		margin:"0",
		position:"absolute",
		top:"0",
		left:"0",
		background:"#fff",
		"pointer-events":"auto"
	});

	$("#playnav").css({
		position:"absolute",
		left:"50%",
		marginLeft: "-63px",
		bottom:"-60px",
		width:"126px"
	});
	
	$("#playnav span").css({
		width:"42px",
		height:"42px",
		"float":"left",
		background:"url('imagenes/nav.png')",
		"text-indent":"-9000px",
		cursor:"pointer"
	});

	var cargaFoto = function(numero){
		$('img').css({
			"-webkit-filter":"blur(15px)",
			"-moz-filter":"blur(15px)",
			"-ms-filter":"blur(15px)",
			"-o-filter":"blur(15px)",
			"filter":"blur(15px)"
		});

		setTimeout( function(){
		
			$(eleul).find('img').remove();
			$("#modalDatos").remove();
			if(numero<1){numero=MAXIMO;fotoVisor=MAXIMO;}
			else if(numero>MAXIMO){numero=1;fotoVisor=1;}
			var sNum=ceros(numero,3);
			var texto = "<li id='img" + sNum + "'><img src='FotoViajes/Lekuak" + sNum + ".jpg' alt='foto de viaje número " + numero + "' ></li>";
			$(texto).appendTo($(eleul));

			$("#playul li img").css({
				width:"100%",
				height:"auto"
			});	

			$(creaTextos($("#playmensa"),fotoVisor)).css({
				position: "absolute",
				bottom: "5px",
				left: "1%",
				padding: "1px",
				color: "#000",
				"font-size": "0.8em",
				width:"100%",
				opacity: ".7"
			});

			medirTamanio();		
		}, 450 );

	}

	cargaFoto(fotoVisor);
	
	$("#playprev").css({"background-position":"0 0"});	
	$("#playstop").css({"background-position":"-84px 0"});
	$("#playnext").css({"background-position":"-42px 0"});
	
	$("#playprev").on('mouseover', function(e){$(this).css({"background-position":"-126px 0"});});
	$("#playstop").on('mouseover', function(e){$(this).css({"background-position":"-210px 0"});});
	$("#playnext").on('mouseover', function(e){$(this).css({"background-position":"-168px 0"});});
	
	$("#playprev").on('mouseout', function(e){$(this).css({"background-position":"0 0"});});
	$("#playstop").on('mouseout', function(e){$(this).css({"background-position":"-84px 0"});});
	$("#playnext").on('mouseout', function(e){$(this).css({"background-position":"-42px 0"});});

	$("#playprev").on('click', function(e){cargaFoto(--fotoVisor);});
	$("#playnext").on('click', function(e){cargaFoto(++fotoVisor);});

	var cerrar = function(){
		$(eleMarco).remove();	
		$(elePlay).remove();	
		eleMarco = null;
		elePlay = null;
		document.onkeyup = null;
		window.onresize = null;
		$('img').css({
			"-webkit-filter":"",
			"-moz-filter":"",
			"-ms-filter":"",
			"-o-filter":"",
			"filter":""
		});
		estoyFuera=true;
		temporizador();
	}

	$(eleMarco).on('click', function(e){cerrar();});	
	$(document).on('keyup', function(e){if(e.keyCode == 27){cerrar();}});	
	$("#playstop").on('click', function(e){cerrar();});
	
	function medirTamanio(){
		var ancho = tamVentana()[0];

		if(ancho < 768){$("#modalDatos .text-right").css('display','none');
						$("#modalDatos .text-left").css('padding-left','25px');
		}else{			$("#modalDatos .text-right").css('display','');
						$("#modalDatos .text-left").css('padding-left','');
		}
		
		if(ancho < 650){$("#playhash").addClass('noEzno');}
		else{$("#playhash").removeClass('noEzno');}
						
		if(ancho > 650){     $("#playfoto").css({marginLeft: "-280px",marginTop: "-307px",width:"560px",height:"615px",});}
		else if(ancho > 550){$("#playfoto").css({marginLeft: "-250px",marginTop: "-278px",width:"500px",height:"555px",});}
		else if(ancho > 450){$("#playfoto").css({marginLeft: "-200px",marginTop: "-238px",width:"400px",height:"455px",});}
		else if(ancho > 350){$("#playfoto").css({marginLeft: "-150px",marginTop: "-188px",width:"300px",height:"355px",});}
		else if(ancho > 250){$("#playfoto").css({marginLeft: "-120px",marginTop: "-158px",width:"240px",height:"295px",});}
		else{$("#playfoto").css('display','none');}
	}
	
	setTimeout( medirTamanio, 200 );
	
	window.onresize = function() {
		setTimeout(	medirTamanio(), 200);
	}
}

var navegaRecomen = function(){
	$("#VerImg").addClass('noEzno');

	$("#bostlan").on('click', function(e){e.preventDefault();pintarPng(this);});
	$("#venticlima").on('click', function(e){e.preventDefault();pintarPng(this);});	
	$("#herlogas").on('click', function(e){e.preventDefault();pintarPng(this);});	
	$("#miranda").on('click', function(e){e.preventDefault();pintarPng(this);});
	$("#VerImg").on('click', function(e){cerrar();});	
	
	var pintarPng = function (ele){
		$("#VerImg ul li").addClass('noEzno');
		$("#VerImg").removeClass('noEzno');
		var id = $(ele).attr('id');
		$("#VerImg ." + id).removeClass('noEzno');
		$('html,body').animate({scrollTop: '0px'},500);		
	}
	
	var cerrar = function(){
		$("#VerImg").addClass('noEzno');
	}
	
	var medirTamanio = function (){
		var ancho = tamVentana()[0] - 40;	//40 es el margin de 20 x 2, ancho de la ventana disponible
		var alto = ((ancho-34) * 1.4140271) + 34; // 34 es 12 de padding x 2 + 5 de border x 2, obtenemos el alto de la imagen
		var alto2 = tamVentana()[1] - 40;	//aqui se obtiene el alto de la ventana disponible
		var scrollauto=false;

		if(alto>alto2){alto=alto2;scrollauto=true;}	// si el alto de la imagen es mayor que el alto de la ventana, hay scroll

		$("#divimg").css({
			width: ancho + "px",
			height: alto + "px",
			overflow: (scrollauto)?"auto":"hidden"
		});	

	}
	
	setTimeout( medirTamanio, 200 );

	window.onresize = function() {
		setTimeout(	medirTamanio(), 200);
	}
}

var menuIniClick = function(){
	$("#menuAupaBilbao ul li img").on('mouseover', function(e){cambiaImg($(this));});
	$("#menuAupaBilbao ul li img").on('mouseout', function(e){cambiaImg($(this));});
	$(".anagrama").on('click', function(){cambiarImg();});
	$("#menuAupaBilbao ul li img").on('click', function(e){location.href = $(this).data('href');});	
	$('.ezbegi').addClass('noEzno');
}	

var cambiarImg = function(){
	$.each($("#menuAupaBilbao ul li img"), function(key,value){cambiaImg($(value));});
}

var cambiaImg = function(ele){
	var strOri = $(ele).attr('src');
	var str = strOri.substr(strOri.lastIndexOf("/"),strOri.length);
	var txt = 'hover.';
	if(str.indexOf(txt)>0){str2=str.replace(txt,'.');}
	else{
		str2=str.replace('.',txt);
		$(ele).css({cursor:"pointer"});
	}
	strOri = strOri.replace(str,str2);
	$(ele).attr('src',strOri)
}

var llamadaAjax = function(xhrUrl,xhrData,xhrSuccess,xhrType,soyPOST,txtResult){

	soyPOST=(soyPOST==undefined)?true:soyPOST;
	txtResult=(txtResult==undefined)?"resultado":txtResult;
	xhrType=(xhrType==undefined)?"json":xhrType;
	
	xhrResult=$(eval(txtResult));
	xhrImage=$(eval(txtResult+"2"));
	xhrTipo=(soyPOST)?"POST":"GET";
	
	var reto = $.ajax({
		url: xhrUrl,
		data: xhrData,
		beforeSend: function(){
			var texto="<p>Espere, procesando</p>";
			var teximg="<img src='imagenes/espera.gif' alt=''>"
			$(xhrImage).html(texto+"<br><br>"+teximg+"<br><br>");
		},
		complete: function(){
			$(xhrImage).empty();
		},
		error: function(obj, error){
			console.log(error);
		},
		dataType: xhrType,
		success:  function(ObjReto){xhrSuccess(ObjReto,xhrResult);},
		async: "true",
		timeout: 10000,
		type: xhrTipo
	});
	return reto;
}

var pintarRss = function (xml,ele){
	var str = "<div class='rss'><ul class='rss'>";
	$(xml).find('item').each(function(i, noticia){
		var fecha = new Date($(noticia).find('pubDate').text());
		fecha=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+' '+fecha.getHours()+':'+fecha.getMinutes();
		str += "<li class='rss'><div class='rss new-wrapper'>";
		str += "<h2 class='rss'>"+$(noticia).find('title').text()+"</h2>";
		str += "<p class='rss'>"+$(noticia).find('description').text()+"</p>";
		str += "<p class='rss'><a class='rss' href="+$(noticia).find('link').text()+" title='' target='_blank'>"+$(noticia).find('link').text()+"</a><br><span class='rss'>"+fecha+"</span></p>";
		str += "</div></li>";
	})
	str += "</ul></div>";
	$(ele).html(str);
}



