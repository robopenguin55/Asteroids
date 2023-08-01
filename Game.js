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
        this.asteroids = [];
        this.utils = new Utilities();
    }

    drawStars(count) {

        if (this.stars.length < 1) {

            for (let i = 0; i < count; i++){
                const randomX = this.utils.getRandom(this.canvas.width);
                const randomY = this.utils.getRandom(this.canvas.height);

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

    drawAsteroids(count) {
        // populate asteroids if we don't have any
        if (this.asteroids.length < 1){
            const maxVelocity = 5;
            for (let i = 0; i < count; i++){
                let a = new Asteroid(this.context, this.utils.getRandom(this.canvas.width), this.utils.getRandom(this.canvas.height), this.utils.getRandom(maxVelocity), this.utils.getRandom(maxVelocity));
                this.asteroids.push(a);
            }
        }

        // update asteroid locations
        for (let a of this.asteroids){
            const newLocation = a.updateLocation(this.canvas.width, this.canvas.height);
            a.draw();
        }
    }

    async run() {

        while (true) {

            // re-create context
            this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
            this.context.fillStyle = 'black';
            this.context.fillRect(0,0,this.canvas.width, this.canvas.height);

            // ship location 
            const newShipLocation = this.ship.updateLocation(this.canvas.width, this.canvas.height)

            // asteroids
            this.drawAsteroids(10);

            // draw ship
            this.ship.draw();

            this.ship.getProjectileLocations();

            this.ship.drawProjectiles(this.canvas.width, this.canvas.height);

            this.context.setTransform(1,0,0,1,0,0);

            this.drawStars(200);

            // draw enemies

            // draw etc

            await new Promise(resolve => setTimeout(resolve, (1000/30))); // going for 30 frames per second (1 second / 30)
        }
    }
}