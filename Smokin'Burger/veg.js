// Cart Option
const number = document.querySelector(".number")
const cart = document.querySelector(".cart-option")

let length = JSON.parse(localStorage.getItem( "cart_items" )).length
number.textContent = length

function createElement( cart_values ){
    console.log(cart_values)
    const create = document.createElement("div")
    create.classList.add("cart_box")
    cart_values.forEach( ( each ) => {    
        const boxInside = document.createElement("div")
        boxInside.classList.add("boxInside")
        const burgerName = document.createElement("h2")
        burgerName.classList.add("burgerName")
        burgerName.textContent = each.burger
        const toppings = document.createElement("ul")
        if( each.toppings.length != 0 ){
            each.toppings.map( ( v ) => {
                const list = document.createElement("li")
                list.textContent = v
                toppings.appendChild(list)
            } )
        }
        const quantity = document.createElement("span")
        quantity.classList.add("quantity")
        quantity.textContent = each.quantity
        const price = document.createElement("span")
        price.classList.add("price")
        price.textContent = each.price
        cart.appendChild(create)
        create.appendChild(boxInside)
        boxInside.append(burgerName , toppings , quantity , price)
    } )
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
