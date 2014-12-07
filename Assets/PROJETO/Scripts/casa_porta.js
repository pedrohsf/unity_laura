#pragma strict

var camera_personagem : GameObject;
var casa_interacao : Animator;  
 
/* vars do script de interaçao com o mouse */
var cameraMira : Camera;
var estaSegurandoUmObjeto : boolean;
var objetoQueEstaSendoSegurado : Collider;

/* vars animate para o pegando objeto */
var animat : Animator;
var animacao : int;

function Start () {
	casa_interacao.SetBool("porta_fechada",false);
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
			objetoQueEstaSendoSegurado.rigidbody.constraints &= ~RigidbodyConstraints.FreezePositionY;
			objetoQueEstaSendoSegurado.rigidbody.drag = 30;
			objetoQueEstaSendoSegurado.transform.parent = null;
			objetoQueEstaSendoSegurado.enabled  = true;
			objetoQueEstaSendoSegurado = null;
			estaSegurandoUmObjeto = false;
			animat.SetBool("com_objeto",false); 
		}
	}
	
	
}

function interagirComOMouseEmObjetos(){
	var raio : Ray;
	raio = cameraMira.ScreenPointToRay(Vector3(Input.mousePosition.x,Input.mousePosition.y,0));
	var colisor : RaycastHit;
	if(Physics.Raycast(raio,colisor,1000)){ 
		if(colisor.collider.tag == "ObjetoPonto"){
			if(colisor.distance < 200){ 
				objetoQueEstaSendoSegurado = colisor.collider;
				objetoQueEstaSendoSegurado.transform.parent = transform;
				estaSegurandoUmObjeto = true;
				animat.SetBool("com_objeto",true); 
				objetoQueEstaSendoSegurado.transform.position.y = GameObject.Find("mao_do_boneco").transform.position.y;
				objetoQueEstaSendoSegurado.transform.position.x = GameObject.Find("mao_do_boneco").transform.position.x;
				objetoQueEstaSendoSegurado.transform.position.z = GameObject.Find("mao_do_boneco").transform.position.z;
				objetoQueEstaSendoSegurado.enabled = false;
				objetoQueEstaSendoSegurado.rigidbody.constraints = RigidbodyConstraints.FreezeAll;
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
	
		if(casa_interacao.GetBool("porta_fechada"))
			casa_interacao.SetBool("porta_fechada",false);
		else
			casa_interacao.SetBool("porta_fechada",true);
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
