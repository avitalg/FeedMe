function Person(name, cat) {
    Player.call(this, name);
    this.create();
    this.cat = cat;
    this.locate(innerWidth / 2, innerHeight - 100);
    window.addEventListener('keyup',this.handleKey.bind(this), false);
}

Person.prototype = Object.create(Player.prototype);

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

