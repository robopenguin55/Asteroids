class Asteroid extends Projectile {
    
    constructor(context, originX, originY, velocityX, velocityY){
        super(context,originX, originY, velocityX, velocityY);

        this.asteroidImage = 'images/asteroid-small-1.png';
    }

    draw() {
        return super.draw('asteroid',this.asteroidImage);
    }
}