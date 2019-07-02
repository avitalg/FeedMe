function init() {
    let cat = new Cat('charlie');
    let avital = new Person('avital', cat);
}


(function () {
    window.addEventListener('DOMContentLoaded', init, false);
})();