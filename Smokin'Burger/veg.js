// Cart Intersection
const observer = new IntersectionObserver( ( entries ) => {
    entries.forEach( (each , i) => {
        if( each.boundingClientRect.left == 1488 ){
            console.log(each)
        }
    } ) 
} )

// Cart Option
const number = document.querySelector(".number")
const cart = document.querySelector(".cart-option")

let length = JSON.parse(localStorage.getItem( "cart_items" )).length
number.textContent = length

function createElement( cart_values ){
    const create = document.createElement("div")
    create.classList.add("cart_box")
    const iconDiv = document.createElement("div")
    iconDiv.classList.add("icon_div")
    create.appendChild(iconDiv)
    
    let SumPrice = cart_values.reduce((sum, v) => sum + parseFloat(v.price.replace("$", "")), 0);

    cart_values.forEach( ( each , i ) => { 
        SumPrice += parseFloat(each.price.split("$")[1])   
        const boxInside = document.createElement("div")
        observer.observe(boxInside)
        boxInside.classList.add("boxInside")
        boxInside.id = `box${i+1}`
        const burgerName = document.createElement("h3")
        burgerName.classList.add("burgerName")
        burgerName.textContent = `Burger : ${each.burger}`
        const toppings = document.createElement("ul")
        if( each.toppings.length != 0 ){
            toppings.innerHTML = "<b>Toppings :</b>"
            each.toppings.map( ( v ) => {
                const list = document.createElement("li")
                list.textContent = v
                toppings.appendChild(list)
            } )
        }
        const quantity = document.createElement("span")
        quantity.classList.add("quantity")
        quantity.textContent = `Quantity : ${each.quantity}`
        const price = document.createElement("span")
        price.classList.add("price")
        price.textContent = `Price : ${each.price}`
        cart.appendChild(create)
        create.appendChild(boxInside)
        boxInside.append(burgerName , toppings , quantity , price)
    } )
    for( let i = 0 ; i < cart_values.length ; i++ ){
        const icon = document.createElement("span")
        icon.innerHTML = `<i id="icon${i+1}" class="fa-solid fa-circle"></i>`
        iconDiv.appendChild(icon)
    }
}

let showCart = false;

cart.addEventListener( "click" , () => {
    number.textContent = length
    showCart = (showCart) ? false : true
    const cart_values = JSON.parse(localStorage.getItem( "cart_items" ))
    
    if( !cart_values ){
        number.textContent = "0"
        return;
    }
    if( showCart ){
        if( !cart.children[2] || length != cart_values.length ){
            length = cart_values.length
            if( cart.children[2] ){
                cart.removeChild(document.querySelector(".cart_box"))
            }
            createElement(cart_values)
        }
        else{
            document.querySelector(".cart_box").style.display = "flex"
        }
    }
    else{
        document.querySelector(".cart_box").style.display = "none"
    }
} )
