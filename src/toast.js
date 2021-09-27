import {parrent} from './script.js'
var err = document.getElementById('errBtn'),
    warn = document.getElementById('warnBtn'),
    suc = document.getElementById('sucBtn'),
    inf = document.getElementById('infBtn'),
    success =  document.querySelector('.success'),
    info =  document.querySelector('.info'),
    warning =  document.querySelector('.warning'),
    error =  document.querySelector('.error'),
    close = document.querySelectorAll('.closeIco');

var toasts = {
    __proto__: parrent,
    show(e) {
        parrent.show(e)
        setTimeout(() => {
            parrent.hide(e)
        }, 5000);
    }
}
suc.addEventListener("click", function(){toasts.show(success)});
inf.addEventListener("click", function(){toasts.show(info)});
err.addEventListener("click", function(){toasts.show(error)});
warn.addEventListener("click", function(){toasts.show(warning)});

for(var i = 0; i < close.length; i++)
    (function(i) { 
        close[i].addEventListener("click", function() {
            parrent.hide(close[i].closest("div"))
        })
    })(i);