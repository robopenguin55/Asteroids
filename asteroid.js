class Asteroid extends Projectile {
    
    constructor(context, originX, originY, velocityX, velocityY){
        super(context,originX, originY, velocityX, velocityY);

        this.asteroidImage = 'asteroid-small-1.png';
    }

    draw() {
        return super.draw('asteroid',this.asteroidImage);
    }
}