function Shot(elmX, elmY, elmWidth, player) {
    this.elmWidth = elmWidth / 2;
    this.x = elmX;
    this.y = elmY;  
    this.interval;
    this.cat = player.cat;
    this.shotCal = player.updateScore.bind(player);
    this.create();
    document.body.className = "shoted";
    setTimeout(()=>{
        document.body.className="";
    },1000);
}

Shot.prototype.move = function () {
    if (!this.newShot) {
        clearInterval(this.interval);
        return;
    }
    this.newShot.style.top = this.newShot.offsetTop - 10 + "px";
    this.y = this.newShot.offsetTop - 10;
    var checkHit = this.checkHit();
    
    if (this.newShot.offsetTop < 0 || checkHit) {
        this.destroy();
    }

    if (checkHit){
        this.shotCal(5);
    }
}

Shot.prototype.checkHit = function () {
    return this.cat.getLocation().x - 5 <= this.x && 
    this.cat.getLocation().x + this.cat.getSize().width - 10 >= this.x &&
    this.cat.getLocation().y + this.cat.getSize().height <= this.y+5&&
    this.cat.getLocation().y + this.cat.getSize().height >= this.y-5;
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