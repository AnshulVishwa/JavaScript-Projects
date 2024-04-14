const inputTodo = document.querySelector(".inputTodo")
    const btn = document.querySelector(".btn")
    const content = document.querySelector(".content")
    
    let arr = []
    let count = 0

        btn.addEventListener( "click" , (e)=>{
            e.preventDefault()
            let value = inputTodo.value
            console.log(arr)
            count++             
            
            if( value == "" ){
                alert("Enter a TODO")
            }
            if( arr.includes(value) ){
                alert("Already Exist")
            } 
            else{
                arr.push(value)

                let text = value.slice( 0 , 1 ).toUpperCase() + value.slice( 1 , value.length )
                let todo = document.createElement("div")
                todo.setAttribute( "class" , "todo" )
                let todoText = document.createElement("span")
                todoText.setAttribute("class","todoText")
                let cancel = document.createElement("span")
                cancel.setAttribute("class","cancel")
                let number = document.createElement("span")
                number.setAttribute("class","number")

                content.appendChild(todo)
                todo.append( number, todoText , cancel )
                
                number.textContent = "~"
                todoText.innerHTML = text
                cancel.textContent = "x"

                cancel.addEventListener("click",()=>{
                    count--
                    let div = cancel.parentElement
                    div.style.display = "none"
                })
                let line = false
                number.addEventListener("click",()=>{
                    line = (!line)
                    let div = number.parentElement
                    div.style.textDecoration = (line) ? "line-through" : "none"
                })
            }
        })