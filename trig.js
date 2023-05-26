class Trigonometry {
    constructor (context){
        this.context = context;
    }
 
    drawCircle(x, y, size=1, color='white') {
        this.context.beginPath();
        this.context.arc(x,y,size,0,(2 * Math.PI), true);
        this.context.strokeStyle = color;
        this.context.fillStyle = color;
        this.context.stroke();
    }

}