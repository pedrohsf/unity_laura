#pragma strict
var velocidade: float;
var velocidadeRotacao: float;
var animacao: int;
var velocidadeAcel: float;
var animat: Animator; 
 
function Start () {
	
	animat = GetComponent("Animator");
}

function Update () 
{
 
	animacao = 0;


	velocidade = 100*Time.deltaTime;
	velocidadeRotacao = 100 * Time.deltaTime;
	
  if(Input.GetKey("r")){
  	velocidade = velocidade *2;
  	animat.SetBool("correndo_b2",true); 
  	animacao = 1;
  }
	
  if(Input.GetKey("w"))
  {
   transform.Translate(0,0,velocidade);//Para frente
   animat.SetBool("andando_b2",true); 
   animacao = 1;
  }
  
  if(Input.GetKey("s"))
  {
   transform.Translate(0,0,-velocidade);//para tras
   
  }
  
  if(Input.GetKey("a"))
  {
   //transform.Translate(-velocidade,0,0); // para esquerda
   transform.Rotate(0 , -(velocidadeRotacao) , 0); 
   //animacao = 1;
  }
  
  if(Input.GetKey("d"))
  {
   //transform.Translate(velocidade,0,0); // para direita
   transform.Rotate(0 , velocidadeRotacao , 0); 
  }

  if(animacao == 0)
  {
    
  	animat.SetBool("andando_b2",false); 
  	animat.SetBool("correndo_b2",false); 
  }
  

}
