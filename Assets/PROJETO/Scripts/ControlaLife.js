#pragma strict

var texButton : GUISkin;

var posX: float;
var posY: float;
var Alt:  float;
var Lar:  float;

var QntVida:float;
var MaxQntVida: float;

var tempo: float;

function Start () {
QntVida=100;
MaxQntVida=100;
}

function Update () {

Lar  = Screen.width/4 * (QntVida/MaxQntVida); 
posX = Screen.width/2 - Lar/2;
posY = Screen.height/2 - Screen.height/4;
Alt  = Screen.height/10;


if (Input.GetKey("c"))
{
  if (QntVida>0)
  {
   QntVida = QntVida-0.5;
   tempo = -1;
  }
}

if (tempo>=0)
{
 if (QntVida<100)
 {
   if (tempo>0.5)
   {
   QntVida = QntVida+0.5;
   tempo = 0;
   }
 }



}


tempo=tempo+Time.deltaTime;
}

function OnGUI()
{
GUI.skin = texButton;

GUI.Button(Rect(posX,posY,Lar,Alt)," ");



}




