#pragma strict

var texButton : GUISkin;

var posX: float;
var posY: float;
var Alt:  float;
var Lar:  float;

var QntVida:float;
var MaxQntVida: float;

var animat: Animator; 
var ratoAtual : GameObject;


var tempo: float;

var ratoColidido : boolean;

function Start () {
	QntVida=100;
	MaxQntVida=100;
	ratoColidido = false;
	animat = GetComponent("Animator");
}

function Update () {

	Lar  = Screen.width/4 * (QntVida/MaxQntVida); 
	posX = 20;
	posY = 20;
	Alt  = Screen.height/10;

	
	if(ratoColidido){
		if(Input.GetMouseButton(0)){
			animat.SetBool("chutando",true);  
			GameObject.Destroy(ratoAtual);
		}else{
			animat.SetBool("chutando",false); 
		}
	}

	if(QntVida< 0){
		Application.LoadLevel("game_over");
	}
	

	tempo=tempo+Time.deltaTime;
}

function OnGUI(){
	GUI.skin = texButton;
	GUI.Button(Rect(posX,posY,Lar,Alt)," ");
}

function OnCollisionEnter(collision : Collision){ 
	 	Debug.Log(collision.collider.name);
		
		if(collision.collider.name == "rato"){  
			ratoColidido = true; 
			QntVida = QntVida - 5; 
			ratoAtual = collision.collider.gameObject;
		}
	 
}

function OnCollisionExit(collision : Collision){
	
	if(collision.collider.name == "rato"){    
		ratoColidido = false;
  		animat.SetBool("chutando",false); 
  	}
}

