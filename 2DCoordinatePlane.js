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

        let originX = (this.width/2);
        let originY = (this.height/2);

        // draw -y line
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(originX, this.height);
        ctx.stroke();

        // draw +y line
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(originX, 0);
        ctx.stroke();

        // draw -x line
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(0, originY);
        ctx.stroke();

        // draw +x line
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(this.width, originY);
        ctx.stroke();
        // content.remove(canvas);

        //content.append(canvas);
    }    

    /* arc(x, y, radius, startAngle, endAngle, counterclockwise) */
    /* arcTo(x1, y1, x2, y2, radius) */
    /* angles in the arc function are measured in radians, not degrees. */
    drawCircle(x, y) {
        const canvas = document.getElementById("content");

        if (canvas.getContext){
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(x,y,5,0,(2 * Math.PI),true);
            ctx.strokeStyle = 'red';
            ctx.stroke();
        }
    }
}