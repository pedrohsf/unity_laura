#pragma strict



@script RequireComponent(AudioSource)

var resposta_correta : AudioClip;
var resposta_incorreta : AudioClip;

var objetoQueEstaSendoSegurado : Collider;
var posInicial : Vector3;
var rotInicial : Vector3;

var jaPegouORelogio : boolean;
static var animat : Animator;


function Start () {
	jaPegouORelogio = false;
	animat = GetComponent("Animator");
}

function Update () {
	 
	objetoQueEstaSendoSegurado = casa_porta.objetoQueEstaSendoSegurado;
	posInicial = casa_porta.posInicial;
	rotInicial = casa_porta.rotInicial;
	
	if(casa_porta.objetoQueEstaSendoSegurado != null)
	{ 	
		
		if(objetoQueEstaSendoSegurado.name == "jar_fase_2"){
			if(!jaPegouORelogio){
				
				
				GetComponent("AudioSource").audio.clip = resposta_incorreta;
				audio.PlayOneShot(resposta_incorreta);
				getObjectPosInicial();  
				objetoQueEstaSendoSegurado.collider.enabled = true;
			
				objetoQueEstaSendoSegurado.collider.enabled = true;
				objetoQueEstaSendoSegurado.transform.parent = null;
				
				objetoQueEstaSendoSegurado.rigidbody.constraints &= ~RigidbodyConstraints.FreezePositionY;
				
				casa_porta.objetoQueEstaSendoSegurado = null;
				
				casa_porta.estaSegurandoUmObjeto = false;
				animat.SetBool("com_objeto",false);
				 
			}else if(!casa_porta.estaSegurandoUmObjeto){
				GameObject.Destroy(casa_porta.objetoQueEstaSendoSegurado.gameObject);
				GetComponent("AudioSource").audio.clip = resposta_correta;
				audio.PlayOneShot(resposta_correta);  
			}
		}else if(casa_porta.objetoQueEstaSendoSegurado.name == "clock_fase_2"){
			if(!casa_porta.estaSegurandoUmObjeto){
				GameObject.Destroy(casa_porta.objetoQueEstaSendoSegurado.gameObject);
				GetComponent("AudioSource").audio.clip = resposta_correta;
				audio.PlayOneShot(resposta_correta);
				jaPegouORelogio = true;
			}
		}
	}
}



function getObjectPosInicial(){
	objetoQueEstaSendoSegurado.transform.position = posInicial;
	objetoQueEstaSendoSegurado.transform.rotation.eulerAngles = rotInicial;
}