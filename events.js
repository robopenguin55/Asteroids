function registerEvents() {

    window.addEventListener('resize', function(event) {
        const canvas = document.getElementById("content");
        const context = canvas.getContext('2d');

        canvas.setAttribute("width", window.innerWidth);
        canvas.setAttribute("height", window.innerHeight);

        context.fillStyle = 'black';
        context.fillRect(0,0,canvas.width, canvas.height);

        drawStars(200); // redraw the stars
    }, true);
    
}