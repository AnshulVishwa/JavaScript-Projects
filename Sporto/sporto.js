const search = document.querySelector('#search')
search.addEventListener('click',()=>{
    const input = document.querySelector('input')
    input.value = ''
})
const welcome = document.querySelector('.welcome')
let welcomeText = localStorage.getItem("username")
if(welcomeText != null){
    welcome.innerHTML = `Welcome ~ ${welcomeText}`
}
// \\\\\\\\\\\\\\\\\\\\\\\\
let HighRatingArray = []
let LowRatingArray = []
async function ContentDetails(url , data){
    try{
        url = await fetch("sporto.json")
        data = await url.json()
        // console.log(data)
        for(let i=0; i<data.length ; i++){
            let rating = data[i].rating;
            if(data[i].rating >= 4){
                HighRatingArray.push(data[i])
            } else{
                LowRatingArray.push(data[i])
            }
        }
        const HighRatingContent = document.querySelector('.highRating')
        const normalRatingContent = document.querySelector('.normal')
        for(let i = 0 ; i < HighRatingArray.length ; i++){
            let HighContent = document.createElement('div');
            HighContent.setAttribute('class' , 'HighContent')
            HighContent.setAttribute('id' , `HighContent${i}`)
            HighRatingContent.append(HighContent)

            let HighContentImage = document.createElement('img')
            let HighContentName = document.createElement('div')
            let HighContentPrice = document.createElement('div')
            let HighContentBrand = document.createElement('div')
            let HighContentRating = document.createElement('div')

            HighContentImage.setAttribute('class' , 'HighContentImage')
            HighContentName.setAttribute('class' , 'HighContentName')
            HighContentPrice.setAttribute('class' , 'HighContentPrice')
            HighContentBrand.setAttribute('class' , 'HighContentBrand')
            HighContentRating.setAttribute('class' , 'HighContentRating')

            HighContentImage.setAttribute('src' , `${HighRatingArray[i].image}`)
            HighContentName.innerHTML = `${HighRatingArray[i].name}`
            HighContentPrice.innerHTML = `${HighRatingArray[i].price}`
            HighContentBrand.innerHTML = `${HighRatingArray[i].brand}`
            if(HighRatingArray[i].rating == 4){
                HighContentRating.innerHTML = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i>`
            }
            if(HighRatingArray[i].rating == 5){
                HighContentRating.innerHTML = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i>`
            }

            HighContent.append(HighContentImage,HighContentName,HighContentPrice ,HighContentRating,HighContentBrand)
        
            HighContent.addEventListener('click',()=>{

                let content = {
                    image : `${HighRatingArray[i].image}`,
                    name : `${HighRatingArray[i].name}`,
                    price : `${HighRatingArray[i].price}`,
                    brand : `${HighRatingArray[i].brand}`,
                }

                localStorage.removeItem("HighOrderContent")
                localStorage.setItem("HighOrderContent",JSON.stringify(content))
                console.log(localStorage)

                window.location.href = "HighContent.html"
            })

        }
        for(let i = 0 ; i < LowRatingArray.length ; i++){
            let LowContent = document.createElement('div');
            LowContent.setAttribute('class' , 'LowContent')
            LowContent.setAttribute('id' , `LowContent${i}`)
            normalRatingContent.append(LowContent)
                        
            let LowContentImage = document.createElement('img')
            let LowContentName = document.createElement('div')
            let LowContentPrice = document.createElement('div')
            let LowContentBrand = document.createElement('div')
            let LowContentRating = document.createElement('div')

            LowContentImage.setAttribute('class' , 'LowContentImage')
            LowContentName.setAttribute('class' , 'LowContentName')
            LowContentPrice.setAttribute('class' , 'LowContentPrice')
            LowContentBrand.setAttribute('class' , 'LowContentBrand')
            LowContentRating.setAttribute('class' , 'LowContentRating')

            LowContentImage.setAttribute('src' , `${LowRatingArray[i].image}`)
            LowContentName.innerHTML = `${LowRatingArray[i].name}`
            LowContentPrice.innerHTML = `${LowRatingArray[i].price}`
            LowContentBrand.innerHTML = `${LowRatingArray[i].brand}`
            if(LowRatingArray[i].rating == 1){
                LowContentRating.innerHTML = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`
            }
            if(LowRatingArray[i].rating == 2){
                LowContentRating.innerHTML = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i>`
            }
            if(LowRatingArray[i].rating == 3){
                LowContentRating.innerHTML = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i>`
            }

            LowContent.append(LowContentImage,LowContentName,LowContentPrice ,LowContentRating,LowContentBrand)
            
            LowContent.addEventListener('click',()=>{
                localStorage.removeItem("HighOrderContent")
                let content = {
                    image : `${LowRatingArray[i].image}`,
                    name : `${LowRatingArray[i].name}`,
                    price : `${LowRatingArray[i].price}`,
                    brand : `${LowRatingArray[i].brand}`,
                }

                localStorage.setItem("HighOrderContent",JSON.stringify(content))
                console.log(localStorage)

                window.location.href = "HighContent.html"
        }
            )}
        
    }
    catch(error){
        console.log("Something galat ho gya Bidu wapas try kar")
    }
}
ContentDetails()
