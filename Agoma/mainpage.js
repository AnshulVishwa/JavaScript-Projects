const greet = document.querySelector(".greet")
const span = document.createElement("span")
const allListContent = document.querySelectorAll(".icon")

allListContent.forEach( (each) => {
    each.parentElement.addEventListener( "mouseover" , () => {
        each.id = "rotate"
    } )
    each.parentElement.addEventListener( "mouseout" , () => {
        each.id = null;
    } )
} )

span.textContent = "Welcome, " + sessionStorage.getItem("alias") + " ✨"
greet.appendChild(span)