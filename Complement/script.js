const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const tell = document.querySelector(".plusOrMinus")
const show = document.querySelector(".show")
const btn = document.querySelector(".btn")
let comp = document.querySelector("#addUsing")
const tellDiv = document.querySelector("#tell")

function DecimalConversion( num , result ){
    num = String(num)
    result = 0 
    for( let i = num.length-1 , j = 0 ; i >= 0 || j < num.length ; i-- , j++ ){
        result += num[i]*Math.pow( 2 , j )
    }
    return result
}

function BinaryConversion( num , result ){
    result = String(result)
    if( num == 1 || num == 0 ){
        result = String(result)
        result += ( num == 0 ) ? "0" : "1"
        result = result.split("")
        result.reverse()
        result = new String(result)
        result = result.split(",")
        let final = ""
        for( let i = 0 ; i < result.length ; i++ ){
            final += String(result[i])
        } 
        return final;
    } 
    else{
        result += String(num%2)
        num = num/2
        num = Math.floor(num)
        return BinaryConversion( num , result )
    }
}

function onesComplement( num ){
    num = increaseLength( num , 8-num.length )
    num = String(num)
    let newStr = ""
    for( let i = 0 ; i < num.length ; i++ ){
        let each = String(num[i])
        if( each == "0" ) newStr += "1"
        if( each == "1" ) newStr += "0"
    }
    return newStr
}

function twosComplement( num ){
    if( num.length < 8 ){
        for( let i = 0 ; i < 8-num.length ; i++ ){
            num = "0".concat(num)
        }
    }
    num = onesComplement(num)
    num = addition( num , "1" )
    return num;
}

function increaseLength( num , val ){
    for( let i = 0 ; i < val ; i++ ){
        num = "0".concat(num)
    }
    return num
}

function addition( num1 , num2 , complement ){
    num1 = String(num1)
    num2 = String(num2)
    if( num1.length > num2.length ) num2 = increaseLength( num2 , num1.length - num2.length )
    if( num2.length > num1.length ) num1 = increaseLength( num1 , num2.length - num1.length )
    let carry = "0" 
    let sum = ""
    for( let i = num1.length-1 ; i >= 0 ; i-- ){
        let a = num1[i]
        let b = num2[i]
        if( a == "0" && b == "0" && carry == "0" ){
            sum = "0".concat(sum)
            carry = "0"
        }
        else if( a == "0" && b == "0" && carry == "1" ){
            sum = "1".concat(sum)
            carry = "0"
        }
        else if( a == "0" && b == "1" && carry == "0" ){
            sum = "1".concat(sum)
            carry = "0"
        }
        else if( a == "0" && b == "1" && carry == "1" ){
            sum = "0".concat(sum)
            carry = "1"
        }
        else if( a == "1" && b == "0" && carry == "0" ){
            sum = "1".concat(sum)
            carry = "0"
        }
        else if( a == "1" && b == "0" && carry == "1" ){
            sum = "0".concat(sum)
            carry = "1"
        }
        else if( a == "1" && b == "1" && carry == "0" ){
            sum = "0".concat(sum)
            carry = "1"
        }
        else if( a == "1" && b == "1" && carry == "1" ){
            sum = "1".concat(sum)
            carry = "1"
        }
    }

    
    if( carry == "1" ){
        if( complement == 1 ) sum = addition( sum , "1" )
        if( complement == 2 ) carry = "0"
    }
    if( sum[0] == "1" ){
        if( complement == 1 ){
             sum = onesComplement( sum )
             sum += "n"
        }
        if( complement == 2 ){
             sum = twosComplement( sum )
             sum += "n"        
        }
    }
    return sum
}

btn.addEventListener( "click" , ()=>{
    let num1 = parseInt(input1.value)
    let num2 = parseInt( (tell.value == "+") ? 1*input2.value : -1*input2.value )

    let minus1 = ( num1 < 0 ) ? num1 : 0
    let minus2 = ( num2 < 0 ) ? num2 : 0

    if( minus1 == 0 && minus2 != 0){
        num2 = Math.pow(minus2,2)
        num2 = Math.sqrt(num2)   
    }
    if( minus1 != 0 && minus2 == 0){
        num1 = Math.pow(minus1,2)
        num1 = Math.sqrt(num1)   
    }
    if( minus1 != 0 && minus2 != 0){
        num1 = Math.pow(minus1,2)
        num1 = Math.sqrt(num1)
        num2 = Math.pow(minus2,2)
        num2 = Math.sqrt(num2)
    }
    let r = ""
    let bNum1 = BinaryConversion( num1 , r )
    let bNum2 = BinaryConversion( num2 , r )

    if( comp.value == 1 ){
        if( minus1 != 0 && minus2 == 0) bNum1 = onesComplement(bNum1)
        if( minus1 == 0 && minus2 != 0) bNum2 = onesComplement(bNum2)
        if( minus1 != 0 && minus2 != 0){
            bNum1 = onesComplement(bNum1)
            bNum2 = onesComplement(bNum2)
        } 
    }
    if( comp.value == 2 ){
        if( minus1 != 0 && minus2 == 0) bNum1 = twosComplement(bNum1)
        if( minus1 == 0 && minus2 != 0) bNum2 = twosComplement(bNum2)
        if( minus1 != 0 && minus2 != 0){
            bNum1 = twosComplement(bNum1)
            bNum2 = twosComplement(bNum2)
        } 
    }

    let ans = addition( bNum1 , bNum2 , comp.value )
    let negative = ( ans[ans.length-1] == "n" ) ? true : false
    if( negative ){
        ans = ans.split("")
        ans.pop()
        ans = ans.join("")
        show.innerHTML = `The Answer is ( ${ans} )<sub>2</sub> => ( -${DecimalConversion(ans , 0)}<sub>10</sub> ) `
    }   
    else show.innerHTML = `The Answer is ( ${ans} )<sub>2</sub> => ( ${DecimalConversion(ans , 0)} )<sub>10</sub>  `        
} )

const inpUp = document.querySelector(".input1up")
const inpDw = document.querySelector(".input1down")
const inp2Up = document.querySelector(".input2up")
const inp2Dw = document.querySelector(".input2down")

function changeValue(){
    inpUp.textContent = parseInt( input1.value ) - 1
    inpDw.textContent = parseInt( input1.value ) + 1
    inp2Up.textContent = parseInt( input2.value ) - 1
    inp2Dw.textContent = parseInt( input2.value ) + 1
}

inpUp.addEventListener("click",()=> {
    input1.value--
    changeValue()
})
inpDw.addEventListener("click",()=> {
    input1.value++
    changeValue()
})
inp2Up.addEventListener("click",()=> {
    input2.value--
    changeValue()
})
inp2Dw.addEventListener("click",()=> {
    input2.value++
    changeValue()
})