var overlay = document.querySelector('.overlay'),
    modalBtn = document.getElementById('modalBtn');

var modalObj = {
    __proto__: parrent,
    show(e) {
        parrent.show(e)
        e.style.visibility = "visible"
        e.classList.add('is-open')        
    },
    hide(e) {
        parrent.hide(e)
        e.style.visibility = "hidden"
        e.classList.remove('is-open')
    },
    get(e) {
        this.show(e).call(this)          
    } 
}

modalBtn.addEventListener("click", function(){modalObj.get(overlay)});
window.onclick = function(event) {
    if (event.target == overlay) {
        modalObj.hide(overlay)
    }
}