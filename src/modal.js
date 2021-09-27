import {parrent} from './script.js'
var overlay = document.querySelector('.overlay'),
    modalBtn = document.getElementById('modalBtn');

var modalObj = {
    __proto__: parrent,
    show(e) {
        parrent.show(e)

    },
    hide(e) {
        parrent.hide(e)

    }
}


modalBtn.addEventListener("click", function(){modalObj.show(overlay)});
overlay.addEventListener("click", function(){modalObj.hide(overlay)});