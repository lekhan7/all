
document.addEventListener('DOMContentLoaded', function () {

    window.toggleExpand = function (card) {
        card.classList.toggle('expanded');
    }



    window.toggleFact = function (fact) {
        fact.classList.toggle('active');
    }
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;


    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }


    const serpent = document.getElementById('serpent');
    document.addEventListener('mousemove', function (e) {
        const xPos = (e.clientX / window.innerWidth * 20) - 10;
        const yPos = (e.clientY / window.innerHeight * 20) - 10;
        serpent.style.transform = `translateX(-50%) translateY(${yPos}px) rotate(${xPos}deg)`;
    });

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');


        const size = Math.random() * 5 + 2;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.1;
        const hue = Math.floor(Math.random() * 60) + 300;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        particle.style.opacity = opacity;
        particle.style.background = `hsla(${hue}, 70%, 50%, ${opacity})`;


        const keyframes = `
                    @keyframes float {
                        0% {
                            transform: translate(0, 0) rotate(0deg);
                        }
                        50% {
                            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
                        }
                        100% {
                            transform: translate(0, 0) rotate(0deg);
                        }
                    }
                `;

        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);

        particlesContainer.appendChild(particle);
    }
});