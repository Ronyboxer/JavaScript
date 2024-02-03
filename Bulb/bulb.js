function changeState(){
const currentState = document.getElementById("bulb").getAttribute("src");
console.log(currentState);
if(currentState=="Images/BulbON.jpeg"){
    document.getElementById("bulb").src="Images/BulbOFF.jpeg";
    document.getElementById("hello").innerHTML = "Toggle the button to turn me on";
} else{
    document.getElementById("bulb").src="Images/BulbON.jpeg";
    document.getElementById("hello").innerHTML = "Toggle the button to turn me off";
}

}
