<?php
date_default_timezone_set('Europe/Madrid');

function isDNI($cadena){
	$cadena = trim($cadena);
	if(strlen($cadena)!=9){$reto=false;}
	elseif(preg_match('/^[0-9]{8}[A-Z]$/i', $cadena)){
		$letra='TRWAGMYFPDXBNJZSQVHLCKET';
		$reto = (strtoupper($cadena[strlen($cadena) - 1]) == $letra[((int) substr($cadena, 0, strlen($cadena) - 1)) % 23]);
	}
	return $reto;
}

function isEmpty($valor){
	$valor = trim($valor);
	return empty($valor);
}

function isEmail($email) {
	return (strstr($email, '@') && strstr($email, '.') && preg_match('|^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]{2,})+$|i', $email));
}

function isNum($valor){
	$valor = trim($valor);
	return ctype_digit($valor);
}

function leerRss($rssURL,$encode=false){
	$crss=curl_init($rssURL);
	curl_setopt($crss, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($crss, CURLOPT_HEADER, 0);
	$rss=curl_exec($crss);
	curl_close($crss);
	return ($encode)?utf8_encode($rss):$rss;
}

?>