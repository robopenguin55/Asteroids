class Game {
    constructor(){
        this.canvas = document.getElementById("content");
        this.canvas.setAttribute("width", window.innerWidth);
        this.canvas.setAttribute("height", window.innerHeight);

        const originX = this.canvas.width/2;
        const originY = this.canvas.height/2;

        this.stars = [];

        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = 'black';
        this.context.fillRect(0,0,this.canvas.width, this.canvas.height);

        this.trig = new Trigonometry(this.context);
        this.ship = new Ship(this.context, originX, originY);
        //this.projectiles = [];
        //this.asteroid = new Asteroid(this.context, originX, originY, 2, 1.5);
    }

    getRandom(max) {
        return Math.floor(Math.random() * max);
    };

    drawStars(count) {

        if (this.stars.length < 1) {

            for (let i = 0; i < count; i++){
                const randomX = this.getRandom(this.canvas.width);
                const randomY = this.getRandom(this.canvas.height);

                this.stars.push([randomX,randomY]);
                this.trig.drawCircle(randomX, randomY);
            }
        }
        else {
            this.stars.forEach(element => {
                this.trig.drawCircle(element[0], element[1]);
            });
        }
    }

    async run() {

        let imageX = 0;
        let imageY = 0;
        
        while (true) {

            // draw projectiles
            this.context.clearRect(0,0,this.canvas.width, this.canvas.height);

            this.context.fillStyle = 'black';
            this.context.fillRect(0,0,this.canvas.width, this.canvas.height);

            // ship location 
            this.ship.updateLocation(this.canvas.width, this.canvas.height)
            //this.asteroid.updateLocation(this.canvas.width, this.canvas.height);

            // draw ship
            const image = this.ship.draw();
            //this.asteroid.draw();

            this.ship.drawProjectiles(this.canvas.width, this.canvas.height);

            this.context.setTransform(1,0,0,1,0,0);

            this.drawStars(200);

            // draw enemies

            // draw etc

            await new Promise(resolve => setTimeout(resolve, (1000/30))); // going for 30 frames per second (1 second / 30)
        }
    }
}