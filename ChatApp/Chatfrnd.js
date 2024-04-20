let middleOrMiddle2 = 0;
let tellme1 = false
let tellme2 = false
let save = {
    whoSend : "",
    designed : "" 
};
let replyName 
// Username
////////////////////////////////
// Username

let Bothname = localStorage.username
let name11 = Bothname.split(",")[0]
let name21 = Bothname.split(",")[1] ?? "Anonymous"
let user1 = document.querySelector(".username")
let user2 = document.querySelector(".username2")
user1.textContent = name11
user2.textContent = name21

///////////////////////////////////////////////
let anshulSpanColor = "black"
let anshulSpanbgColor = "white"
let vidhiSpanColor = "black"
let vidhiSpanbgColor = "white"
async function getTheme(url,data){
    try{
        url = await fetch("theme.json")
        data = await url.json()

        const collection = document.querySelector(".collection")
        for( let i = 0; i < data.length ; i++ ){
            if(i==0){
                const themeName = document.createElement("span")
                themeName.setAttribute("class","default")
                themeName.textContent = data[i].imgName
                collection.appendChild(themeName)
                themeName.addEventListener("click",()=>{
                    document.body.style.background = "linear-gradient(45deg, #2980b9 1%, #6dd5fa 27%, #ffffff 96%)"
                })
            }
            else{
                const create = document.createElement("div")
                create.setAttribute("class","create")
                const img = document.createElement("img")
                img.setAttribute("class","themeImg")
                img.setAttribute("src",`${data[i].src}`)
                const themeName = document.createElement("span")
                themeName.textContent = data[i].imgName
                create.append(img,themeName)
                collection.appendChild(create)
    
                create.addEventListener( "click" , (e)=>{
                    document.body.style.backgroundImage = `url(${data[i].src})`
                    document.querySelector(".username").style.color = data[i].avatar
                    document.querySelector(".username2").style.color = data[i].avatar
                    document.querySelector(".middle").style.color = data[i].middle
                    document.querySelector(".middle2").style.color = data[i].middle
    
                    // document.querySelectorAll(".bars").forEach((each)=> each.style.color = `${data[i].nav}`  )
                    document.querySelector(".bars").style.color = `${data[i].nav}`  
                    document.querySelector("h1").style.color = `${data[i].nav}`  
    
                    vidhiSpanbgColor = `${data[i].vidhi.background}`
                    vidhiSpanColor = `${data[i].vidhi.color}`
                    anshulSpanbgColor = `${data[i].anshul.background}`
                    anshulSpanColor = `${data[i].anshul.color}`
    
                    document.querySelectorAll(".repliedBox").forEach((each)=> {
                        if(each.parentElement.classList[1] == "anshulColor" ){
                            each.style.color = `${data[i].anshul.color}`
                            each.style.background = `${data[i].anshul.background}`
                        }
                        else{
                            each.style.color = `${data[i].vidhi.color}`
                            each.style.background = `${data[i].vidhi.background}`
                        }
                    })
                    document.querySelectorAll(".repliedBox2").forEach((each)=> {
                        if(each.parentElement.classList[1] == "anshulColor" ){
                            each.style.color = `${data[i].anshul.color}`
                            each.style.background = `${data[i].anshul.background}`
                        }
                        else{
                            each.style.color = `${data[i].vidhi.color}`
                            each.style.background = `${data[i].vidhi.background}`
                        }
                    })
                    document.querySelectorAll(".anshulColor").forEach((each)=> each.style.color = data[i].anshul)
                } )
            }
    }
    }
    catch(error){
        console.log(error)
    }
}
getTheme()
///////////////////////////////////////////////
const input1 = document.querySelector("#input")
const input2 = document.querySelector("#input2")
const btn1 = document.querySelector("#btn")
const btn2 = document.querySelector("#btn2")
const middle21 = document.querySelector(".middle2")
const middle = document.querySelector(".middle")

