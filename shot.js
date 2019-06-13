function Shot(elmX, elmY, elmWidth) {
    this.elmWidth = elmWidth / 2;
    this.x = elmX;
    this.y = elmY;
    this.interval;
    this.create();
    this.move();
}

Shot.prototype.move = function () {
    if (!this.newShot) {
        clearInterval(this.interval);
        return;
    }
    this.newShot.style.top = this.newShot.offsetTop - 10 + "px";
    if (this.newShot.offsetTop < 0) {
        clearInterval(this.interval);
        document.body.removeChild(this.newShot);
    }
}

Shot.prototype.create = function () {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "shot");
    newDiv.style.top = this.y + "px";
    this.newShot = document.body.appendChild(newDiv);
    newDiv.style.left = this.x + this.elmWidth - (this.newShot.offsetWidth / 2) + "px";
    this.interval = setInterval(this.move.bind(this), 50);
}