// JavaScript Document
$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){ //escuchador de eventos
		$('#izquierda').on("swipeleft",function(){ //deslizar a la izquierda
			navigator.notification.alert("Deslizó hacia la Izquierda",function(){"aplicacion 7", "Ok"}); //aparece mensaje alert
		}); //cierre swipe izquierda
		$('#derecha').on("swiperight",function(){ //deslizar a la derecha
			navigator.notification.confirm("¿Que quieres hacer?",function(op){ //aparece mensaje para confirmar
				switch(op) //variable op para las opciones
				{
					case 1:
					navigator.notification.beep(1); //suena el dispositivo
					break; 
					
					case 2:
					navigator.notification.vibrate(3000); //vibra el dispositivo
					break;
				}
			},"aplicacion7","Beepear,Vibrar,Cancelar");
			});
    },false);
});