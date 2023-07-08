class Ship {
    
    constructor(context){
        this.shipSound = new sound("thrust.wav");
        this.fireSound = new sound("fire.wav");
        this.currentLocation = [0.0,0.0];
        this.currentVelocity = [0.0,0.0]; // [x,y]
        this.context = context;
    }

    drawImage(image, x, y, scale, rotation){
        context.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
        context.rotate(rotation);
        context.drawImage(image, -image.width / 2, -image.height / 2);
    } 

    draw() {
        let image = new Image();

        image.id = 'ship'
        image.src = 'spaceship-25.png';
        image.onload = function() {
            // console.log(currentDirectionAngle);
            // console.log(`x:${currentLocation[0]} y: ${currentLocation[1]}`);
            drawImage(image, currentLocation[0], currentLocation[1], 1, currentDirectionAngle);
        }

        return image;
    }

}