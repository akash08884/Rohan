document.addEventListener('DOMContentLoaded', () => {
    const birthdaySong = document.getElementById('birthdaySong');
    const cheerSound = document.getElementById('cheerSound');
    const btnCelebrate = document.getElementById('btn__celebrate');
    const fireworksCanvas = document.getElementById('fireworks');
    const ctx = fireworksCanvas.getContext('2d');

    // Resize canvas to fill window
    function resizeCanvas() {
        fireworksCanvas.width = window.innerWidth;
        fireworksCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Fireworks Animation
    function createFireworks() {
        const particles = [];
        function Particle(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 6 - 3;
            this.speedY = Math.random() * 6 - 3;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        Particle.prototype.update = function() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.size *= 0.96;
        };
        Particle.prototype.draw = function() {
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        };
        function animate() {
            ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
            particles.forEach((particle, index) => {
                particle.update();
               4
