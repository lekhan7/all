        const button = document.querySelector('.smallcirclediv');
        const allline = document.querySelector('.allline');
        const allbox = document.querySelector('.allbox');
        const snakeEmojis = document.querySelector('.snake-emojis');
        var audio = new Audio('horror-scary-vampire-hiss-snake-hiss-01-256986.mp3');
        const head= document.querySelector("h1");
        const clicko = document.querySelector(".click")



        button.addEventListener('click', () => {
            head.innerText="";
            clicko.innerHTML="";
            allline.classList.remove('hidden');
            allbox.classList.remove('hidden');
            snakeEmojis.classList.remove('hidden');
            audio.play();
            setTimeout(() => {
                snakeEmojis.classList.add('hidden');
            }, 2000);
        });