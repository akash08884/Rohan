$(document).ready(function() {
    let message = "Happy Birthday! May your day be filled with joy and laughter!";
    let currentIndex = 0;

    // Play Birthday song and display message
    $("#btn__letter").click(function() {
        document.getElementById("birthdaySong").play();
        let interval = setInterval(function() {
            if (currentIndex < message.length) {
                $(".message").append(message[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    });

    // Blow Candles Action
    $("#blowCandles").click(function() {
        $("#cakeImg").attr("src", "images/cake-blown.png");
        document.getElementById("cheerSound").play();
    });

    // Fireworks Effect
    function createFireworks() {
        const canvas = document.getElementById("fireworks");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function drawFirework(x, y) {
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    ctx.beginPath();
                    ctx.arc(x + Math.random() * 100 - 50, y + Math.random() * 100 - 50, 2, 0, Math.PI * 2);
                    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    ctx.fill();
                }, i * 10);
            }
        }

        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawFirework(Math.random() * canvas.width, Math.random() * canvas.height / 2);
        }, 1000);
    }
    createFireworks();
});