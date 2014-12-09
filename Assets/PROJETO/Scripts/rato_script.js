#pragma strict


var speed : int;


function Start () {
	speed = 10;
}

function Update () {
	
	var bonecoX = GameObject.Find("BonecoPronto").transform.position.x;
	var bonecoZ = GameObject.Find("BonecoPronto").transform.position.z;
	
	var distanciaX : float;
	var distanciaY : float;
	if(transform.position.y > GameObject.Find("BonecoPronto").transform.position.y)
		distanciaY = transform.position.y - GameObject.Find("BonecoPronto").transform.position.y ;
	else
		distanciaY = GameObject.Find("BonecoPronto").transform.position.y - transform.position.y ;
	 
	if(transform.position.x > GameObject.Find("BonecoPronto").transform.position.x)
		distanciaX = transform.position.x - GameObject.Find("BonecoPronto").transform.position.x ;
	else
		distanciaX = GameObject.Find("BonecoPronto").transform.position.x - transform.position.x ;
	 
	
	 
	if(distanciaX < 100 && distanciaY < 100)
	{
		if(bonecoX >= transform.position.x){
			transform.Translate(0 ,0, -speed*Time.deltaTime );
		}else{ 
			transform.Translate( 0 ,0, speed*Time.deltaTime);
		} 
		
		if(bonecoZ >= transform.position.z){
			transform.Translate( speed*Time.deltaTime ,0, 0 );
		}else { 
			transform.Translate( -speed*Time.deltaTime ,0, 0); 
		}
 	}
	
	 	
	 
}