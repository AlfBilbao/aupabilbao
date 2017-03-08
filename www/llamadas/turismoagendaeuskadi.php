<?php
define('PATH',$_SERVER['DOCUMENT_ROOT'].'/');
include_once(PATH.'funciones/funciones.php');
header("Content-Type: application/xml; charset=utf-8");
$rssURL="http://turismo.euskadi.net/r01hSearchResultWar/r01hPresentationRSS.jsp?r01kLang=es&r01kRssTitle=Ofertas&r01kQry=tC:euskadi%3btT:evento%3bm:documentPublicationInfo.EQ.1,documentLanguage.EQ.es,eventType.EQ.0100%3bpp:r01PageSize.1000%3bo:documentCreateDate.DESC%3b&r01kPageContents=/x65-12375/es&r01kRss=1";
echo leerRss($rssURL,true);
?>