function Person(name) {
    Player.call(this, name);
    this.create();
    this.locate(innerWidth / 2, innerHeight);
}

Person.prototype = Object.create(Player.prototype);
Person.prototype.constructur = Person;

Person.prototype.shot = function () {
    new Shot(this.x, this.y, this.elm.offsetWidth, this);
};

Person.prototype.move = function (direction) {
    switch (direction) {
        case 'ArrowRight':
            this.locate(this.x + 10, this.y);
            break;
        case 'ArrowLeft':
            this.locate(this.x - 10, this.y);
            break;
        case 'ArrowUp':
            this.locate(this.x, this.y - 10);
            break;
        case 'ArrowDown':
            this.locate(this.x, this.y + 10);
            break;
    }
};

