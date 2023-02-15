function buttonClick(){
    console.log("Button is actually clicked.")
}

var btn = document.getElementById("btn");
btn.addEventListener("click", buttonClick);