const navbar = document.querySelector(".navbar");
const burger = document.querySelector(".backgroundImage");
const chooseDibba = document.querySelector(".contentDiv")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target;
            
            if (target.classList.contains("navbar")) {
                target.style.animation = "incomingNavAnimation 0.5s ease-in-out 1";
                setTimeout(() => {
                    target.style.animation = "none";
                }, 500);
            }

            if (target.classList.contains("backgroundImage")) {
                target.style.animation = "incomingAnimation 0.5s ease-in-out 1";
                setTimeout(() => {
                    target.style.animation = "none";
                }, 500);
            }

            if( target.classList.contains("contentDiv") ){
                target.style.animation = "dibbaForVidhi 1s ease-in-out 1"
                
                setTimeout(() => {
                    target.style.animation = "none";
                }, 1000);
            }
        }
    });
});

chooseDibba.addEventListener( "click" , () => {
    chooseDibba.style.animation = "endChooseDibbaAnimation 0.5s ease-in-out 1"
    setTimeout( () => {
        window.location.href = "./veg.html"
    } , 400 )
} )

observer.observe(navbar);
observer.observe(burger);
observer.observe(chooseDibba)