function createMsg(name , nameSpan , value , where , reactClicked ,setVal, getVal){

    let whereFrom = where

    const moreCont = name
    where = document.querySelector(`.${where}`)
    let name2 = name

    name = document.createElement("div")
    name.setAttribute("class",`${name2} allHide`)
    where.appendChild(name)

    const moreDiv = document.createElement("div")

    moreDiv.setAttribute( "class" , ( moreCont == "vidhi" ) ? "more" : "more2" )
    name.appendChild(moreDiv)

    nameSpan = document.createElement("div")
    nameSpan.setAttribute("class", `span ${name2}Color` )

    let repliedBox;
    let designText;
    let sendBy;
    let nowTextNoReply
    if (whereFrom == "middle"){
        repliedBox = document.createElement("div")
        repliedBox.setAttribute("class" , "repliedBox" )
        designText = document.createElement("div")
        designText.setAttribute("class","designText")
        sendBy = document.createElement("div")
        sendBy.setAttribute("class", "sendBy")
        nowTextNoReply = document.createElement("div")
        nowTextNoReply.setAttribute("class","nowText")
    }
    else{
        repliedBox = document.createElement("div")
        repliedBox.setAttribute("class" , "repliedBox2" )
        designText = document.createElement("div")
        designText.setAttribute("class","designText2")
        sendBy = document.createElement("div")
        sendBy.setAttribute("class", "sendBy2")
        nowTextNoReply = document.createElement("div")
        nowTextNoReply.setAttribute("class","nowText2")
    }

    repliedBox.append( sendBy , designText , nowTextNoReply )
    nameSpan.appendChild( repliedBox )
    nowTextNoReply.textContent = `${value}`

    let react = document.createElement("span")
    react.setAttribute("class","material-symbols-outlined reactIcon")
    react.style.cursor = "pointer"
    react.textContent = "reply"

    if(name2 == "anshul"){
        repliedBox.style.background = anshulSpanbgColor
        repliedBox.style.color = anshulSpanColor
    }
    else{
        repliedBox.style.background = vidhiSpanbgColor
        repliedBox.style.color = vidhiSpanColor
    }

    let like = document.createElement("lord-icon")
    like.setAttribute("class","like-icon")
    like.setAttribute("src","https://cdn.lordicon.com/biobqpgs.json")
    like.setAttribute("trigger","hover")
    like.setAttribute("state" , "hover-heartbeat")

    let dot = document.createElement("i")
    dot.setAttribute("class","fa-solid fa-ellipsis dotIcon")
    dot.style.cursor = "pointer"
// append
    if(where != "middle2"){
        moreDiv.append(dot , like , react , nameSpan)
    }

    const allLikes = document.querySelectorAll(".like-icon")
    let createlike = document.createElement("lord-icon")
    createlike.setAttribute("class","liked")
    createlike.setAttribute("src","https://cdn.lordicon.com/biobqpgs.json")
    createlike.setAttribute("trigger","hover")

    let likedOrNot = false
    let selected
    allLikes.forEach( (each)=>{
        each.addEventListener( "click" , (e)=>{
            likedOrNot = ( likedOrNot == true ) ? false : true
            selected = e.target.parentElement.childNodes[3]
            if( likedOrNot ){
                if(selected.childNodes[1] == undefined){
                    selected.appendChild(createlike)
                }
            }
        } )
    } )

    let dotOrNot = false

    const allDots = document.querySelectorAll(".dotIcon")
    const createDotMsg = document.createElement("div")
    const copy = document.createElement("div")

    createDotMsg.setAttribute("class","dotMsg")
    copy.setAttribute("class","copyMsg")
    copy.textContent = "Copy"
    createDotMsg.appendChild(copy)


    const each = document.querySelectorAll(".material-symbols-outlined")
    let reactVal;
    let nextSib = document.body;
    tellme1 = false
    tellme2 = false

    let replyName
    each.forEach( (each)=>{
        each.addEventListener( "click" , (e)=>{
            if(e.target.parentElement.parentElement.parentElement.className == "middle"){
                tellme1 = true
            } 
            if(e.target.parentElement.parentElement.parentElement.className == "middle2"){
                tellme2 = true
            } 

            middleOrMiddle2 = e.target.parentElement.parentElement.parentElement.className
            reactVal = e.target.parentElement.childNodes[3].childNodes[0].childNodes[2].innerHTML
            nextSib = e.target.parentElement.parentElement.parentElement.nextElementSibling

            if(e.target.parentElement.parentElement.parentElement.className == "middle"){
                const createBox = document.createElement("div")
                createBox.setAttribute("class","replyBox")

                const repliedTo = document.createElement("div")
                repliedTo.setAttribute("class","replied")

                const replyMsgText = document.createElement("span")
                replyMsgText.setAttribute("class","replyMsgText")

                repliedTo.appendChild(replyMsgText)
                createBox.appendChild(repliedTo)

                const create = document.createElement("div")
                create.setAttribute("class","replyMsg")

                let cross = document.createElement("i")
                cross.setAttribute("class","fa-solid fa-xmark cross")
                repliedTo.appendChild(cross)

                createBox.appendChild(create)
                if(!(document.querySelector(".replyBox"))){
                    nextSib.appendChild(createBox)
                    document.querySelector(".replyMsg").textContent = reactVal
                    replyName = ( e.target.parentElement.parentElement.className.split(" ")[0] == "vidhi" ) ? name11 : `${name21}`
                    document.querySelector(".replyMsgText").textContent = replyName
                }
                else{
                    document.querySelector(".replyMsg").textContent = reactVal
                    replyName = ( e.target.parentElement.parentElement.className.split(" ")[0] == "vidhi" ) ? name11 : `${name21}`
                    document.querySelector(".replyMsgText").textContent = replyName
                }

                cross = document.querySelector(".cross")
                cross.addEventListener("click",(eCross)=>{
                    eCross.target.parentElement.parentElement.parentElement.removeChild(eCross.target.parentElement.parentElement)
                    tellme1 = false
                    tellme2 = false
                })
            }
            if(e.target.parentElement.parentElement.parentElement.className == "middle2"){
                const createBox = document.createElement("div")
                createBox.setAttribute("class","replyBox2")

                const repliedTo = document.createElement("div")
                repliedTo.setAttribute("class","replied2")

                const replyMsgText = document.createElement("span")
                replyMsgText.setAttribute("class","replyMsgText2")
                repliedTo.appendChild(replyMsgText)

                createBox.appendChild(repliedTo)

                const create = document.createElement("div")
                create.setAttribute("class","replyMsg2")

                createBox.appendChild(create)

                let cross = document.createElement("i")
                cross.setAttribute("class","fa-solid fa-xmark cross2")
                repliedTo.appendChild(cross)

                if(!(document.querySelector(".replyBox2"))){
                    nextSib.appendChild(createBox)
                    document.querySelector(".replyMsg2").textContent = reactVal
                    replyName = ( e.target.parentElement.parentElement.className.split(" ")[0] == "vidhi" ) ? `${name21}` : `${name11}`
                    document.querySelector(".replyMsgText2").textContent = replyName
                }
                else{
                    document.querySelector(".replyMsg2").textContent = reactVal
                    replyName = ( e.target.parentElement.parentElement.className.split(" ")[0] == "vidhi" ) ? `${name21}` : `${name11}`
                    document.querySelector(".replyMsgText2").textContent = replyName
                }

                cross = document.querySelector(".cross2")
                cross.addEventListener("click",(eCross)=>{
                    console.log(eCross.target.parentElement.parentElement.parentElement)
                    eCross.target.parentElement.parentElement.parentElement.removeChild(eCross.target.parentElement.parentElement)
                    tellme1 = false
                    tellme2 = false
                })
            }
        } )
    } )

    if(reactClicked){
            let MainReplyBox = document.querySelector( (middleOrMiddle2 == "middle") ? ".replyBox" : ".replyBox2" )
            sendBy.textContent = `>>${MainReplyBox.childNodes[0].childNodes[0].textContent}`
            designText.textContent = `"${MainReplyBox.childNodes[1].textContent}"`
            if(setVal){
                    save.whoSend = `${document.querySelector( (middleOrMiddle2 == "middle") ? ".replyBox" : ".replyBox2" ).childNodes[0].childNodes[0].textContent}`,
                    save.designed = `${document.querySelector( (middleOrMiddle2 == "middle") ? ".replyBox" : ".replyBox2" ).childNodes[1].textContent}`
            }
            document.querySelector( (middleOrMiddle2 == "middle") ? ".lower" : ".lower2" ).removeChild(document.querySelector( (middleOrMiddle2 == "middle") ? ".replyBox" : ".replyBox2" ))
        }
        if(getVal){
            sendBy.textContent = (save.whoSend == "") ? "" : `>>${save.whoSend}` 
            designText.textContent = (save.designed == "") ? "" : `"${save.designed}"`
            save.whoSend = ""
            save.designed = ""
        }
    }

