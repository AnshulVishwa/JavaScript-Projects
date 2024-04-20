const grid = document.querySelector(".grid")
for( let i = 0 ; i < 7; i++ ){
    const rows = document.createElement("div")
    rows.setAttribute("class","rows")
    rows.setAttribute("id",`row${i}`)
    grid.appendChild(rows)
    for(let j = 0 ; j < 18 ; j++){
        const block = document.createElement("div")
        block.setAttribute("class",`block row${i}block${j} `)
        block.textContent = " "
        rows.appendChild(block)
    }
}
function clickEvent(num){
    const all = document.querySelectorAll(".block")
        all.forEach( (each)=>{
            each.addEventListener("click",()=>{
                localStorage.setItem( "atomName" , `${each.childNodes[num].textContent}`)
                window.location.href = "info.html"
            })
            if( each.textContent == " " ){
                each.style.visibility = "hidden"
            } 
        } )
    }
async function getdata( url , data ){
    try{
        url = await fetch("info.json")
        data = await url.json()
        let set = 0
        let myArr1 = []
        let myArr2 = []
        for(let i = 0 ; i < data.elements.length-1 ; i++){
            let find = document.querySelector(`.row${set}block${data.elements[i].group-1}`)
            let atomicNumber = document.createElement("span")
            let atomName = document.createElement("div")
            atomName.setAttribute("class","AtomName")
            let atomMass = document.createElement("span")
            find.append(atomicNumber,atomName,atomMass)
            set = (data.elements[i].group-1 == 17) ? set+1 : set
            if( data.elements[i].number < 72 && data.elements[i].number > 57){
                myArr1.push(data.elements[i])   
            }else if(data.elements[i].number < 104 && data.elements[i].number > 89){
                myArr2.push(data.elements[i])   
            }
            else{
                atomicNumber.textContent = data.elements[i].number
                atomName.textContent = data.elements[i].symbol
    
                let str = new String(data.elements[i].atomic_mass)
                let arr = str.split(".")
                arr.push((arr[1] == undefined) ? "000" : "")
                let exp = [arr[0]]
                exp.push(arr[1].slice(0,2))
                exp = exp.join(".")
    
                atomMass.textContent = exp
            }
        }
        const other = document.querySelectorAll(".other")
        other.forEach( (each)=>{
            each.addEventListener("click",()=>{
                if(each.textContent == "Lanthanoid"){
                    const otherGrid = document.querySelector(".otherGrid")
                    if(document.querySelectorAll(".acti").length != 0){
                        document.querySelectorAll(".acti").forEach( (each)=>{
                            each.parentElement.removeChild(each)
                        } )
                    }
                    for(let i = 0 ; i < myArr1.length ; i++){
                        const create = document.createElement("div")
                        create.setAttribute("class",`block lanth`)
                        otherGrid.appendChild(create)
                        const atomNumDiv = document.createElement("div")
                        atomNumDiv.setAttribute("class","atomNum")
                        atomNumDiv.textContent = myArr1[i].number
                        const atomName = document.createElement("div")
                        atomName.setAttribute("class","AtomName")
                        atomName.textContent = myArr1[i].symbol
                        const atomMass = document.createElement("div")
                        atomMass.setAttribute("class","atomMass")
                        atomMass.textContent = myArr1[i].atomic_mass
                        create.append( atomNumDiv , atomName , atomMass )
                        let str = new String(myArr1[i].atomic_mass)
                        let arr = str.split(".")
                        arr.push((arr[1] == undefined) ? "000" : "")
                        let exp = [arr[0]]
                        exp.push(arr[1].slice(0,3))
                        exp = exp.join(".")
                        atomMass.textContent = exp
                    }
                    document.querySelector(".lan").setAttribute("disabled","")
                    document.querySelector(".act").removeAttribute("disabled")
                    clickEvent(0)
                }
                if(each.textContent == "Actinoid"){
                    const otherGrid = document.querySelector(".otherGrid")
                    if(document.querySelectorAll(".lanth").length != 0){
                        document.querySelectorAll(".lanth").forEach( (each)=>{
                            each.parentElement.removeChild(each)
                        } )
                    }
                    for(let i = 0 ; i < myArr2.length ; i++){
                        const create = document.createElement("div")
                        create.setAttribute("class",`block acti`)
                        otherGrid.appendChild(create)
                        const atomNumDiv = document.createElement("div")
                        atomNumDiv.setAttribute("class","atomNum")
                        atomNumDiv.textContent = myArr2[i].number
                        const atomName = document.createElement("div")
                        atomName.setAttribute("class","AtomName")
                        atomName.textContent = myArr2[i].symbol
                        const atomMass = document.createElement("div")
                        atomMass.setAttribute("class","atomMass")
                        atomMass.textContent = myArr2[i].atomic_mass
                        create.append( atomNumDiv , atomName , atomMass )
                        let str = new String(myArr2[i].atomic_mass)
                        let arr = str.split(".")
                        arr.push((arr[1] == undefined) ? "000" : "")
                        let exp = [arr[0]]
                        exp.push(arr[1].slice(0,3))
                        exp = exp.join(".")
                        atomMass.textContent = exp
                    }
                    document.querySelector(".act").setAttribute("disabled","")
                    document.querySelector(".lan").removeAttribute("disabled")
                    clickEvent(0)
                }
                
            })
        } )
        clickEvent(1)
    }
    catch(error){
        console.log(error)
    }
}
getdata()
