const greet = document.querySelector(".greet")
const span = document.createElement("span")
const allListContent = document.querySelectorAll(".icon")
const previousDocs = document.querySelector(".previousDocs")
const arrows = document.querySelector(".arrows")
const toTop = document.querySelector(".box")

let totalDocs = 15

for( let i = 0 ; i < totalDocs ; i++ ){
    const create = document.createElement("div")
    create.classList.add("Docs")
    create.id = `Doc${i+1}`
    const cover = document.createElement("div")
    cover.classList.add("coverPage")
    const title = document.createElement("div")
    title.classList.add("title")
    title.textContent = `Doc ${i+1}`
    create.appendChild(cover)
    create.appendChild(title)
    previousDocs.appendChild(create)
}
if( totalDocs == 0 ){
    const heading = document.createElement("div")
    heading.textContent = "No previous Document availble"
    previousDocs.appendChild(heading)
}
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