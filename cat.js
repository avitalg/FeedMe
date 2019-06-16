function Cat(name){
    this.name = name;
    this.create();
    this.x = 0;
    this.y = 0;
}

Cat.prototype.create = function () {
    var player = document.createElement("div");
    var img = document.createElement("img");
    img.src = "cat.png";
    player.appendChild(img);
    player.setAttribute("class", "cat");
    this.elm = document.body.appendChild(player);
};

Cat.prototype.getLocation = function() {
    return {x: this.x , y: this.y};
}

Cat.prototype.getSize = function(){
    return {width: this.elm.offsetWidth, height: this.elm.offsetHeight};
}