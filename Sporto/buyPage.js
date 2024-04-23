const content = JSON.parse(localStorage.getItem("HighOrderContent"))
    console.log(content.brand)
    const img = document.querySelector('img')
    img.setAttribute('src' , `${content.image}`)

    const price = document.querySelector('.price')
    price.innerHTML = content.price
    
    const Name = document.querySelector('.name')
    Name.innerHTML = content.name
    
    const btn = document.querySelector(".BuyBtn")

    
    btn.addEventListener('click' , ()=>{
        function AlreadySelected(){
            const icon = document.querySelector('lord-icon')
            icon.style.display = 'block'
            setTimeout( ()=>{
                btn.style.fontSize = '1.1vmax'
                btn.setAttribute('id','animate')
                btn.innerHTML = `You have already selected this Item <a href = "sporto.html" style="margin-right : 0.8vmax">Click Here</a> to enjoy More Shopping. `
            } , 1000 )
        }

        if(localStorage.key(0) == "selected"){
            let select = JSON.parse(localStorage.selected)
            if(select.name == content.name){
                AlreadySelected()
            }
        }
        else{
            const icon = document.querySelector('lord-icon')
            icon.style.display = 'block'
            setTimeout( ()=>{
                btn.style.fontSize = '1.1vmax'
                btn.setAttribute('id','animate')
                btn.innerHTML = `Your Tortal Price is <b>${content.price}</b>. We will shortly Ship your Item. It will be reached to you as soon as Possible
                
                Enjoy More Shopping<a href = "moreDetails.html">Click Here</a>` 
        
            } , 2600 )
            const selected = {
                name : content.name,
                image : content.image,
                brand : content.brand,
                price : content.price
            }
            localStorage.setItem("selected",JSON.stringify(selected))
        }

    })