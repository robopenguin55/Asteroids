class Trigonometry {
    constructor (context){
        this.context = context;
    }
 
    drawCircle(x, y) {
        this.context.beginPath();
        this.context.arc(x,y,1,0,(2 * Math.PI), true);
        this.context.strokeStyle = 'white';
        this.context.fillStyle = 'white';
        this.context.stroke();
    }

}