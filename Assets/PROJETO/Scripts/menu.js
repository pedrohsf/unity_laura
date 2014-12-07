/*#pragma strict

var posiX: float;
var posiY: float;

var altura: float;
var largura: float;

var perSkin : GUISkin;

function Start () {
altura  = 50;
largura = 70;

posiX = Screen.width/2 - largura/2 ; 
posiY = Screen.height/2- altura /2 + 90;
}

function Update () {

}

function OnGUI()
{
GUI.skin = perSkin;
if (GUI.Button(Rect(posiX,posiY,largura,altura),"Jogar"))
{
  Application.LoadLevel("FASE 1");
}

}
*/