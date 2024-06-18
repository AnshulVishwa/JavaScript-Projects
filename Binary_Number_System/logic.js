const input = document.getElementById("input")
const btn = document.querySelector("button")
const show = document.getElementById("show")
const base = document.getElementById("base")
const convert = document.getElementById("convert")

let result = "";

function ten_Two( r , v ){

    if( v == 1 || v == 0 ){
        r = String(r)
        r += ( v == 0 ) ? "0" : "1"
        r = r.split("")
        r.reverse()
        r = new String(r)
        r = r.split(",")
        let final = ""
        for( let i = 0 ; i < r.length ; i++ ){
            final += String(r[i])
        }
        show.innerHTML = `( ${final} ) <sub>2</sub>`
        r = final    
        return r;
    } 
    else{
        r += v%2
        v = v/2
        v = Math.floor(v)
    }
    return ten_Two( r , v )
}
function Eight_Two_Sixteen( r , v , b ){
    v = new String(v)
    r = new Number(r)
    if( b == 2 ){
        for( let i = 0 , j = v.length-1 ; i < v.length && j >= 0 ; i++ , j-- ){
            r += parseInt(v[j]) * Math.pow(2,i)
        }
    }
    if( b == 8 ){
        for( let i = 0 , j = v.length-1 ; i < v.length && j >= 0 ; i++ , j-- ){
            r += parseInt(v[j]) * Math.pow(8,i)
        }
    }
    if( b == 16 ){
        for( let i = 0 , j = v.length-1 ; i < v.length && j >= 0 ; i++ , j-- ){
            let a = parseInt(v[j]) * Math.pow(16,i)
            r += a
        }
    }
    let newStr = String(r)
    show.innerHTML = `( ${newStr} )<sub>${b}</sub>`
    return newStr
}

function ten_Eight( r , v ){
    r += v%8
    v = parseInt(v/8)
    if( v < 8 ){
        r = String(r)
        r += `${v}`
        r = r.split("")
        r.reverse()
        r = new String(r)
        r = r.split(",")
        let final = ""
        for( let i = 0 ; i < r.length ; i++ ){
            final += String(r[i])
        }
        show.innerHTML = `( ${final} ) <sub>8</sub>`
        return final
    } 
    return ten_Eight( r , v )
}

function makeItToThree(vom){
    if( vom.length % 3 == 0 ){
        v = vom
        return vom;
    }
    else{
        let add = new String("0")
        vom = add.concat(vom)
        return makeItToThree(vom)
    }
}

function Two_Eight( r , v ){
    v = new String(v)
    
    v = makeItToThree(v)
    let allGrps = []
    for( let i = 0 ; i < v.length ; i = i+3 ){
        let add = `${v[i]}${v[i+1]}${v[i+2]}`
        allGrps.push( add )
        // console.log(allGrps)
    }

    let ans = ""
    allGrps.map( ( e , i ) => {
        let r = ""
        ans += Eight_Two_Sixteen( r , parseInt(e) , 2 )
        // console.log(ans)
    })
    show.innerHTML = `( ${ans} ) <sub>8</sub>`
    return ans 
}
function makeItToFour(vom){
    if( vom.length % 4 == 0 ){
        return vom;
    }
    else{
        let add = new String("0")
        vom = add.concat(vom)
        return makeItToFour(vom)
    }
}

function Eight_Two( r , v ){
    r = ""
    v = String(v)
    for( let i = 0 ; i < v.length ; i++ ){
        let ans = ""
        ans = ten_Two( ans , parseInt( v[i] ) )
        ans = makeItToThree(ans)
        r += ans
    }
    show.innerHTML = `( ${r} ) <sub>2</sub>` 
    return r;
}
function Sixteen_Two( r , v ){
    r = ""
    v = String(v)
    for( let i = 0 ; i < v.length ; i++ ){
        let vidhi = String(v[i])
        switch( vidhi ){
             case "A" : vidhi = 10;break;
             case "B" : vidhi = 11;break;
             case "C" : vidhi = 12;break;
             case "D" : vidhi = 13;break;
             case "E" : vidhi = 14;break;
             case "F" : vidhi = 15;break;
             case 'A' : vidhi = 10;break;
             case 'B' : vidhi = 11;break;
             case 'C' : vidhi = 12;break;
             case 'D' : vidhi = 13;break;
             case 'E' : vidhi = 14;break;
             case 'F' : vidhi = 15;break;
        }
        let ans = ""
        // console.log(vidhi)
        ans = ten_Two( ans , parseInt( vidhi ) )
        ans = makeItToFour(ans)
        r += ans
    }
    show.innerHTML = `( ${r} ) <sub>2</sub>`  
    return r;
}

