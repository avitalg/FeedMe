function init() {
    console.log('init');
    window.avital = new Person('avital');
    window.cat = new Cat('charlie');

}

function handleKey(event) {
    const keyName = event.key;
    if (keyName == 'Control') {
        avital.shot();
        return;
    }
    avital.move(keyName);
}

(function () {
    window.addEventListener('DOMContentLoaded', init, false);
    window.addEventListener('keyup',handleKey, false);
})();