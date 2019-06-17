function Cat(name){
    Player.call(this, name);
    this.create();
    this.x = 0;
    this.y = 0;
}

Cat.prototype = Object.create(Player.prototype);

Cat.prototype.ramdomImg = function(){
    var imgs = ['imgs/cat_dance.gif'];
    return imgs[ Math.floor(Math.random() * 0)];
}

Cat.prototype.create = function () {
    var player = document.createElement("div");
    var img = document.createElement("img");
    img.src = this.ramdomImg();
    player.appendChild(img);
    player.setAttribute("class", "cat");
    this.catSrc = img;
    this.elm = document.body.appendChild(player);
    setInterval(this.setLocation.bind(this), 10000);
};

Cat.prototype.setLocation = function(){
    this.catSrc.src= this.ramdomImg();
    this.locate(Math.floor(Math.random() * innerWidth), Math.floor(Math.random() * innerHeight));
}

Cat.prototype.getLocation = function() {
    return {x: this.x , y: this.y};
}

Cat.prototype.getSize = function(){
    return {width: this.elm.offsetWidth, height: this.elm.offsetHeight};
}

Cat.prototype.destroy = function(){
    document.body.removeChild(this.elm);
}