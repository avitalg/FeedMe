function Player(name) {
    this.name = name;
    this.points = 0;
};

Player.prototype.create = function () {
    var player = document.createElement("div");
    player.setAttribute("class", "player");
    this.elm = document.body.appendChild(player);
    this.createBoard();
};

Player.prototype.createBoard = function(){
    var score = document.createElement("div");
    score.setAttribute("class", "scores");
    this.score = document.body.appendChild(score);
    this.updateScore(0);
}

Player.prototype.updateScore = function(newPoints){
    this.points += newPoints;
    this.score.textContent = "Points : " + this.points;
}

Player.prototype.locate = function (x, y) {
    this.x = x;
    this.y = y;
    this.changeLocation();
};

Player.prototype.changeLocation = function () {
    this.elm.style.top = this.y + "px";
    this.elm.style.left = this.x + "px";
};