function Sixteen_Eight( re , ve ){
    let binary = Sixteen_Two( re , ve )
    re = Two_Eight( re , binary )
    show.innerHTML = `( ${re} ) <sub>8</sub>`
    
}

function Ten_Sixteen(r, v) {
    let a = v%16;
    v = v/16;
    v = Math.floor(v)
    a = parseInt(a)
    switch(a) {
        case 10: a = "A"; break;
        case 11: a = "B"; break;
        case 12: a = "C"; break;
        case 13: a = "D"; break;
        case 14: a = "E"; break;
        case 15: a = "F"; break;
        default: a = a;
    }
    a = String(a)
    r += a;
    if (v < 16) {
        switch(v) {
            case 10: v = "A"; break;
            case 11: v = "B"; break;
            case 12: v = "C"; break;
            case 13: v = "D"; break;
            case 14: v = "E"; break;
            case 15: v = "F"; break;
            default: v = v;
        }
        r += `${v}`
        let hexString = r.split('').reverse().join('');
        show.innerHTML = `( ${hexString} ) <sub>16</sub>`;
        return hexString;
    }
    return Ten_Sixteen(r, v);
}

function Two_Sixteen( r , v ){
    r = ""
    v = new String(v)
    v = makeItToFour(v)
    let allGrps = []
    for( let i = 0 ; i < v.length ; i = i+4 ){
            let add = `${v[i]}${v[i+1]}${v[i+2]}${v[i+3]}`
            allGrps.push( add )
            // console.log(allGrps)
    }
    allGrps.map( ( e , i ) => {
        console.log(e)
        let hu = ""
        let abc = Eight_Two_Sixteen( hu , parseInt(e) , 2 )
        console.log(abc)
        switch(abc) {
            case "10": abc = "A"; break;
            case "11": abc = "B"; break;
            case "12": abc = "C"; break;
            case "13": abc = "D"; break;
            case "14": abc = "E"; break;
            case "15": abc = "F"; break;
            default: abc = abc;
        }
        r += abc 
    })
    
    show.innerHTML = `( ${r} ) <sub>16</sub>`
    return r;
}


function Eight_Sixteen( re , ve ){
    let binary = Eight_Two( re , ve )
    console.log("binary = " + binary)
    let a = ""
    let ans = Two_Sixteen( a , binary )
    show.innerHTML = `( ${ans} ) <sub>16</sub>`
}

btn.addEventListener("click",()=>{

    if( base.value == 2 && convert.value == 8 ) Two_Eight(result , input.value )
    if( base.value == 2 && convert.value == 10 ) Eight_Two_Sixteen(result , input.value , base.value )
    if( base.value == 2 && convert.value == 16) Two_Sixteen(result , input.value )

    if( base.value == 8 && convert.value == 2 ) Eight_Two(result , input.value )
    if( base.value == 8 && convert.value == 10 ) Eight_Two_Sixteen(result , input.value , base.value )
    if( base.value == 8 && convert.value == 16 ) Eight_Sixteen(result , input.value )
            
    if( base.value == 10 && convert.value == 2 ) ten_Two(result , input.value )
    if( base.value == 10 && convert.value == 8 ) ten_Eight(result , input.value )
    if( base.value == 10 && convert.value == 16 ) Ten_Sixteen(result , input.value )
                
    if( base.value == 16 && convert.value == 2 ) Sixteen_Two(result , input.value )
    if( base.value == 16 && convert.value == 8 ) Sixteen_Eight(result , input.value )
    if( base.value == 16 && convert.value == 10 ) Eight_Two_Sixteen(result , input.value , base.value )
})