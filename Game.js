class Game {
    constructor(){
        this.context = canvas.getContext('2d');
        context.fillStyle = 'black';
        context.fillRect(0,0,canvas.width, canvas.height);

        this.trig = new Trigonometry(context);
        this.ship = new Ship(context);
    }

    async run() {
        // draw random stars
        //drawStars(200);

        let imageX = 0;
        let imageY = 0;
        
        while (true) {

            // draw ship
            this.ship.draw();
            
            // draw projectiles

            // draw enemies

            // draw etc

            await new Promise(resolve => setTimeout(resolve, (1000/30))); // going for 30 frames per second (1 second / 30)
        }
    }
}