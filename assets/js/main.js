const toTop = document.querySelector('.toTopBtn');

window.addEventListener('scroll',()=>{
    if (window.pageYOffset> 100) {
        toTop.classList.add('active')
    }else{
        toTop.classList.remove('active')
    }
})