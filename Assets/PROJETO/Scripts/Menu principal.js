#pragma strict 
function Start ()
 {

}

function Update ()
 {

}

function OnGUI()
{

//Grupo no centro da tela
GUI.BeginGroup (Rect(Screen.width /2 -50,Screen.height / 2 -50,200,185));


//Box
GUI.Box(Rect(0,0,150,185), "Menu Principal");


//Botoes


/*
//Configuraçoes
GUI.Button(Rect(25,70,100,30),"Configuraçoes");

//Iniciar jogo
if (GUI.Button(Rect(25,30,100,30), "Iniciar Jogo"))
{

}


//Sair do jogo
if (GUI.Button(Rect(25,110,100,30),"Sair do jogo"))
{
	Application.Quit();

}

//Sair do jogo
if (GUI.Button(Rect(25,150,100,30),"XG Website"))
{
	Application.OpenURL("http://xglobegames.blogspot.com.br/");

}

//Fim do Grupo
GUI.EndGroup();
*/
}
