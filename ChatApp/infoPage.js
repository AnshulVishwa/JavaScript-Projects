const allButton = document.querySelectorAll("button")
allButton.forEach( (each)=>{
    each.addEventListener("click",(e)=>{
        e.preventDefault()
    })
} )

const fill = document.querySelector("#fill")
const askBtn2 = document.querySelector("#askBtn2")

askBtn2.addEventListener("click",()=>{
    askBtn2.setAttribute("disabled","")
    askBtn2.style.color = "black"
    const createInput1 = document.createElement("input")
    createInput1.setAttribute("placeholder"," Enter Your name ")
    const createInput2 = document.createElement("input")
    createInput2.setAttribute("placeholder"," Enter Your Frnd's name ")
    fill.appendChild(createInput1)
    fill.appendChild(createInput2)
    submitForm()

})

function submitForm(){
    const submitBtn = document.querySelector(".submitBtn")
    const allinput = document.querySelectorAll("input")
    let values = []
    submitBtn.addEventListener( "click" , ()=>{
        allinput.forEach( (each)=>{
            values.push(each.value)
        } )
        localStorage.clear()
        localStorage.setItem("username",values)
        window.location.href = "Chatfrnd.html"
    } )
}

//////////////////////////////////////////////////////////////////