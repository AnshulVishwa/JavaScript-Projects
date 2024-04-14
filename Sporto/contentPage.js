const searchLogo = document.querySelector('#search')
const navSearch = document.querySelector('.navSearch')
const parent = document.querySelector('#none')


searchLogo.addEventListener("mouseover" , ()=>{
    navSearch.style.display = "block"
    navSearch.style.transitionDuration = "1s"
})
searchLogo.addEventListener("mouseout" , ()=>{
    // navSearch.style.display = "none"
})
searchLogo.addEventListener("click" , ()=>{
    navSearch.value = ''
    setTimeout( ()=>{
        navSearch.style.display = "none"
        
    } , 2000 )
})

let content = JSON.parse(localStorage.getItem("HighOrderContent"))
    let Highname = content.name
    let Highimage = content.image
    let HighBrand = content.brand
    let HighPrice = content.price

let imageBox = document.querySelector(".imageBoxIMG")
let brandname = document.querySelector(".brandname")
let hname = document.querySelector(".name")
let price = document.querySelector(".price")
let brandShort = document.querySelector(".brandShort")

imageBox.setAttribute('src' , `${Highimage}`)
brandname.innerHTML = `${HighBrand}`
hname.innerHTML = `${Highname}`
price.innerHTML = `${HighPrice}`
brandShort.innerHTML = `${HighBrand}`

const button = document.querySelector('button')
button.addEventListener('click',()=>{
    window.location.href = "buyPage.html"
})