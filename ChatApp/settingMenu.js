
function tellItsDone(){
    const createToast = document.createElement("div")
    createToast.setAttribute("class","toast")
    createToast.textContent = "Changes are made successfully"
    document.body.appendChild(createToast)
    setTimeout( ()=>{
        document.body.removeChild(createToast)
    } , 2000 )
}

const profile = document.querySelector(".profile")

profile.addEventListener( "click" , ()=>{
    if(document.querySelector(".inputBoxNick")){
        document.body.removeChild(document.querySelector(".inputBoxNick"))
    }
    const createInputBox = document.createElement("div")
    createInputBox.setAttribute("class" , "inputBox")
    const input = document.createElement("input")
    input.setAttribute("class","toastInput")
    input.placeholder = "Enter a new Username"
    
    createInputBox.appendChild(input)
    document.body.appendChild(createInputBox)

    window.addEventListener("keydown",(e)=>{
        if(e.key == "Enter"){
                document.body.removeChild(createInputBox)
                document.querySelector(".username").textContent = input.value
                tellItsDone()
        }
    })
} )

const nickname = document.querySelector(".nickname")
nickname.addEventListener("click",()=>{
    if(document.querySelector(".inputBox")){
        document.body.removeChild(document.querySelector(".inputBox"))
    }
    const createInputBox = document.createElement("div")
    createInputBox.setAttribute("class" , "inputBoxNick")
    const input = document.createElement("input")
    input.setAttribute("class","toastInput")
    input.placeholder = "Enter a nickname for user2"
    
    createInputBox.appendChild(input)
    document.body.appendChild(createInputBox)
    
    window.addEventListener("keydown",(e)=>{
        if(e.key == "Enter"){
                document.body.removeChild(createInputBox)
                document.querySelector(".username2").textContent = input.value
                tellItsDone()
        }
    })
})

function alertMsg(msg , className){
    const create = document.createElement("div")
    create.setAttribute("class",className)
    create.textContent = msg
    document.body.appendChild(create)
    setTimeout( ()=>{
        document.body.removeChild(create)
    } , 3000 )
}

const profilePic = document.querySelector(".profilepic")
profilePic.addEventListener( "click" , ()=>{
    alertMsg("To change the profile pic, Click on the profile picture" , "profilePic")
})

const theme = document.querySelector(".theme")

let themeCheck = false

theme.addEventListener( "click" , ()=>{
    themeCheck = (themeCheck) ? false : true 
    if(themeCheck){
        document.querySelector(".collection").style.visibility = "visible"
    }
    else{
        document.querySelector(".collection").style.visibility = "hidden"
    }

} )

const checkUpdates = document.querySelector(".updates")
checkUpdates.addEventListener("click",()=>{
  alertMsg( "You may face difficulty in liking the restored Message" , "alertUpdate" )  
})

const deleteChats = document.querySelector(".deleteChats")
deleteChats.addEventListener("click",()=>{
    if(document.querySelectorAll(".allHide")){
        document.querySelectorAll(".allHide").forEach( (each1)=>{
            each1.parentElement.removeChild(each1)
        } )
        tellItsDone()
    }
})

const backup = document.querySelector(".chatsBackup")
backup.addEventListener( "click" , (event)=>{
    const mid = document.querySelector(".middle")
    let Myarr = []
    for( let i = 0 ; i < mid.childElementCount ; i++ ){
        let arr = [ "\\" , mid.childNodes[i].classList[0] , (mid.childNodes[i].childNodes[0].childNodes[3].childNodes[1]) ? "liked" : "notLiked" , (mid.childNodes[i].childNodes[0].childNodes[3].childNodes[0].childNodes[0].textContent == "") ? "no" : mid.childNodes[i].childNodes[0].childNodes[3].childNodes[0].childNodes[0].textContent , (mid.childNodes[i].childNodes[0].childNodes[3].childNodes[0].childNodes[1].textContent == "") ? "no" : mid.childNodes[i].childNodes[0].childNodes[3].childNodes[0].childNodes[1].textContent , mid.childNodes[i].childNodes[0].childNodes[3].childNodes[0].childNodes[2].textContent , "\\" ]
        Myarr.push(arr)
    } 
    localStorage.setItem( "middle1" , Myarr)

    const mid2 = document.querySelector(".middle2")
    let Myarr2 = []
    for( let i = 0 ; i < mid2.childElementCount ; i++ ){
        let arr = [ "\\" , mid2.childNodes[i].classList[0] , (mid2.childNodes[i].childNodes[0].childNodes[3].childNodes[1]) ? "liked" : "notLiked" , (mid2.childNodes[i].childNodes[0].childNodes[3].childNodes[0].childNodes[0].textContent == "") ? "no" : mid2.childNodes[i].childNodes[0].childNodes[3].childNodes[0].childNodes[0].textContent , (mid2.childNodes[i].childNodes[0].childNodes[3].childNodes[0].childNodes[1].textContent == "") ? "no" : mid2.childNodes[i].childNodes[0].childNodes[3].childNodes[0].childNodes[1].textContent , mid2.childNodes[i].childNodes[0].childNodes[3].childNodes[0].childNodes[2].textContent , "\\" ]
        Myarr2.push(arr)
    } 
    localStorage.setItem( "middle2" , Myarr2)
    tellItsDone()
})


