const greet = document.querySelector(".greet")
const span = document.createElement("span")
const allListContent = document.querySelectorAll(".icon")
const previousDocs = document.querySelector(".previousDocs")

let totalDocs = 20

for( let i = 0 ; i < totalDocs ; i++ ){
    const create = document.createElement("div")
    create.classList.add("Docs")
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