function Player(name) {
    this.name = name;
  //  this.create();
    //this.locate(x, y);
};

Player.prototype.create = function () {
    var player = document.createElement("div");
    player.setAttribute("class", "player");
    this.elm = document.body.appendChild(player);
};

Player.prototype.locate = function (x, y) {
    this.x = x;
    this.y = y;
    Player.prototype.changeLocation.call( this );
};

Player.prototype.changeLocation = function () {
    this.elm.style.top = this.y + "px";
    this.elm.style.left = this.x + "px";
};


