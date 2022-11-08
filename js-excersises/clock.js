function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    // Draw the edge circle with gradient
    // TODO: (Optional) add a gradient circle

    // Center circle
    // TODO: make the central black circle
}

function drawNumbers(ctx, radius) {
    //TODO: Make sure you show all the numbers
    for (let i = 1; i <= 12; i++) {
        var ang;
        var num = i;
        ctx.font = radius * 0.15 + 'px arial';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ang = (num * Math.PI) / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius) {
    // TODO: Calculate the angles of every hand depending on the time
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    //2 PI radians over 12 hrs
    drawHand(ctx, (hour * (Math.PI * 2)) / 12, radius * 0.5, radius * 0.07);
    //minute
    //2 PI radians over 60 mins
    drawHand(ctx, (minute * (Math.PI * 2)) / 60, radius * 0.8, radius * 0.07);
    // second
    //2 PI radians over 60 seconds
    drawHand(ctx, (second * (Math.PI * 2)) / 60, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

setInterval(drawClock, 1000);
