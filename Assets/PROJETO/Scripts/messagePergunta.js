#pragma strict

/////////////////////////////
///////////////////////////// Suscribete a mi canal para mas videotutoriales y material como este
///////////////////////////// sigueme en las cuentas de facebook y twitter para mas información
///////////////////////////// y estar informado de nuevos tutoriales y enlces
/////// https://twitter.com/DarkellEGAMES
/////// https://www.facebook.com/DarkelleGames

// By Elejalde for DeGameS

var mensaje : String; // mensaje q se va a mostrar 
var entro : boolean = false;


function Update () {



}function OnGUI() {

	if(entro){

		GUI.Label(Rect(Screen.width/2-100,50,300,30),mensaje);
	
	}


}

function OnCollisionExit(collisionInfo : Collision) {
	
		if(collisionInfo.collider.name == "BonecoPronto") 
			entro = false;
	
}

function OnCollisionEnter(collision : Collision) {
	
		if(collision.collider.name == "BonecoPronto")
			entro = true;
	
	
}

function OnTriggerEnter() {

	entro = true;

}function OnTriggerExit() {

	entro = false;

}

// By Elejalde for DeGameS
/////////////////////////////
/////////////////////////////
/////////////////////////////