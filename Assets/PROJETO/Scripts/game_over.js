#pragma strict

var posiX: float;
var posiY: float;

var altura: float;
var largura: float;

var posEditadoX : float;
var posEditadoY : float;

function Start () {
altura  = 50;
largura = 220;

posiX = Screen.width/2 - largura/2 ; 
posiY = Screen.height/2- altura /2 + 90;
}

function Update () {

}

function OnGUI()
{  




	if (GUI.Button(Rect(posiX+posEditadoX,posiY+posEditadoY,largura,altura),"Jogar Novamente"))
	{
	  Application.LoadLevel("FASE 1");
	}
	
	

}
