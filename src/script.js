var err = document.getElementById('errBtn'),
    warn = document.getElementById('warnBtn'),
    suc = document.getElementById('sucBtn'),
    inf = document.getElementById('infBtn'),
    success =  document.querySelector('.success'),
    info =  document.querySelector('.info'),
    warning =  document.querySelector('.warning'),
    error =  document.querySelector('.error'),
    close = document.querySelectorAll('.closeIco'),
    overlay = document.querySelector('.overlay'),
    modalBtn = document.getElementById('modalBtn');
    
    var parrent = {
        show(e) {
             e.style.display ="flex"
        },
        hide(e) {
            e.style.display ="none"
        }            
    };

    var toasts = {
        __proto__: parrent,
        show(e) {
            parrent.show(e)
            setTimeout(() => {
                parrent.hide(e)
            }, 5000);
        }

    }
    var modalObj = {
        __proto__: parrent,
        show(e) {
            parrent.show(e)

        },
        hide(e) {
            parrent.hide(e)

        }
    }

suc.addEventListener("click", function(){toasts.show(success)});
inf.addEventListener("click", function(){toasts.show(info)});
err.addEventListener("click", function(){toasts.show(error)});
warn.addEventListener("click", function(){toasts.show(warning)});
modalBtn.addEventListener("click", function(){modalObj.show(overlay)});
overlay.addEventListener("click", function(){modalObj.hide(overlay)});

for(var i = 0; i < close.length; i++)
    (function(i) { 
        close[i].addEventListener("click", function() {
            parrent.hide(close[i].closest("div"))
        })
    })(i);
