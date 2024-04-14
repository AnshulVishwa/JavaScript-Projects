const img = document.querySelector("img")
const name = document.querySelector(".name")
const takename = document.querySelector(".takename")
const age = document.querySelector(".age")
const takeage = document.querySelector(".takeage")
const platform = document.querySelector(".platform")
const takeplatform = document.querySelector(".takeplatform")
const title = document.querySelector(".title")
const taketitle = document.querySelector(".taketitle")
const icon = document.querySelector("lord-icon")
const colorAll = document.querySelector(".all")
const colorTitle = document.querySelector(".title")
const content = document.querySelector(".content")
const input1 = document.querySelector(".inputname")
const input2 = document.querySelector(".inputage")
const input3 = document.querySelector(".inputplat")
const input4 = document.querySelector(".inputtitle")

async function getMyCards(data , url){
    url = await fetch( "More/api.json" )
    data = await url.json()
        
    try{

        

        function ChangeColor(){
            window.addEventListener( "click" , ()=>{
                let valColor = `${colorAll.value}`
                console.log(valColor)
                content.style.color = `${valColor}`
            } )
        }
        function ChangeColor2(){
            window.addEventListener( "click" , ()=>{
                let valColor = `${colorTitle.value}`
                console.log(valColor)
                taketitle.style.color = `${valColor}`
            } )
        }
        function ShowInput(toWhom , where){
            where.value = null
            where.style.display = "block"
            window.addEventListener( "keydown" , (key)=>{
                if (key.key == "Enter"){
                    toWhom.innerHTML = where.value
                    HideInput(where)
                }
            } )
        }
        function HideInput(toWhom){
            toWhom.style.display = "none"
        }
        ChangeColor()
        ChangeColor2()
        let i = 0
        icon.addEventListener( "click" , ()=>{
            if(i == data.length){
                 i = 0
            }
            takename.innerHTML = data[i].name
            takeage.innerHTML = data[i].age
            taketitle.innerHTML = data[i].title
            takeplatform.innerHTML = data[i].Platform
            img.setAttribute("src" , `${data[i].avatar}`)
            console.log(i)
            i++    
         })
        name.addEventListener("dblclick" , ()=>{
            ShowInput(takename,input1)
        })
        age.addEventListener("dblclick" , ()=>{
            ShowInput(takeage,input2)
        })
        platform.addEventListener("dblclick" , ()=>{
            ShowInput(takeplatform,input3)
        })
        taketitle.addEventListener("dblclick" , ()=>{
            ShowInput(taketitle,input4)
        })
    }
    catch(error){
        "Koi baat ni wapas Try kr"
    }

}
getMyCards()