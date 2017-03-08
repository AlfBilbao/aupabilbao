<?php
define('PATH',$_SERVER['DOCUMENT_ROOT'].'/');
include_once(PATH.'funciones/funciones.php');
header("Content-Type: application/xml; charset=utf-8");
$rssURL="http://www.elcorreo.com/bizkaia/rss/2.0?seccion=bizkaia";
echo leerRss($rssURL,true);
?>