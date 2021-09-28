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
    },
    get(e) {
        toasts.show(e).call(this)         
          }   
}

suc.addEventListener("click", function(){toasts.get(success)});
inf.addEventListener("click", function(){toasts.get(info)});
err.addEventListener("click", function(){toasts.get(error)});
warn.addEventListener("click", function(){toasts.get(warning)});

for(var i = 0; i < close.length; i++)
    (function(i) { 
        close[i].addEventListener("click", function() {
            parrent.hide(close[i].closest("div"))
        })
    })(i);