function dispaly() {
const element = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is: " + element[0].innerHTML;
}