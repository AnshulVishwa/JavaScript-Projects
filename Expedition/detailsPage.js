const div = document.querySelector('.div')
    setTimeout( ()=>{
        div.style.display = 'none'
    } , 3000 )
    const data = JSON.parse(localStorage.getItem("itemSelected"))
    console.log
    let h1 = document.querySelector('.h1')
    let main = document.querySelector('.main')
    let Ctop = document.querySelector('.top')
    let left = document.querySelector('.left')

    let name = document.querySelector('.name')
    let brandname = document.querySelector('.brandname')
    let engine = document.querySelector('.engine')
    let power = document.querySelector('.power')
    let fuel = document.querySelector('.fuel')
    let speed = document.querySelector('.speed')
    let price = document.querySelector('.price')
    let knowMore = document.querySelector('.knowMore')

    h1.innerHTML = data.brandname
    main.setAttribute('src',`${data.main}`)
    Ctop.setAttribute('src',`${data.topview}`)
    left.setAttribute('src',`${data.left}`)

    name.innerHTML = `<b>${data.name}</b>`
    brandname.innerHTML = `<b>${data.brandname}</b>`
    engine.innerHTML = `Engine : ${data.engine}`
    power.innerHTML = `Power : ${data.power}`
    fuel.innerHTML = `Fuel Consumption : ${data.fuel}`
    speed.innerHTML = `Top speed : ${data.speed}`
    price.innerHTML = `${data.price}`
    knowMore.innerHTML = "want more Details?<br><a>Click Here</a> Move to the Official website."
    let a = document.querySelector("a")
    a.setAttribute('href' , `${data.official}`)
    //////////////////////////////////////////

    let allImg = document.querySelectorAll("img")
    let counter = 0;
    setInterval( ()=>{
        if(counter<2){
            counter++
        } else if(counter => 3){
            counter = 0;
        }
        allImg.forEach( (each,index)=>{
            
            each.style.left = `${100*index}%`
            each.style.transform = `translateX(-${counter*100}%)`
        } )
    } , 3000 )

    let Mengine = document.querySelector('.engine')
    let Mpower = document.querySelector('.power')

    Mpower.style.cursor = "pointer"
    Mengine.style.cursor = "pointer"

    Mengine.addEventListener("click",()=>{
        localStorage.setItem( "more" , `engine`)
        window.location.href = "more.html"
        
    })
    Mpower.addEventListener("click",()=>{
        localStorage.setItem( "more" , `power`)
        window.location.href = "more.html"
        
    })
    