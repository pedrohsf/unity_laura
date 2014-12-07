#pragma strict
var velocidade: float;
var velocidadeRotacao: float;
var animacao : int;
var velocidadeAcel: float;
var animat: Animator; 
 
 // comentario de teste do commit
 
function Start () 
{
	
	animat = GetComponent("Animator");
}

function Update () 

{ 
	animacao = 0;


	velocidade = 100*Time.deltaTime;
	velocidadeRotacao = 100 * Time.deltaTime;

	
  if(Input.GetKey("r")){
  	if(!animat.GetBool("com_objeto")){ 
	  	velocidade = velocidade *2; 
	  	animat.SetBool("correndo",true); 
	  	animacao = 1;
	} 
  }else{
	animat.SetBool("correndo",false); 
  }
	
  if(Input.GetKey("w"))
  {
   transform.Translate(0,0,velocidade);//Para frente
   animat.SetBool("andando",true);
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
     
  	animat.SetBool("andando",false); 
  	animat.SetBool("correndo",false); 
  }
   
  /* function OnCollisionEnter(collision: Collision)
   {
   		if(collision.transform.tag=="ObjetoPonto")
   		{
   		geral.ponto = geral.ponto+10;
   		Destroy(collision.gameObject);//o objeto some
   		}
   	}
   */
   
   
   
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