const restore = document.querySelector(".RestoreChats")
let letsLike;
restore.addEventListener("click",()=>{
    alertMsg("After you restore chats Send a msg.","alertUpdate")
    const midd = document.querySelector( ".middle" )
    let str1 = localStorage.middle1.split("\\")
    let str2 = []
    for(let i = 0 ; i < str1.length ; i++){
        ( str1[i] == "" || str1[i] == "," ) ? "" : str2.push(str1[i])  
    }
    for(let i = str2.length-1 ; i >= 0 ; i-- ){
        str2[i]
        let str3 = str2[i].split(",")
        const allHide = document.createElement("div")
        allHide.setAttribute( "class" , `${str3[1]} allHide` )
        const more = document.createElement("div")
        more.setAttribute("class",(str3[1] == "anshul") ? "more2" : "more")
        midd.insertAdjacentElement("afterbegin",allHide)
        allHide.appendChild(more)
    
        const icon = document.createElement("i")
        icon.setAttribute("class","fa-solid fa-ellipsis dotIcon")
        icon.style.cursor = "pointer"
        const lord = document.createElement("lord-icon")
        lord.setAttribute("class","like-icon")
        lord.setAttribute("src","https://cdn.lordicon.com/biobqpgs.json")
        lord.setAttribute("trigger","hover")
        lord.setAttribute("state","hover-heartbeat")
        
        const span = document.createElement("span")
        span.setAttribute("class","material-symbols-outlined reactIcon")
        span.style.cursor = "pointer"
        span.textContent = "reply"
        const spanColor = document.createElement("div")
        spanColor.setAttribute("class",`span ${str3[1]}Color`)
    
        more.append(icon , lord , span , spanColor)
    
        const Box = document.createElement("div")
        Box.setAttribute("class","repliedBox")
        const like = document.createElement("lord-icon")
        like.setAttribute("class","liked")
        like.setAttribute("src" , "https://cdn.lordicon.com/biobqpgs.json")
        like.setAttribute("trigger","hover")
        letsLike = str3[2]
        if( str3[2] == "liked" ){
            spanColor.append( Box , like )
        }
        else{
            spanColor.appendChild(Box)
        }
    
        const send = document.createElement("div")
        send.setAttribute("class","sendBy")
        const design = document.createElement("div")
        design.setAttribute("class","designText")
        const now = document.createElement("div")
        now.setAttribute("class","nowText")
        now.textContent = str3[5]
    
        send.textContent = ( str3[3] == "no" ) ? "" : str3[3]
        design.textContent = ( str3[4] == "no" ) ? "" : str3[4]
    
        Box.append(send , design , now)
    }
    const midd2 = document.querySelector( ".middle2" )
    let str11 = localStorage.middle2.split("\\")
    let str21 = []
    for(let i = 0 ; i < str11.length ; i++){
        ( str11[i] == "" || str11[i] == "," ) ? "" : str21.push(str11[i])  
    }
    for(let i = str21.length-1 ; i > -1 ; i-- ){
        str21[i]
        let str31 = str21[i].split(",")
        const allHide = document.createElement("div")
        allHide.setAttribute( "class" , `${str31[1]} allHide` )
        const more = document.createElement("div")
        more.setAttribute("class",(str31[1] == "anshul") ? "more2" : "more")
        midd2.insertAdjacentElement("afterbegin",allHide)
        allHide.appendChild(more)
    
        const icon = document.createElement("i")
        icon.setAttribute("class","fa-solid fa-ellipsis dotIcon")
        icon.style.cursor = "pointer"
        const lord = document.createElement("lord-icon")
        lord.setAttribute("class","like-icon")
        lord.setAttribute("src","https://cdn.lordicon.com/biobqpgs.json")
        lord.setAttribute("trigger","hover")
        lord.setAttribute("state","hover-heartbeat")
        
        const span = document.createElement("span")
        span.setAttribute("class","material-symbols-outlined reactIcon")
        span.style.cursor = "pointer"
        span.textContent = "reply"
        const spanColor = document.createElement("div")
        spanColor.setAttribute("class",`span ${str31[1]}Color`)
    
        more.append(icon , lord , span , spanColor)
    
        const Box = document.createElement("div")
        Box.setAttribute("class","repliedBox2")
        const like = document.createElement("lord-icon")
        like.setAttribute("class","liked")
        like.setAttribute("src" , "https://cdn.lordicon.com/biobqpgs.json")
        like.setAttribute("trigger","hover")
    
        if( str31[2] == "liked" ){
            spanColor.append( Box , like )
        }
        else{
            spanColor.appendChild(Box)
        }
    
        const send = document.createElement("div")
        send.setAttribute("class","sendBy2")
        const design = document.createElement("div")
        design.setAttribute("class","designText2")
        const now = document.createElement("div")
        now.setAttribute("class","nowText2")
        now.textContent = str31[5]
    
        send.textContent = ( str31[3] == "no" ) ? "" : str31[3]
        design.textContent = ( str31[4] == "no" ) ? "" : str31[4]
    
        Box.append(send , design , now)
    }
})