<?php
define('PATH',$_SERVER['DOCUMENT_ROOT'].'/');
include_once(PATH.'funciones/funciones.php');
header("Content-Type: application/xml; charset=utf-8");
$rssURL="http://www.bilbao.net/cs/Satellite?language=es&pageid=3000075232&pagename=Bilbaonet%2FPage%2FBIO_suscripcionRSS&tipoSus=Avisos";
echo leerRss($rssURL);
?>