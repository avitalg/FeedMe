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
    this.y = this.newShot.offsetTop - 10;
    if (this.newShot.offsetTop < 0 || this.checkHit()) {
        this.destroy();
    }
}

Shot.prototype.checkHit = function () {
    return window.cat.getLocation().x - 5 <= this.x && 
    window.cat.getLocation().x + window.cat.getSize().width >= this.x &&
    window.cat.getLocation().y + window.cat.getSize().height <= this.y+5&&
    window.cat.getLocation().y + window.cat.getSize().height >= this.y-5;
}

Shot.prototype.create = function () {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "shot");
    newDiv.style.top = this.y + "px";
    this.newShot = document.body.appendChild(newDiv);
    this.x = this.x + this.elmWidth - (this.newShot.offsetWidth / 2);
    newDiv.style.left = this.x  + "px";
    this.interval = setInterval(this.move.bind(this), 50);
}

Shot.prototype.destroy = function(){
    clearInterval(this.interval);
    document.body.removeChild(this.newShot);

}