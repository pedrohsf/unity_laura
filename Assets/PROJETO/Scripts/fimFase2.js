#pragma strict

function Start () 
{

}

function Update () 
{

}
function OnCollisionEnter(collision: Collision)
   {
   		if(collision.transform.tag=="Player") //tag do boneco e player
   		{ 
   			Application.LoadLevel("fim_do_game");
   		}
   	}
