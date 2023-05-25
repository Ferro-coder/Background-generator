var css = document.querySelector("h3")
var clr1 = document.querySelector(".color1")
var clr2 = document.querySelector(".color2")
var body = document.querySelector("body")
var startClr = body.style.background.value


function setGradient(){
    body.style.background = "linear-gradient(to right, " + clr1.value +
        ", "+clr2.value+")"
    css.textContent = body.style.background
}
function startColor(){
    console.log(body.style.background)
    css.textContent = body.style.background
}

startColor()
clr1.addEventListener("input", setGradient)
clr2.addEventListener("input", setGradient)