#pragma strict

var posiX: float;
var posiY: float;

var altura: float;
var largura: float;

var posEditadoX : float;
var posEditadoY : float;

function Start () {
altura  = 40;
largura = 200;

posiX = Screen.width/2 - largura/2 ; 
posiY = Screen.height/2- altura /2 + 220;
}

function Update () {

}

function OnGUI()
{  




	if (GUI.Button(Rect(posiX+posEditadoX,posiY+posEditadoY,largura,altura),"Voltar"))
	{
	  Application.LoadLevel("Menu");
	}
	
	

}
