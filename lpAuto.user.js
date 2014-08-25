// ==UserScript==
// @name          lpAuto
// @author        Lenny. (@ohitsLenny)
// @namespace     lpAuto
// @description   This will auto update threads using the LabPunch api
// @include       *facepunch.com/showthread*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @require       https://raw.githubusercontent.com/jbrooksuk/jQuery-Timer-Plugin/master/jquery.timer.js
// @resource      
// @version       1.0
// @grant         GM_xmlhttpRequest
// ==/UserScript==

var tId = String(window.location);
var re = /(?:\?t=)(\d+)/g;
tId = re.exec(tId)[1];

function askLabPunch() {
	GM_xmlhttpRequest({
		url: "http://lab.facepunch.com/api/post/list?threadid="+tId,
		type: "GET",
		onload: function(resp) {
			resp = JSON.parse(resp.responseText);
			handlePunch(resp);
		}
	});
}

//var timer = $.timer(500, askLabPunch);
askLabPunch();

function handlePunch(resp) {

}