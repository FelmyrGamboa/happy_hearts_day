const banana_cat= document.querySelector('.banana_cat')
const banana_cat_standing = document.querySelector('.banana_cat_standing')
const textbox = document.querySelector('.textbox')
const typewriterElement = document.querySelector('.text_details');
const banana_heart = document.querySelector('.banana_cat_heart');
const heart_flap = document.querySelector('.envelope_wrapper > .heart');
const gift_card = document.querySelector('.envelope_container');
const envelope = document.querySelector('.envelope_wrapper');
const flower = document.querySelector('.letter');
const redirect_flower = 'final_flower.html';
const text1 = "\n\nHi Hooman!";
const text2 = "\n\nHope you are doing fine and all!";
const text3 = "\n\nHappy Valentine's Day Hooman!!!";
const text4 = "\n\nHere's a gift for u! <33";
let index = 0;
const typingSpeed = 100;

banana_cat.addEventListener('animationend', function() {
    banana_cat.style.display = 'none';
    banana_cat_standing.style.display = 'flex';

    setTimeout(() => {
        textbox.style.display = 'flex';

        setTimeout(() => {
            function typeWriter(text, callback) {
                let index = 0;
                function write() {
                    if (index < text.length) {
                        let currentChar = text.charAt(index);

                        if (currentChar === '\n') {
                            typewriterElement.innerHTML += '<br>';
                        } else {
                            typewriterElement.innerHTML += currentChar;
                        }

                        index++;
                        setTimeout(write, typingSpeed);
                    } else {
                        setTimeout(() => {
                            callback();
                        }, 1000);
                    }
                }
                write();
            }

            typeWriter(text1, () => {
                typewriterElement.innerHTML = '';
                
                setTimeout(() => {
                    typeWriter(text2, () => {
                        banana_cat_standing.style.display = '';
                        banana_heart.style.display = 'flex';
                        typewriterElement.innerHTML = '';
                        setTimeout(() => {
                            typeWriter(text3, () => {
                                banana_cat_standing.style.display = '';
                                banana_heart.style.display = 'flex';
                                typewriterElement.innerHTML = '';
                                banana_cat_standing.style.display = 'flex';
                                banana_heart.style.display = '';
                                setTimeout(() => {
                                    typeWriter(text4, () => {
                                        gift_card.style.display = 'flex';
                                        heart_flap.style.display = 'flex';
                                        envelope.addEventListener('click', () => {
                                            envelope.classList.toggle('flap');
                                            flower.addEventListener('animationend', function(event){
                                                if (event.animationName == "zoom_letter"){
                                                    window.location.href = redirect_flower;
                                                }
                                            })
                                        })
                                        
                                    });
                                }, 1000);
                            });
                        }, 1000);

                    });
                }, 1000);
            });

        }, 3000); 
    }, 2000);
});

window.addEventListener('popstate', function(event) {
    if (event.state === null) {
        window.location.href = document.referrer;
    }
})
