#pragma strict

var camera_personagem : GameObject;
var casa_interacao : Animator;  
 
/* vars do script de interaçao com o mouse */
var cameraMira : Camera;
static var estaSegurandoUmObjeto : boolean;
static var objetoQueEstaSendoSegurado : Collider;
/* vars de posiçao inicial dos objetos pegos */
static var posInicial : Vector3;
static var rotInicial : Vector3;
var audio_porta : AudioClip;
/* vars animate para o pegando objeto */
static var animat : Animator;
var animacao : int;

function setObjectPosInicial(){
	posInicial = objetoQueEstaSendoSegurado.transform.position;
	rotInicial = objetoQueEstaSendoSegurado.transform.rotation.eulerAngles;
} 



function Start () {
	
	estaSegurandoUmObjeto = false;
	objetoQueEstaSendoSegurado = null;
	animat = GetComponent("Animator");
}


function Update () {
	 
	
	mouse_zoom_camera(); 
	
	if(Input.GetMouseButtonDown(0)){
		if(!estaSegurandoUmObjeto){
			if(interagirComOMouseEmObjetos()){
				 
			}
		}else{  
			
			objetoQueEstaSendoSegurado.collider.enabled = true;
			
			objetoQueEstaSendoSegurado.collider.enabled = true;
			objetoQueEstaSendoSegurado.transform.parent = null;
			
			objetoQueEstaSendoSegurado.rigidbody.constraints &= ~RigidbodyConstraints.FreezePositionY;
			
			//getObjectPosInicial();  
			
			
			
			
			estaSegurandoUmObjeto = false;
			animat.SetBool("com_objeto",false);
			
		}
	}
	 
	if(estaSegurandoUmObjeto){
		objetoQueEstaSendoSegurado.transform.position.y = GameObject.Find("mao_do_boneco").transform.position.y;
		objetoQueEstaSendoSegurado.transform.position.x = GameObject.Find("mao_do_boneco").transform.position.x;
		objetoQueEstaSendoSegurado.transform.position.z = GameObject.Find("mao_do_boneco").transform.position.z;
	}
	
	
}

function interagirComOMouseEmObjetos(){
	var raio : Ray;
	raio = cameraMira.ScreenPointToRay(Vector3(Input.mousePosition.x,Input.mousePosition.y,0));
	var colisor : RaycastHit;
	if(Physics.Raycast(raio,colisor,1000)){ 
		if(colisor.collider.tag == "ObjetoPonto"){
		if(colisor.distance < 200){ 
				estaSegurandoUmObjeto = true;
				objetoQueEstaSendoSegurado = colisor.collider;
				objetoQueEstaSendoSegurado.collider.enabled = false;
				objetoQueEstaSendoSegurado.transform.parent = transform;
				setObjectPosInicial();
				objetoQueEstaSendoSegurado.rigidbody.constraints = RigidbodyConstraints.FreezeAll;
				objetoQueEstaSendoSegurado.transform.position.y = GameObject.Find("mao_do_boneco").transform.position.y;
				objetoQueEstaSendoSegurado.transform.position.x = GameObject.Find("mao_do_boneco").transform.position.x;
				objetoQueEstaSendoSegurado.transform.position.z = GameObject.Find("mao_do_boneco").transform.position.z;
				objetoQueEstaSendoSegurado.transform.Translate(0,0,0);
				objetoQueEstaSendoSegurado.transform.Rotate(0,0,0);
				
				
				animat.SetBool("com_objeto",true); 
				return true;
			} 
		}else if(colisor.collider.tag == "uma_porta"){
			if(colisor.distance < 200){
				interacao_com_a_porta();
				return true; 
			}
		}
	}
	return false; 
}


function interacao_com_a_porta(){
	
		if(casa_interacao.GetBool("porta_fechada")){
			casa_interacao.SetBool("porta_fechada",false);
		}
		else{
			casa_interacao.SetBool("porta_fechada",true);
			
		}
		audio.PlayOneShot(audio_porta);
}


function mouse_zoom_camera(){
	if(Input.GetAxis("Mouse ScrollWheel") > 0){
		if( (camera_personagem.transform.position.y - transform.position.y) > 0.4)
			camera_personagem.transform.Translate(0,0,3); 
			
	}
		
	
	if(Input.GetAxis("Mouse ScrollWheel") < 0){
		if((camera_personagem.transform.position.y - transform.position.y) < 2)
			camera_personagem.transform.Translate(0,0,-3);
	} 
}
