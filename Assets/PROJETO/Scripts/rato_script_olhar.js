#pragma strict

function Start () {

}

function Update () {
	var transformOlhar : Transform;
	transformOlhar = GameObject.Find("BonecoPronto").transform;
	transformOlhar.position.y = transform.position.y;
	
	transform.LookAt(transformOlhar);
	  
}