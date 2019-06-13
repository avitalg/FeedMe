function Person(name) {
    Player.call(this, name);
    Player.prototype.create.call(this);
    Player.prototype.locate.call(this, innerWidth / 2, innerHeight);
}

Person.prototype.shot = function () {
    new Shot(this.x, this.y, this.elm.offsetWidth);
};

Person.prototype.move = function (direction) {
    switch (direction) {
        case 'ArrowRight':
            Player.prototype.locate.call(this, this.x + 10, this.y);
            break;
        case 'ArrowLeft':
            Player.prototype.locate.call(this, this.x - 10, this.y);
            break;
        case 'ArrowUp':
            Player.prototype.locate.call(this, this.x, this.y - 10);
            break;
        case 'ArrowDown':
            Player.prototype.locate.call(this, this.x, this.y + 10);
            break;
    }
};