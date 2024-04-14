async function allContentCars(url , data){
    url = await fetch( "content.json" )
    data = await url.json()
    for(let i = 0 ; i < data.length ; i++){
        
    let create = document.createElement('div')
    create.setAttribute('class','create')

    let createtdiv1 = document.createElement('div')
    createtdiv1.setAttribute('class','createtdiv1')
    
    let creatediv2 = document.createElement('div')
    creatediv2.setAttribute('class','creatediv2')
    
    let createTop = document.createElement('div')
    createTop.setAttribute('class','createTop')
    
    let createLeft = document.createElement('div')
    createLeft.setAttribute('class','createLeft')
    
    let createRight = document.createElement('div')
    createRight.setAttribute('class','createRight')
    
    let img = document.createElement('img')
    img.setAttribute("class" , "img")
    
    let Mainname = document.createElement('div')
    Mainname.setAttribute('class','Mainname')

    let Speed = document.createElement('div')
    Speed.setAttribute('class','Speed')
    
    let brand = document.createElement('div')
    brand.setAttribute('class','brand')

    let content = document.querySelector('.content')

    content.append(create)
    create.append(createtdiv1 , creatediv2)
    createtdiv1.append(createTop)
    creatediv2.append(createLeft)
    creatediv2.append(createRight)
    createTop.append(brand)
    createLeft.append(img)
    createRight.append(Mainname , Speed)

    brand.innerHTML = data[i].brandname
    img.setAttribute('src',`${data[i].main}`)
    Mainname.innerHTML = `<b style="font-size : 2.5vmax">${data[i].name}</b>` 
    Speed.innerHTML = `Top Speed ~ ${data[i].speed}`

    create.addEventListener("click" , ()=>{
        let itemSelected = {
            "name" : `${data[i].name}`,
            "price" : `${data[i].price}`,
            "brandname" :`${data[i].brandname}` ,
            "speed" : `${data[i].speed}`,
            "fuel" : `${data[i].fuel}`,
            "engine" : `${data[i].engine}`,
            "power" : `${data[i].power}`,
            "topview" : `${data[i].topview}`,
            "left" : `${data[i].left}`,
            "main" : `${data[i].main}`,
            "enginedescription" : `${data[i].enginedescription}`,
            "engineimage" : `${data[i].engineimage}`,
            "powerdescription" : `${data[i].powerdescription}`,
            "official" : `${data[i].official}`
        }
        if(localStorage.key(0) == "itemSelected"){
            localStorage.removeItem("itemSelected")
        }
        localStorage.setItem("itemSelected",JSON.stringify(itemSelected))
        window.location.href = "detailsPage.html"
    })
    }
}
allContentCars()

let login = document.querySelector(".login")
login.addEventListener( 'click' , ()=>{
    console.log("Hii")
    window.location.href = "login.html"
} )