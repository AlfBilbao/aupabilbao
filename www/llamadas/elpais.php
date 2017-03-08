<?php
define('PATH',$_SERVER['DOCUMENT_ROOT'].'/');
include_once(PATH.'funciones/funciones.php');
header("Content-Type: application/xml; charset=utf-8");
$rssURL="http://ep00.epimg.net/rss/ccaa/paisvasco.xml";
echo leerRss($rssURL);
?>