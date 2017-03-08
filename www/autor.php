<!DOCTYPE html>
<html lang="es">
<?php $menu=5; include('includes/head.php'); ?>
<body id="page-body">
	<div class="wrapper">
		<?php include('includes/nojava.php'); ?>
		<header>
			<?php include('includes/figure.php'); ?>
			<?php include('includes/menuhorizontal.php'); ?>			
			<!-- Fixed navbar -->
			<nav id="menufijo" class="navbar navbar-fixed-top navbar-inverse noprint" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button id="boton" type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span class="sr-only">Menú</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="http://www.aupabilbao.eu/index.php" title="ir a aupabilbao.eu">inicio</a>
						<a id="menfij0" class="navbar-brand" href="" title="">autor</a>
					</div>

					<!-- Collect the nav links, forms, and other content for toggling -->
					<div id="menudesplegable" class="collapse navbar-collapse">
						<ul class="nav navbar-nav">
							<li id="menfij1"><a href="" title=""><span class="texto">información</span></a></li>
							<li id="menfij2"><a href="" title=""><span class="texto">presentación</span></a></li>
							<li class="dropdown"><a href="#" title="" class="dropdown-toggle" data-toggle="dropdown"><span class="texto">profesional</span> <b class="caret"></b></a>
								<ul class="dropdown-menu">
								<li id="menfij3"><a href="" title=""><span class="texto">experiencia</span></a></li>
								<li><a href="http://www.aupabilbao.eu/recomendaciones.php" title="página de referencias"><span class="texto">referencias</span></a></li>								
								</ul>
							</li>
							<li id="menfij4"><a href="" title=""><span class="texto">conocimientos</span></a></li>
							<li id="menfij5"><a href="" title=""><span class="texto">contacto</span></a></li>
							<li class="dropdown"><a href="#" title="" class="dropdown-toggle" data-toggle="dropdown"><span class="texto">aficiones</span> <b class="caret"></b></a>
								<ul class="dropdown-menu">
								<li id="menfij6"><a href="" title=""><span class="texto">aficiones</span></a></li>
								<li><a href="http://www.aupabilbao.eu/fotosdeviajes.php" title="fotografias de viajes"><span class="texto">fotografías</span></a></li>			
								</ul>
							</li>
						</ul>
					</div><!-- /.navbar-collapse -->
				</div><!-- /.container -->
			</nav>
		</header>
		<div id="menunavegar" class="noprint">
			<div id="navegadock"> 
				<a href="#sec1" title="información">&nbsp;</a> 
				<a href="#sec2" title="presentación">&nbsp;</a>
				<a href="#sec3" title="experiencia">&nbsp;</a>
				<a href="#sec4" title="conocimientos">&nbsp;</a>
				<a href="#sec5" title="contacto">&nbsp;</a>
				<a href="#sec6" title="aficiones">&nbsp;</a>
				<a href="#sec7" title="logotipos">&nbsp;</a>
			</div>
			
			<div id="divup">
				<a id="iniup" href="#sec1" title="inicio de cada sección">&nbsp;</a> 
			</div>
		</div>
		<section id="sec0" class="noprint">
			<div id="titulo">
				<h1 class="menuautor">Alfredo Rios Gomez</h1>
				<h2>Ongi Etorri, bienvenido, quiero compartir contigo información sobre mí.</h2>	
			</div>

			<nav class="container" id="menuini">
				<ul class="row container">
					<li class="contenedor col-md-2 col-sm-4 col-xs-6" id="menu1">
						<img class="icon" src="imagenes/information.png" alt="icono de información">
						<span class="texto">información</span>
					</li>

					<li class="contenedor col-md-2 col-sm-4 col-xs-6" id="menu2">
						<img class="icon" src="imagenes/presentacion.png" alt="icono de presentación">
						<span class="texto">presentación</span>
					</li>

					<li class="contenedor col-md-2 col-sm-4 col-xs-6" id="menu3">
						<img class="icon" src="imagenes/experiencia.png" alt="icono de experiencia">
						<span class="texto">experiencia</span>
					</li>

					<li class="contenedor col-md-2 col-sm-4 col-xs-6" id="menu4">
						<img class="icon" src="imagenes/conocimientos.png" alt="icono de conocimientos">
						<span class="texto">conocimientos</span>
					</li>

					<li class="contenedor col-md-2 col-sm-4 col-xs-6" id="menu5">
						<img class="icon" src="imagenes/contacto.png" alt="icono de contacto">
						<span class="texto">contacto</span>
					</li>

					<li class="contenedor col-md-2 col-sm-4 col-xs-6" id="menu6">
						<img class="icon" src="imagenes/aficiones.png" alt="icono de aficiones">
						<span class="texto">aficiones</span>
					</li>
				</ul>
			</nav>
		</section>
		<div class="limpia">&nbsp;</div><!--limpia-->
		<section id="sec1" class="sec1">
			<article class="limpia">
				<h3 class="ezbegi">Curriculum Alfredo Rios Gomez de AupaBilbao en Bilbao, información, desarrollo, responsable proyectos web</h3>
				<h4 class="text-info subrayado">HTML5, CSS3, Javascript, PHP y MySql</h4><br>
				<h5><strong>Una pequeña explicación</strong>:</h5>
				<p>Estoy aprendiendo a marchas forzadas <strong>HTML5, CSS3, Javascript, jQuery, Ajax, PHP y MySql</strong>. Esta página, donde te encuentras, es una prueba de ello. Intentando aplicar lo aprendido, y no ir siempre a lo fácil. Buscar complicaciones para probar los conocimientos adquiridos.</p><br>
				<p>Entiende que no soy diseñador, mi perfil profesional siempre ha estado asociado al desarrollo. Y aqui el diseño puede no ser el acertado.</p>
				<p>El proposito, es mostrar una página Web utilizando las ultimas tecnologias. La Web es "responsive", Diseño Web Adaptable y preparada para todo tipo de dispositivos móviles. Esta optimizada para el navegador Google Chrome, pero funciona con todos los navegadores actuales, eso sí, actualizados.</p><br>
				<p>Ciertas versiones antiguas de algún navegador, pueden mostrar algunas diferencias de comportamiento. Se intenta que no ocurra, pero dada la diversidad de navegadores y versiones, a veces no se consigue. Si eres uno de los afectados, te presento mis disculpas por ello.</p><br>
				<p>En esta Web, muestro mi curriculum y mis aficiones, y no descarto ir ampliando temas.</p><br>
				<p>En un principio, el público objetivo donde se quiere dirigir el enfoque de esta Web, son miembros de departamentos de recursos humanos, desarrolladores, mandos intermedios de Pymes, y cualquier persona, que busque un perfil profesional, en el mundo de la informática y mas especificamente en el entorno de desarrollo Web.</p><br>
				<p>Echa un vistazo, y quien  sabe, igual nos encontramos .</p>	

			</article>
		</section>
		<section id="sec2" class="sec2">
			<article class="limpia">
				<h3 class="ezbegi">Curriculum Alfredo Rios Gomez de AupaBilbao en Bilbao, Presentación, desarrollo, responsable proyectos web</h3>
				<h4 class="text-info subrayado">Permitame solicitarle su atención</h4><br>
				<h5><strong>Estimado Señor / Señora</strong>:</h5><br>
				<p>Ya que ha llegado hasta aquí, sólo le pido algo de su valioso tiempo para que pueda evaluar mi curriculum vitae. Con los tiempos que corren, es muy posible que este recibiendo múltiples vidas laborales. Hasta hace bien poco me encontraba en su misma situación, leyendo una veintena semanal, de personas esperanzadas en ser entrevistadas.</p><br>
				<p>Creo que mis<strong> 24 años de experiencia como responsable de proyectos</strong>, pueden aportar un gran valor a su empresa, sobre todo en el área de<strong> Consultoría Informática, Desarrollo de Aplicaciones Escritorio o Web</strong>.</p><br>
				<p>En mi trayectoria he tenido que enfrentarme a diversas situaciones, pero siempre, sin perder los objetivos finales, dar el mejor servicio al cliente, mantener al equipo de trabajo motivado y entregado, e intentar, en la medida de lo posible, cumplir con el plazo previsto para la entrega final del proyecto.</p><br>
				<p>Busco ampliar horizontes, busco nuevos retos profesionales, <strong>donde pueda aportar mis experiencias, y ser un valor añadido</strong>. Sería gratificante, una nueva empresa, nuevos clientes, nuevos compañeros, seguramente nuevas tecnologías, muy ilusionante todo ello.</p><br>
				<p> A pesar de que en esta crisis, parece que sobramos los trabajadores mayores de 40, sigo teniendo la misma iniciativa, capacidad de entrega, y ganas de compartir y de aprender.</p><br>
				<p>Si ahora o en un futuro, necesita personal de mi perfil profesional, no dude en ponerse en contacto conmigo, a través del mail<img src="imagenes/mail.png" alt="mail" title="mail"> y en una entrevista personal ultimar nuestro conocimiento mutuo.</p><br>
				<p>Quedo a la espera de sus noticias. Muchas gracias por su tiempo y atención.</p>
				<img id="firma" class="pull-right" src="imagenes/firma.png" alt="firma">
			</article>
		</section><!--presenta-->
		<section id="sec3" class="sec3">
			<article class="limpia">
				<a id="recomendacion" class="botonsec label label-info noprint" href="http://www.aupabilbao.eu/recomendaciones.php" title="recomendaciones laborales">ver Referencias</a>
				<h3 class="ezbegi">Curriculum Alfredo Rios Gomez de AupaBilbao en Bilbao, Experiencia, desarrollo, responsable proyectos web</h3>
				<h4 class="text-info subrayado">Área profesional</h4>
				<p><strong>24 años cubriendo distintas áreas en el ámbito de la informática</strong></p>
				<p>Como misión principal garantizar el correcto funcionamiento de la Informática de los clientes, participar en la definición de sus necesidades estratégicas, definir las actuaciones a realizar y los medios para hacerlo, asignar cargas de trabajo, procurar la formación,  promoción y puesta al día, de su equipo humano y de los equipos informáticos.</p>
				<p>&nbsp;</p>					
				<h4 class="text-info subrayado">Experiencia profesional</h4>
			</article>
			
			<article>
				<ul class="row">
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><strong>Marzo 1994 <span>Julio 2013</span></strong></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-left"><strong>Responsable de Proyectos</strong> <span><i>19 años y 4 meses</i></span></li>
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><small>Empresa:</small></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-left">Electrosoft 2001 S.L.</li>
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><small>Función:</small></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-justify">Interlocutor con el cliente, elaborar presupuestos, desarrollo de análisis, definición, estimación y planificación del proyecto. Gestión de recursos.  Desarrollo integral de la solución hasta su puesta en marcha. Implantación y puesta a punto. Coordinar al equipo de trabajo para la ejecución de los proyectos. Diseño base de datos. Instalar, configurar y administración SQL Server.<strong> Diseño, desarrollo e implementación de un sistema ERP propio.</strong></li>
				</ul>
				<p>&nbsp;</p>
			
				<ul class="row">
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><strong>Octubre 1990 <span>Marzo 1994</span></strong></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-left"><strong>Profesor, Programador, Analista, Responsable de Proyectos</strong> <span><i>3 años y 5 meses</i></span></li>
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><small>Empresa:</small></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-left">Ledain S.L.</li>
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><small>Función:</small></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-justify">Impartir diferentes materias. Programación a medida, elaborar análisis según necesidades del cliente, coordinar trabajos de los programadores. Instalador y administrador de Redes Novell.</li>
				</ul>
				<p>&nbsp;</p>				
					
				<ul class="row">
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><strong>Noviembre 1989 <span>Octubre 1990</span></strong></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-left"><strong>Analista – Programador</strong> <span><i>11 meses</i></span></li>
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><small>Empresa:</small></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-left">Comunicaciones y Sonidos S.A.</li>
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><small>Función:</small></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-justify">Desarrollo e implantación de programas de contabilidad, gestión de personal, facturación, control de almacén, presupuestos, preciaros, gestión de radio mensajes.</li>
				</ul>
				<p>&nbsp;</p>					

				<ul class="row">
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><strong>Mayo 1989 <span>Agosto 1989</span></strong></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-left"><strong>Programador</strong> <span><i>3 meses</i></span></li>
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><small>Empresa:</small></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-left">Proyectos Informáticos</li>
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><small>Función:</small></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-justify">Desarrollo de programas de contabilidad y nominas bajo supervisión del Analista.</li>
				</ul>
				<p>&nbsp;</p>	
				
				<ul class="row">
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><strong>Noviembre 1988 <span>Mayo 1989</span></strong></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-left"><strong>Profesor</strong> <span><i>6 meses</i></span></li>
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><small>Empresa:</small></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-left">Cedem</li>
					<li class="col-md-3 col-sm-4 cols-xs-12 text-right"><small>Función:</small></li>
					<li class="col-md-9 col-sm-8 cols-xs-12 text-justify">Impartir clases de Sistemas operativos, hojas de cálculo, base de datos y programación.</li>
				</ul>
				<p>&nbsp;</p>	

			</article>
		</section>
		<section id="sec4" class="sec4">
			<article class="limpia">
				<h3 class="ezbegi">Curriculum Alfredo Rios Gomez de AupaBilbao en Bilbao, formación, desarrollo, responsable proyectos web</h3>			
				<h4 class="text-info subrayado">Formación académica</h4>
				
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1989<span>Master en informática de Gestión</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">800h - Cedem, Bilbao</li>
				</ul>
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1988<span>Analista de Gestión</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">800h - Cedem, Bilbao</li>
				</ul>
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1987<span>Programador</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">800h - Cedem, Bilbao</li>
				</ul>				
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1983<span>B.U.P.</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">Instituto nacional mixto nº 7 San Ignacio, Bilbao</li>
				</ul>				

				<p>&nbsp;</p>
				<h4 class="text-info subrayado">Últimos Cursos realizados</h4>

				<ul class="row text-success">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>2014<span>Desarrollo de Aplicaciones con Tecnologías WEB</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">580h - Consultec S.L., Bilbao (cursando actualmente)</li>
				</ul>
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>2012<span>Microsoft Visual Basic Net 2008</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">150h - Cipsa S.L., Bilbao</li>
				</ul>
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>2007<span>Nuevo Plan General Contable</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">&nbsp;20h - Consultec S.R.L, Bilbao</li>
				</ul>
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>2003<span>Microsoft ADO</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">&nbsp;15h - Consultec S.R.L, Bilbao</li>
				</ul>
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>2003<span>Microsoft SQL Server 2000 Administración</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">&nbsp;20h - Consultec S.R.L, Bilbao</li>
				</ul>				
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>2003<span>Microsoft SQL Server 2000 Programación</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">&nbsp;15h - Consultec S.R.L, Bilbao</li>
				</ul>
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>2000<span>Microsoft Visual Basic 6.0, Avanzado</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">&nbsp;50h - Meatze, Barakaldo</li>
				</ul>
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1996<span>Microsoft Visual Basic 4.0, Programación</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">&nbsp;50h - Cedem, Bilbao</li>
				</ul>				
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1990<span>Red Local Novell, Supervisor Nivel II NAEC</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">&nbsp;12h - Keylan, Madrid</li>
				</ul>				
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1990<span>Red Local Novell, Instalador</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">&nbsp;&nbsp;&nbsp;8h - Keylan, Madrid</li>
				</ul>				
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1990<span>Lenguaje C, Programación</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">100h - Cedem, Bilbao</li>
				</ul>					
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1989<span>Redes Locales y Comunicaciones</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">&nbsp;40h - Tekel, Bilbao</li>
				</ul>				
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1988<span>Contabilidad</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">180h - Almi, Bilbao</li>
				</ul>	
				<ul class="row">
					<li class="col-md-6 col-sm-7 cols-xs-12 text-left"><strong>1986<span>Contabilidad</span></strong></li>
					<li class="col-md-6 col-sm-5 cols-xs-12 text-left">&nbsp;60h - Cámara Comercio de Bilbao</li>
				</ul>
				
				<p>&nbsp;</p>
				<h4 class="text-info subrayado">Aptitudes</h4>
				
				<ul class="row">
					<li class="cols-xs-12 text-center"><strong>HTML5, CSS3, Javascript, jQuery y php</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Microsoft SQL Server</strong></li>
					<li class="cols-xs-12 text-center"><strong>Visual Basic (VB)</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Visual Basic NET (VB.NET)</strong></li>
					<li class="cols-xs-12 text-center"><strong>Microsoft Office</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Microsoft Windows Server 2000/2003</strong></li>
					<li class="cols-xs-12 text-center"><strong>Microsoft Windows XP/2000/Vista/Windows 7</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Dirección de equipos</strong></li>
					<li class="cols-xs-12 text-center"><strong>Administración de Usuarios y Accesos</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Desarrollo y Parametrización ERP</strong></li>
					<li class="cols-xs-12 text-center"><strong>Planificación de Proyectos ERP</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Software de Contabilidad</strong></li>
					<li class="cols-xs-12 text-center"><strong>Software de Facturación</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Gestión Documental</strong></li>
					<li class="cols-xs-12 text-center"><strong>Control de Stocks</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Control de Incidencias</strong></li>
					<li class="cols-xs-12 text-center"><strong>Mantenimiento Preventivo, Correctivo y Predictivo</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Recepción de Facturas</strong></li>
					<li class="cols-xs-12 text-center"><strong>Recepción de Materias Primas</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Expedición de Productos Terminados</strong></li>
					<li class="cols-xs-12 text-center"><strong>Producción</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Controles de Calidad</strong></li>
					<li class="cols-xs-12 text-center"><strong>Gestión Presupuestaria</strong></li>
					<li class="text-success cols-xs-12 text-center"><strong>Gestión de Clientes</strong></li>
					<li class="cols-xs-12 text-center"><strong>Gestión de Proveedores</strong></li>					
				</ul>		
				
			</article>
		</section>
		<section id="sec5" class="sec5">
			<article class="limpia">
				<h3 class="ezbegi">Curriculum Alfredo Rios Gomez de AupaBilbao en Bilbao, Contacto, desarrollo, responsable proyectos web</h3>
				<h4 class="text-info subrayado">Datos adicionales:</h4>
				<p class="text-center">Alfredo Rios Gomez</p>
				<p class="text-center">48012, Bilbao, Bizkaia</p>
				<p class="text-center"><img src="imagenes/mail.png" alt="mail" title="mail"></p>
				<p class="text-center">Con carné de conducir, vehículo propio y disponibilidad para viajar</p>

				<div class="icosocial noprint">
					<ul>
						<li><a href="http://www.linkedin.com/in/alfredoriosgomez" target="_blank" title="Nueva ventana linkedin.com">
						<img class="" src="imagenes/linkedin48.png" alt="Linkedin">				
						</a></li>
						<li>&nbsp;</li>
						<li><a href="http://instagram.com/aupabilbao?ref=badge" target="_blank" title="Nueva ventana aupabilbao instagram.com">
						<img class="" src="imagenes/instagram48.png" alt="Instagram">				
						</a></li>
						<li>&nbsp;</li>
						<li><a href="https://www.facebook.com/aupabilbao.eu" target="_blank" title="Nueva ventana aupabilbao facebook.com">
						<img class="" src="imagenes/facebook48.png" alt="Facebook">				
						</a></li>
						<li>&nbsp;</li>
						<li><a href="https://plus.google.com/+AupabilbaoEuAlf/posts" target="_blank" title="Nueva ventana aupabilbao google+">
						<img class="" src="imagenes/g+48.png" alt="google+">				
						</a></li>
						<li>&nbsp;</li>						
						<li><a href="https://twitter.com/aupabilbao" target="_blank" title="Nueva ventana aupabilbao twitter.com">
						<img class="" src="imagenes/twitter48.png" alt="Twitter">				
						</a></li>
						<li><a href="https://www.youtube.com/channel/UCVubAA3jbnA-dkH3QGsEzlA" target="_blank" title="Nueva ventana aupabilbao youtube.com">
						<img class="" src="imagenes/youtube48.png" alt="Youtube">				
						</a></li>						
					</ul>
				</div>
			</article>
		</section>
		<section id="sec6" class="sec6">
			<article class="limpia">
				<a id="fotos" class="botonsec label label-info noprint" href="http://www.aupabilbao.eu/fotosdeviajes.php" title="fotografias de viaje">ver Fotografías</a> 
				<h3 class="ezbegi">Curriculum Alfredo Rios Gomez de AupaBilbao en Bilbao, Aficiones, Viajar, Fotografias, desarrollo, responsable proyectos web</h3>
				<h4 class="text-left subrayado">Fotografía y Viajar</h4>
				<p class="text-justify">De mis aficiones, destacaría solamente dos, <strong>la fotografía y viajar</strong>. Totalmente relacionadas, ya que no entendería la una sin la otra. Empecé con la fotografía cuando descubrí un mundo diferente, que necesitaba plasmar, para inmortalizar el momento y recordar después.</p>
				<p class="text-justify">Viajar me sirve para escapar de la rutina. <strong>Me recuerda lo poco que sé y lo mucho que siempre me quedara por aprender</strong>. Y sobre todo, <strong>me da ganas de vivir</strong>.</p>
				<p class="text-justify">Viajando aprendo a <strong>adaptarme rápido a los cambios</strong>. Me <strong>quita los prejuicios</strong> adquiridos involuntariamente.</p>
				<p class="text-justify">Me gusta viajar, porque acentúa mi curiosidad y me saca de mi comodidad.</p>
				<p class="text-justify">Porque me da la oportunidad de conocerme cada día un poquito más.</p>
				<p class="text-justify">Porque a pesar de que viajando puede haber situaciones estresantes, reservas tiempo para contemplar una puesta sol.</p>
				<p class="text-justify">Porque la <strong>libertad</strong> que siento viajando no la he experimentado de otra manera.</p>
				<p class="text-justify">Porque ofrece la posibilidad de <strong>conocer gentes con puntos de vista diferentes</strong>, tan validos como el nuestro.</p>
				<p class="text-justify">Porque me encanta el inmenso placer de despertarme cada día en un lugar diferente.</p>
				<p class="text-justify">Porque me permite llegar a esos lugares a los que sólo accedía en mi sueños de niñez.</p>
				<p class="text-justify">Porque me da la oportunidad de conocer personas interesantes en cada ciudad.</p>
				<p class="text-justify">Porque pone a prueba cada día mi capacidad de entender el mundo.</p>
				<p class="text-justify">Porque me otorga la convicción de que todo es mucho más sencillo de lo que parece en un principio.</p>
				<p class="text-justify">Porque hace posible conocer otras religiones, otras etnias, otras culturas.</p>
				<p class="text-justify">Y sobre todo, me gusta viajar porque me proporciona <strong>sensaciones indescriptibles</strong>, como estar perdido en una gran ciudad, rodeado de personas, a las que no entiendes ni te comprenden, y a pesar de ello, te ayudan, mirar un mapa y no saber hacia dónde ir, y acercarse alguien, a quien no conoces y confiar en él, encontrar un camino y seguirlo a pesar de no saber a dónde va, ir modificando tu itinerario según ruta...</p>
				<p class="text-justify">Porque refuerza mis <strong>Ganas de VIVIR</strong></p>
				
				<br>

				<h4 class="text-left subrayado">10 frases que inspiran un viaje</h4>
				
				<h5 class="text-right lead"><strong>Una vez al año ve a algún lugar en el que nunca hayas estado antes.</strong></h5><h6 class="text-right"><strong><i> Dalai Lama</i></strong></h6>

				<h5 class="text-left lead"><strong>Un buen viajero no tiene planes fijos ni la intención de llegar.</strong></h5><h6 class="text-left"><strong><i> Lao Tse</i></strong></h6>
				
				<h5 class="text-right lead"><strong>El único verdadero viaje de descubrimiento consiste no en buscar nuevos paisajes, sino en mirar con nuevos ojos.</strong></h5><h6 class="text-right"><strong><i> Marcel Proust</i></strong></h6>

				<h5 class="text-left lead"><strong>Nuestro destino de viaje nunca es un lugar, sino una nueva forma de ver las cosas.</strong></h5><h6 class="text-left"><strong><i> Henry Miller</i></strong></h6>

				<h5 class="text-right lead"><strong>Viajar enseña tolerancia.</strong></h5><h6 class="text-right"><strong><i> Benjamin Disraeli</i></strong></h6>				

				<h5 class="text-left lead"><strong>Vive como si fueras a morir mañana. Aprende como si fueras a vivir para siempre.</strong></h5><h6 class="text-left"><strong><i> Mahatma Gandhi</i></strong></h6>

				<h5 class="text-right lead"><strong>El que no sale nunca de su tierra está lleno de prejuicios.</strong></h5><h6 class="text-right"><strong><i> Carlo Goldoni</i></strong></h6>								
				<h5 class="text-left lead"><strong>Aquel que quiere viajar feliz, debe viajar ligero.</strong></h5><h6 class="text-left"><strong><i> Antoine de Saint-Exupery</i></strong></h6>

				<h5 class="text-right lead"><strong>El mundo es un libro, y quienes no viajan leen sólo una página.</strong></h5><h6 class="text-right"><strong><i> San Agustín de Hipona</i></strong></h6>							
				<h5 class="text-left lead"><strong>He descubierto que no hay forma más segura de saber si amas u odias a alguien que hacer un viaje con él.</strong></h5><h6 class="text-left"><strong><i> Mark Twain </i></strong></h6>				
				
			</article>
		</section>
		<section id="sec7" class="sec7 noprint">
			<article class="limpia">
				<h3 class="ezbegi">Curriculum Alfredo Rios Gomez de AupaBilbao en Bilbao, Logotipos, desarrollo, responsable proyectos web</h3>
				<img src="imagenes/html5css3js.png" alt="logotipos html5, css3 y javascript" title="logotipos html5, css3 y javascript">
			</article>
		</section>
		<div class="push">&nbsp;</div><!--necesario para anclar el footer-->
	</div><!--wrapper-->
	<?php include('includes/footer.php'); ?>
</body>
</html>



















































