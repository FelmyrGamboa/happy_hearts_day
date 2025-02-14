const heart = document.querySelector('.loading')
const redirect_link = 'main_animation.html';

heart.addEventListener('animationend', function(event){
    if (event.animationName == "enlargement"){
        window.location.href = redirect_link
    }
})

heart.addEventListener('animationend', function(){
    heart.classList.add('enlarge_heart')
})

window.addEventListener('popstate', function(event) {
    if (event.state === null) {
        window.location.href = document.referrer;
    }
})
