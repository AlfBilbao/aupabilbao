<?php
define('PATH',$_SERVER['DOCUMENT_ROOT'].'/');
include_once(PATH.'funciones/funciones.php');
header("Content-Type: application/xml; charset=utf-8");
$rssURL="http://www.aupaathletic.com/xml/noticias.xml";
echo leerRss($rssURL,true);
?>