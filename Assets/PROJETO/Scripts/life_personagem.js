#pragma strict

static var vida : int;

function Start () {
	vida = 30;
}

function Update () {
	
	GameObject.Find("gui_text_life").guiText.text = "Vida : "+ vida;
	
}




