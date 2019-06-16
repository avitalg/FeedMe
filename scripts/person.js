function Person(name) {
    Player.call(this, name);
    this.create();
    this.locate(innerWidth / 2, innerHeight);
    window.addEventListener('keyup',this.handleKey.bind(this), false);
}

Person.prototype = Object.create(Player.prototype);
Person.prototype.constructur = Person;

Person.prototype.shot = function () {
    new Shot(this.x, this.y, this.elm.offsetWidth, this);
};

Person.prototype.handleKey = function(event) {
    const keyName = event.key;
    if (keyName == 'Control') {
        this.shot();
        return;
    }
    this.move(keyName);
}

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

