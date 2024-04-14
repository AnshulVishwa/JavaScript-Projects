const details = document.querySelector('.Details')
let Arr = []
let remove = document.querySelector('.main-box')
const CART = document.getElementById('cart-icon')

async function AllDetails( url , data ){
    try{

        url = await fetch("try.json")
        data = await url.json()
        // console.log(data)
        for(let i = 0 ; i < data.length ; i++){

           

            // console.log(data[i])
            let create = document.createElement('div')
            create.setAttribute('class' , 'create')
            create.setAttribute('id',`create${i}`)

            let img = document.createElement('div')
            img.setAttribute('class' , 'image')
            img.innerHTML = `<img class = "image" src = "${data[i].imgSrc}">`

            let prname = document.createElement('div')
            prname.setAttribute('class' , 'prname')
            prname.innerHTML = data[i].productName

            let price = document.createElement('div')
            price.innerHTML = data[i].price

            details.appendChild(create)
            create.append(img , prname , price)

            // Bada Dabba

        let box = document.createElement('div')
        box.setAttribute('class' , 'main-box')

        let image = document.createElement('div')
        image.setAttribute('class','main-bimg' )

        let productName = document.createElement('div')
        productName.setAttribute('class' , 'main-product')

        let bprice = document.createElement('div')
        bprice.setAttribute('class' , 'main-bprice')

        let description = document.createElement('div')
        description.setAttribute('class' , 'main-bdescription')

        let cancel = document.createElement('div')
        cancel.setAttribute('class','cancel')
        cancel.innerHTML = `<i class="fa-solid fa-xmark"></i>`

        let buy = document.createElement('button')
        buy.setAttribute('class' , 'buy')
        buy.setAttribute('id' , 'buy')

        const all = document.querySelectorAll(".create")
        console.log(all)

        box.append(image,productName,bprice,description,buy,cancel)
        
        all.forEach( (each)=>{

            
            
            each.addEventListener('click' , ()=>{
                if (each.id == `create${i}`){
                    if((buy.hasAttribute('disabled'))){
                        buy.innerHTML = 'Added'
                    }else{
                        buy.innerHTML = 'Add to Cart'
                    }
                    // buy.innerHTML = 'Add to Cart'
                    document.body.appendChild(box)
                    image.innerHTML = `<img class = "main-bimg" src = "${data[i].imgSrc}">`
                    productName.innerHTML = data[i].productName
                    bprice.innerHTML = data[i].price
                    description.innerHTML = data[i].description
                    
                    buy.addEventListener('click' , ()=>{
                        Arr.push(data[i])
                        console.log(Arr)
                        buy.setAttribute('disabled' , '')
                        buy.innerHTML = 'Added'
                        console.log(Arr.length)
                        
                        CART.innerHTML = `<sup>${Arr.length}</sup>`
                        
                    })
                    
                }
            })
        } )
        cancel.addEventListener('click' , ()=>{
            document.body.removeChild(document.querySelector('.main-box'))
        })
    }
    const navCart = document.querySelector('#anchor')
    
    console.log(navCart)


    navCart.addEventListener('click' , ()=>{
        let navCreate = document.createElement('div')
        navCreate.setAttribute('class' , 'cartBox')

        document.body.appendChild(navCreate)
        
        let slideBTNS = document.createElement('div')
        let slideBtn1 = document.createElement('button')
        let slideBtn2 = document.createElement('button')
        
        slideBTNS.setAttribute('class' , 'slideBTNS')
        slideBtn1.setAttribute('class' , 'slideBtn1')
        slideBtn2.setAttribute('class' , 'slideBtn2')
        
        for(let i = 0 ; i<Arr.length ; i++){
            let main = document.createElement('div')

            navCreate.append(main , slideBTNS)
            // console.log(i)

            let mainIMG = document.createElement('div')
            let mainNAME = document.createElement('div')
            let mainPRICE = document.createElement('div')
            let lower = document.createElement('div')
            
            let mainBTN1 = document.createElement('button')
            let mainBTN2 = document.createElement('button')
            
            main.append(mainIMG , mainNAME , mainPRICE , lower )
            lower.append(mainBTN1 , mainBTN2)
            slideBTNS.append(slideBtn1 , slideBtn2)

            slideBtn1.innerHTML = '<i class="fa-solid fa-circle-left"></i>'
            slideBtn2.innerHTML = '<i class="fa-solid fa-circle-right"></i>'

            main.setAttribute('class' , 'main')
            mainIMG.setAttribute('class' , 'mainIMG')
            mainNAME.setAttribute('class' , 'mainNAME')
            mainPRICE.setAttribute('class' , 'mainPRICE')
            lower.setAttribute('class' , 'lower')
            mainBTN1.setAttribute('class' , 'mainBTN1 mainBTN')
            
            mainBTN2.setAttribute('class' , 'mainBTN2 mainBTN')
            
            mainIMG.innerHTML = `<img id="mainIMG" src="${Arr[i].imgSrc}">`
            mainNAME.innerHTML = Arr[i].productName
            mainPRICE.innerHTML = Arr[i].price
            mainBTN1.innerHTML = 'Added to Cart'
            mainBTN2.innerHTML = '<a href = " BuyPage.html ">BUY THIS ITEM</a>'

        }
        let cross = document.createElement('div')
        navCreate.appendChild(cross)
        cross.setAttribute('class' , 'cross')
        cross.innerHTML = '<i id="cross" class="fa-solid fa-circle-xmark"></i>'
        const allMains = document.querySelectorAll('.main')
        const prev = document.querySelector('.slideBtn1')
        const next = document.querySelector('.slideBtn2')
        let kya = document.createElement('div')
                kya.setAttribute('class' , 'kya')
                kya.innerHTML = '<span class="kya-span">Add Items To Cart & Enjoy Shopping</span>'
                if(Arr.length == 0){
            navCreate.append(kya)
            setTimeout( ()=>{
                navCreate.removeChild(kya)
                document.body.removeChild(document.querySelector('.cartBox'))
            },2000 )
        }
        
        
        allMains.forEach( ( slide , index )=>{
            slide.style.left = `${index * 100}%`
        } )
        
        var counter = 0;
        prev.addEventListener( 'click' , ()=>{
            counter--
            
            if(counter<0){
                counter = 0;
            }if(counter == Arr.length){
                counter = Arr.length
                // console.log("HERE" , Arr.length)
            }
            // console.log(counter)
            allMains.forEach( (slide)=>{
                slide.style.transform = `translateX(-${counter * 100}%)`
            } )
        } )
        next.addEventListener( 'click' , ()=>{
            counter++
            if(counter<0){
                counter = 0;
            } else if(counter > Arr.length){
                counter = Arr.length
            }
            // console.log(counter)
            allMains.forEach( (slide)=>{
                slide.style.transform = `translateX(-${counter * 100}%)`
            } )
        } )
        // console.log(counter)
        document.querySelector("#cross").addEventListener('click' , ()=>{
            document.body.removeChild(document.querySelector('.cartBox'))
            console.log('Again')
        })
        
    })
    

    
}

    catch(error){
        document.body.innerHTML = "E:Something went Wrong"
    }
}

AllDetails()

// export {Arr}