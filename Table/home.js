let alert = document.querySelector("#alert")
let input1 = document.querySelector("#input1")  
let input2 = document.querySelector("#input2")
let btn = document.querySelector(".btn")
let h1 = document.querySelector("h2")
let table = document.querySelector(".tableOf")
let content = document.querySelector(".content")
btn.addEventListener("click",(event)=>{
    event.preventDefault()

    if( table.style.display == 'block' ){
        content.style.display = "block";
        table.style.display = 'none'
    }
    if( table.style.display == 'none' ){
        content.style.display = "none";
        table.style.display = 'block'
    }
    
    let val1 = input1.value
    let val2 = input2.value
    
    if(isNaN(val1) || val1 == ""){
        alert.style.display = "block"
        alert.innerHTML = "Please enter a valid Number"
    }else if(isNaN(val2) || val2 == "" || val2 <10){
        alert.style.display = "block"
        alert.innerHTML = "Please enter the Length of table ( min => 10 )"
    }else{
        h1.innerHTML = `Table of ${input1.value}`
        alert.style.display = "none"
        table.style.display = 'block'
        content.style.display = "none"
        for( let i = 1 ; i <= input2.value ; i++ ){
            let create = document.createElement('div')
            let content = document.querySelector(".remove")
            create.setAttribute("class" , "create col-12 tableBox text-dark text-center")
            content.append(create)
            create.innerHTML =` ${input1.value} x ${i} = ${ input1.value*i } ` 
        }
        let cancel = document.querySelector(".cancel")
        cancel.addEventListener("click" , ()=>{
            window.location.reload()
        })
        
    }
    input1.value = null
    input2.value = null
})

