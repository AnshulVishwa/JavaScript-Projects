document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    document.body.style.backgroundImage = "url(./Component/background.jpg)"
  });
  

// Declarations
const greet = document.querySelector(".greet")
const span = document.createElement("span")
const allListContent = document.querySelectorAll(".icon")
const previousDocs = document.querySelector(".previousDocs")
const arrows = document.querySelector(".arrows")
const toTop = document.querySelector(".box")
document.addEventListener()

// count of total pre docs available
let totalDocs = 15

// Loop to show the Documents
for( let i = 0 ; i < totalDocs ; i++ ){
    // Outer div for docs
    const create = document.createElement("div")
    create.classList.add("Docs")
    create.id = `Doc${i+1}`
    // cover page for docs
    const cover = document.createElement("div")
    cover.classList.add("coverPage")
    // name or title div for docs
    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = `Doc ${i+1}`

    // appending divs to HTML page
    create.appendChild(cover)
    create.appendChild(title)
    previousDocs.appendChild(create)
}
// if the previous docs are null, then show a heading "No previous Document availble"
if( totalDocs == 0 ){
    const heading = document.createElement("div")
    heading.textContent = "No previous Document availble"
    previousDocs.appendChild(heading)
}
// if the docs are more than 8, show arrows for up down
else if( totalDocs > 8 ) { 
    const arrowUp = document.createElement("div")
    const arrowDown = document.createElement("div")
    const up = document.createElement("i")
    const down = document.createElement("i")
    arrowUp.classList.add("arrowUp")
    arrowDown.classList.add("arrowDown")
    up.className = "fa-solid fa-arrow-up"
    down.className = "fa-solid fa-arrow-down"
    arrowUp.appendChild(up)
    arrowDown.appendChild(down)
    arrows.append( arrowUp , arrowDown )

    arrowUp.addEventListener( "click" , ()=>{
        document.querySelector("#Doc1").scrollIntoView({behavior:"smooth"})
    } )
    arrowDown.addEventListener( "click" , ()=>{
        document.querySelector(`#Doc${totalDocs}`).scrollIntoView({behavior:"smooth"})
    } )
}

// if hover to list content, then rotate symbol
allListContent.forEach( (each) => {
    each.parentElement.addEventListener( "mouseover" , () => {
        each.id = "rotate"
    } )
    each.parentElement.addEventListener( "mouseout" , () => {
        each.id = null;
    } )
} )

// at last write a name of alias
span.textContent = "Welcome, " + sessionStorage.getItem("alias") + " ✨"
greet.appendChild(span)