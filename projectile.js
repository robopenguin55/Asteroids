class Projectile {
    constructor (context, originX, originY, velocityX, velocityY){
        this.currentDirectionAngle = 2*Math.PI;  // default facing upward (which is 2Pi in js...)
        this.currentLocation = [originX,originY];
        this.currentVelocity = [velocityX,velocityY]; // [x,y]
        this.context = context;
        this.previousDrawnLocation = [0,0];
    }

    drawImage(image){
        const scale = 1;
        const x = this.currentLocation[0];
        const y = this.currentLocation[1];
        const rotation = this.currentDirectionAngle;
        this.context.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
        this.context.rotate(rotation);
        this.context.drawImage(image, -image.width / 2, -image.height / 2);
    }

    updateLocation(width, height){

        // if current location - current velocity is <= 0, we want to translate the location to the opposite end of the screen.
        // otherwise adjust the current location by the velocity
        this.currentLocation[0] = (this.currentLocation[0] - this.currentVelocity[0]) <= 0 ? width : (this.currentLocation[0] - this.currentVelocity[0]);
        this.currentLocation[1] = (this.currentLocation[1] - this.currentVelocity[1]) <= 0 ? height : (this.currentLocation[1] - this.currentVelocity[1]);

        // translate from right to left
        if (this.currentLocation[0] > width)
            this.currentLocation[0] = 0;

        // translate from top to bottom
        if (this.currentLocation[1] > height)
            this.currentLocation[1] = 0;

        console.log(`x : ${this.currentLocation[0]} y : ${this.currentLocation[1]}`);
    }

    draw(id,imageSrc) {
        let image = new Image();

        image.id = id;
        image.src = imageSrc;

        this.drawImage(image);

        return image;
    }
}