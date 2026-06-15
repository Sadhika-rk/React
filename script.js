let box = document.getElementsByTagName("button")

let move = 10
box[0].addEventListener("mouseover", function() {
   
    box[0].style.marginLeft = Math.floor(Math.random()*move) + "rem"
    box[0].style.marginTop = Math.floor(Math.random()*move)+ "rem"
})