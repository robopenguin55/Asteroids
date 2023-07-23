class TwoDCoordinatePlane {
    constructor (width, height) {
        this.width = width;
        this.height = height;

        const canvas = document.getElementById("content");

        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);

        const ctx = canvas.getContext('2d');

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;

        this.originX = (this.width/2);
        this.originY = (this.height/2);

        console.log(`x: ${this.originX}, y:${this.originY}`);

        // draw -y line
        ctx.beginPath();
        ctx.moveTo(this.originX, this.originY);
        ctx.lineTo(this.originX, this.height);
        ctx.stroke();

        // draw +y line
        ctx.beginPath();
        ctx.moveTo(this.originX, this.originY);
        ctx.lineTo(this.originX, 0);
        ctx.stroke();

        // draw -x line
        ctx.beginPath();
        ctx.moveTo(this.originX, this.originY);
        ctx.lineTo(0, this.originY);
        ctx.stroke();

        // draw +x line
        ctx.beginPath();
        ctx.moveTo(this.originX, this.originY);
        ctx.lineTo(this.width, this.originY);
        ctx.stroke();
        // content.remove(canvas);

        //content.append(canvas);
    }    

    /* arc(x, y, radius, startAngle, endAngle, counterclockwise) */
    /* arcTo(x1, y1, x2, y2, radius) */
    /* angles in the arc function are measured in radians, not degrees. */
    drawCircle(x, y, radius=5, color='red') {
        const canvas = document.getElementById("content");

        if (canvas.getContext){
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(this.originX + x,this.originY + y,radius,0,(2 * Math.PI),true);
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }
}