let anshul = "anshul"
let anshulSpan = "anshulSpan"
let vidhi = "vidhi"
let vidhiSpan = "vidhiSpan"
let one = "middle"
let two = "middle2"
let reactClickedNo = false
let reactClickedYes = true

let all
btn1.addEventListener("click",()=>{
    let val = input1.value
    if(val != ""){
        input1.value = ""
        createMsg(vidhi , vidhiSpan , val , one , ( tellme1 ) ? reactClickedYes : reactClickedNo , true , false )
        createMsg(anshul , anshulSpan , val , two , ( tellme1 ) ? reactClickedYes : reactClickedNo , false , true )
        all = document.querySelectorAll(".allHide")
    }
})

btn2.addEventListener("click",()=>{
    let val = input2.value
    if(val != ""){
        input2.value = ""
        createMsg(vidhi , anshulSpan , val , two , ( tellme2 ) ? reactClickedYes : reactClickedNo , true , false )
        createMsg(anshul , vidhiSpan , val , one , ( tellme2 ) ? reactClickedYes : reactClickedNo , false , true )
        all = document.querySelectorAll(".allHide")
    }
})

const edit = document.querySelectorAll(".img")
var tellme = false;
edit.forEach( (each)=>{
    let imgsrc;
    each.addEventListener( "click" , ()=>{
        tellme = (tellme) ? false : true
        if(tellme){
            async function getAvatar(url,data){
                try{
                    url = await fetch("avatar.json")
                    data = await url.json()
                    const div = document.createElement("div")
                    if(each == edit[0]){
                        div.setAttribute("class","av-div")
                    }
                    else{
                        div.setAttribute("class","av-div2")
                    }
                    each.appendChild(div)

                    for( let i = 0 ; i < data.length ; i++ ){
                        const img = document.createElement("img")
                        img.style.borderRadius = "50%"
                        img.setAttribute("src",`${ data[i].avatar }`)
                        img.setAttribute("class","imgAv")
                        div.appendChild(img)

                        if(each == edit[0]){
                            img.addEventListener( "click" , ()=>{
                                const avimg = document.querySelector(".avimg")
                                imgsrc = `${data[i].avatar}`
                                avimg.setAttribute("src",imgsrc) 
                            } )
                        }
                        else{
                            img.addEventListener( "click" , ()=>{
                                const avimg = document.querySelector(".avimg2")
                                imgsrc = `${data[i].avatar}`
                                avimg.setAttribute("src",imgsrc) 
                            } )
                        }
                    }
                }
                catch(error){
                    console.log(error)
                }
            }
            getAvatar() 
        }
        else {
            const a = document.querySelectorAll(".img")
            const b = document.querySelectorAll(".av-div")
            const c = document.querySelectorAll(".av-div2")
            for( let i = 0 ; i < b.length ; i++ ){
                a[0].removeChild(b[i])
            }
            for( let i = 0 ; i < c.length ; i++ ){
                a[1].removeChild(c[i])
            }
        }
    } )
} )