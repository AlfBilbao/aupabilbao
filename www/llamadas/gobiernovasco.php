<?php
define('PATH',$_SERVER['DOCUMENT_ROOT'].'/');
include_once(PATH.'funciones/funciones.php');
header("Content-Type: application/xml; charset=utf-8");
$rssURL="http://www.euskadi.net/r01hSearchResultWar/r01hPresentationRSS.jsp?r01kLang=es&r01kQry=tC%3Aeuskadi%3BtF%3Aprensa_comunicacion%3BtT%3Anota_prensa%2Cnoticia%3Bm%3AdocumentLanguage.EQ.es%3Bo%3AcommDate.DESC%3Bp%3AInter_portal%2CInter%3B&r01kPageContents=/r33-2288/es/&r01kRssTitle=Suscr%EDbete%20a%20Euskadi.net+-+Novedades+&r01kRss=1";
echo leerRss($rssURL,true);
?>