// Declarations
let nameInput = document.getElementById("fullnameInput")
let aliasInput = document.getElementById("aliasInput")
const submitBtn = document.querySelector(".submitBtn")
const alertDiv = document.querySelector(".alert")
let aliasValue = null;

// Alert Functions
function alert( text , color , color2 , symbol ){
    // Symbol for more Designing
    const create = document.createElement("i")
    create.className = symbol
    // Displaying alert
    alertDiv.style.display = "flex"
    // Setting Content for alert
    alertDiv.textContent = text
    // adding symbol to alert
    alertDiv.appendChild(create)
    // Styling alert
    alertDiv.style.backgroundImage = `radial-gradient( ${color2}, ${color})`
    alertDiv.style.boxShadow = `0 0 10px ${color} , inset 0 0 10px ${color}`
    // After 4s Removing alert, setting it again to none
    setTimeout( ()=>{
        alertDiv.style.display = "none"
    } , 4000 )
}

// if following values are null, dont run this part.
if( nameInput != null && submitBtn != null ){

    // automated value of alias
    // if the input value is filled then only
    nameInput.addEventListener( "change" , () => {
        // split the value in two parts First name and Last name, add First name in alias
        aliasValue = nameInput.value.split(" ")[0]
        aliasInput.value = aliasValue
        console.log(aliasValue)
    } )
    
    // Submit Button 
    submitBtn.addEventListener( "click" , (e)=>{
        e.preventDefault();
        // Trim the input value
        nameInput.value = nameInput.value.trim()
        // Checking for edge cases if value is null, empty, or value consist number
        const regexInt = /\d/
        if( nameInput.value == null || nameInput.value == "" ){
            alert( "Enter your name", "#C62828" , "#EF9A9A" , "fa-solid fa-exclamation" )
        } 
        else if( regexInt.test(nameInput.value) ){
            alert( "Enter valid name", "#C62828" , "#EF9A9A" , "fa-solid fa-hashtag" )
        }
        else if( aliasInput.value == null || aliasInput.value == "" ){
            alert( "Enter Alias" , "#C62828" , "#EF9A9A" , "fa-solid fa-shield-halved" )
        }
        else if( regexInt.test(aliasInput.value) ){
            alert( "Enter valid alias", "#C62828" , "#EF9A9A" , "fa-solid fa-hashtag" )
        }
        else{
            alert(`Thanks, ${aliasInput.value}` , '#673ab7' , "#ede7f6" , "fa-regular fa-chess-king")
            sessionStorage.setItem("alias",aliasInput.value)
            setTimeout( ()=>{
                window.location.href = "mainPage.html"
            } , 2000 )
        }
    } )
}