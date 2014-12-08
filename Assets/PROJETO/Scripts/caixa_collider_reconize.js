#pragma strict

@script RequireComponent(AudioSource)


var objetoQueEstaSendoSegurado : Collider;
var posInicial : Vector3;
var rotInicial : Vector3;
static var animat : Animator;

var resposta_correta : AudioClip;
var resposta_incorreta : AudioClip;

function Start () {

}

function Update () {

} 


function OnCollisionEnter(collision : Collision) {
	if(collision.collider.name != "BonecoPronto"){
		objetoQueEstaSendoSegurado = casa_porta.objetoQueEstaSendoSegurado;
		posInicial = casa_porta.posInicial;
		rotInicial = casa_porta.rotInicial;
		
		if("caixa"+collision.collider.name == name){
			
			collision.collider.transform.parent = transform;
			
			
			//getObjectPosInicial();  
			
			objetoQueEstaSendoSegurado.rigidbody.constraints = RigidbodyConstraints.FreezeAll;
			objetoQueEstaSendoSegurado.tag = "ja_na_caixa";
			
			GetComponent("AudioSource").audio.clip = resposta_correta;
			audio.PlayOneShot(resposta_correta);
			
			 
			
		}else{
			GetComponent("AudioSource").audio.clip = resposta_incorreta;
			audio.PlayOneShot(resposta_incorreta);
			
			getObjectPosInicial();  
			
			 
			
		
		}
		objetoQueEstaSendoSegurado = null;
	}	
}

function getObjectPosInicial(){
	objetoQueEstaSendoSegurado.transform.position = posInicial;
	objetoQueEstaSendoSegurado.transform.rotation.eulerAngles = rotInicial;
}