let num = 52529

function convert( x ){
    let str = String(x)
    let newNum = ""
    for(let i = str.length-1 ; i >= 0 ; i--){
        newNum += str[i]
    }
    newNum = parseInt(newNum)
    console.log(newNum , typeof(newNum))
}

convert(num)