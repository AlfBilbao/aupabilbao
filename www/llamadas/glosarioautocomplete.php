<?php
/* 
contraseña: o1a9B6l4B
servidor: mysql51-119.perso
base de datos: aupabilbaoeu
usuario: aupabilbaoeu

 */
ini_set('display_errors', 1);
foreach($_POST as $k => $v){$$k=$v;}
foreach($_GET as $k => $v){$$k=$v;}

$palabras = array("Accesibilidad Web","Active X","Ajax","Android","Apache","Api","Applet","Aptana","Arp","Asp.net","Back-End","Banner","Bootstrap","Bson","Bubling","C#","Canvas","Capturing-Bubling","Certificación 70-480","Cms","Colores Web","Colorzilla","Chromium","Codelgniter","Comentarios Condicionales IE","Crm","Css","Css Zen Garden","Diseño centrado en el usuario","Diseño Metro","Diseño Web Adaptativo","DNS","DDNS","DHCP","Doctype","DOM","Drag'n Drop","Dropbox","Drupal","DTD","Dyndns","Ecma","Error 404","Ethernet","Fancybox.net","FamFamFam.com","Firebug","FTP","Framework","Front-End","GetBootstrap.com","Gimp","Github","GNU","GPL","GUI","Google Analytics","Google Fonts","Google Maps","Google Places","Google Webmaster Tools","Grid 960","Hongkiat","Horror Vacui","Hosting","Htaccess","HTML5","HTTP","HTTPS","HTTP vs HTTPS","Iconfinder","Icono","Ideateca","IeTester","IIS","Infoxicacion","Internet","Intranet","Inyeccion SQL","IP","IP","ISP","Java","Javascript","jQuery","jQuery Mobile","jQuery UI","Joomla","Jpeg","JS","Jscript","Json","JSP","JVM","J2SE","LAN","LAMP","Lightbox","Look & Feel","Lorem Ipsum","Lynx","MAC","Magento","Media Queries","Modernizr.com","Mongodb","MVC","MySql","NNTP","Node.js","NO-IP","NOSQL","Notepad++","Objective C","Orientation","OSM","PERL","PIXEL","PhoneGap","PHP","Plugins","PNG","POP","POP-UP","Prestashop","Proxy","Python","Renderizar","Responsive","RGB","SEM","SEO","SEO Organico","Servlet","SGML","SHA","Slideshare","SMTP","SPAM","SPRITE","SQLITE","Smarty","SMIL","Soolvet","Sublime Text","SVG","Symfony","Telnet","TCP/IP","Tinymce","Twitter Bootstrap","Ubuntu","UCD","URL","Usabilidad","UTF-8","Vimeo","VPN","Vtiger CRM","WAI","WAN","WEB","Web.Config","Web 2.0","Web DEveloper","WebTaller.com","Widget","WireFrame","Wysiwyg","WordPress","W3C","XAMPP","XHTML","XML","XSS","YouTube","Zorraquino"
);

$data = array();
foreach($palabras as $k => $v){
	if(preg_match('/^'.$value.'/i', $v)){$data[] = $v;}
}
echo json_encode($data);
?>