function love() {

var name1 = document.getElementById("fname").value;
var name2 = document.getElementById("lname").value;
if(name1.length<=2){
    alert("Enter atleast 3 characters");
}
if(name2.length<=2){
    alert("Enter atleast 3 characters");
}
 else {
     var relation = Math.floor(Math.random() * 100);
document.getElementById("print").innerHTML= name1 +" and " + name2 +" relationship = " +relation +" % of love. "
if(relation > 80)
document.getElementById("statement").innerHTML = "Best relationships"; 
if(relation > 60 && relation<=80)
document.getElementById("statement").innerHTML = "Lovely relationships"; 
if(relation > 40 && relation<=60)
document.getElementById("statement").innerHTML = "good relationships"; 
 }


}













