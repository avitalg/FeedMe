function Cat(name){
    this.name = name;
    this.create();
}

Cat.prototype.create = function () {
    var player = document.createElement("div");
    var img = document.createElement("img");
    img.src = "cat.png";
    player.appendChild(img);
    player.setAttribute("class", "cat");
    this.elm = document.body.appendChild(player);
};