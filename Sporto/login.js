const user = document.querySelector('#username')
    const pass = document.querySelector('#password')
    const btn = document.querySelector('.div')

    btn.addEventListener('click',()=>{
        const Cuser = localStorage.getItem('username')
        const Cpass = localStorage.getItem('password')
        console.log(Cuser)
        console.log(Cpass)
        console.log('')
        console.log(user.value)
        console.log(pass.value)
        if(user.value == Cuser && pass.value == Cpass){
            window.location.href = "sporto.html"
        } else{
            btn.innerHTML = "Invalid Username or Password"
        }
    })