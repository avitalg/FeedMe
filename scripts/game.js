function init() {
    window.avital = new Person('avital');
    window.cat = new Cat('charlie');
}


(function () {
    window.addEventListener('DOMContentLoaded', init, false);
})();