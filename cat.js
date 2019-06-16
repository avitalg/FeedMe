function Cat(name){
    Player.call(this, name);
    this.create();
    this.x = 0;
    this.y = 0;
}

Cat.prototype = Object.create(Player.prototype);
Cat.prototype.constructur = Cat;

Cat.prototype.create = function () {
    var player = document.createElement("div");
    var img = document.createElement("img");
    img.src = "cat_dance.gif";
    player.appendChild(img);
    player.setAttribute("class", "cat");
    this.elm = document.body.appendChild(player);
    setInterval(this.setLocation.bind(this), 10000);
};

Cat.prototype.setLocation = function(){
    this.locate(Math.floor(Math.random() * innerWidth), Math.floor(Math.random() * innerHeight));
    console.log("location changed");

}

Cat.prototype.destroy = function(){
    document.body.removeChild(this.elm);
}

Cat.prototype.getLocation = function() {
    return {x: this.x , y: this.y};
}

Cat.prototype.getSize = function(){
    return {width: this.elm.offsetWidth, height: this.elm.offsetHeight};
}