class Ship extends Projectile {
    
    constructor(context, originX, originY){
        super(context,originX, originY, 0, 0);

        this.shipSound = new sound("thrust.wav");
        this.fireSound = new sound("fire.wav");
        this.shipImage = 'player.png'; //'spaceship-25.png';
        this.projectiles = [];

        document.onkeyup = (e) => {
            e = e || window.event;
    
            if (e.keyCode){ // up
                this.shipSound.stop();
            }
        }

        document.onkeydown = (e) => {
            e = e || window.event;
    
            if (e.keyCode === 38) { // up
                e.preventDefault();
    
                // go forward
                this.shipSound.play();
    
                this.currentVelocity[0] -= Math.sin(this.currentDirectionAngle);
                this.currentVelocity[1] += Math.cos(this.currentDirectionAngle);
            } else if (e.keyCode === 40) { // down
                e.preventDefault();
                
                // slow down... maybe have front thrusters?
                if (this.currentVelocity[1] > 0) {
                    
                }
            } else if (e.keyCode === 37) {  // left
                e.preventDefault();
    
                // rotate counter-clockwise
                // currentDirectionAngle -= (Math.PI/6); // 30 degrees
                this.currentDirectionAngle -= (Math.PI/12); // 15 degrees
    
            } else if (e.keyCode === 39) { // right
                e.preventDefault();
    
                // rotate clockwise
                // currentDirectionAngle += (Math.PI/6); // -30 degrees
                this.currentDirectionAngle += (Math.PI/12); // -15 degrees
            }
            else if (e.keyCode === 32) {  // space
                e.preventDefault();
    
                // fire!
                this.fireSound.play();
                // use the current direction angle and current location to determine angle and origin of projectile
                // add projectile to array of projectiles to be shown in game loop
                //console.log(`drawing circle at x:${currentLocation[0]} y:${currentLocation[1]-10}`);
    
                const v_x = -(Math.sin(this.currentDirectionAngle)) * 5;
                const v_y = Math.cos(this.currentDirectionAngle) * 5;
    
                console.log(`starting at: x = ${this.currentLocation[0]} y = ${this.currentLocation[1]} v_x = ${v_x} v_y = ${v_y}`);
    
                this.projectiles.push(new Projectile(this.context, this.currentLocation[0],this.currentLocation[1], v_x, v_y)); // create new projectile
            }
    
            //console.log(`x:${this.currentLocation[0]} y: ${this.currentLocation[1]} direction angle : ${this.currentDirectionAngle} velocity : ${this.currentVelocity[1]}`);
        };
    }

    drawProjectiles(width, height) {
        for (let i = 0; i < this.projectiles.length; i++){
            this.projectiles[i].updateLocation(width, height);
            this.projectiles[i].draw(`${i}`,'projectile.png');
        }
    }

    draw() {
        return super.draw('ship',this.shipImage);
    }
}