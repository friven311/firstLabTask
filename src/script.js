var err = document.getElementById('errBtn'),
    warn = document.getElementById('warnBtn'),
    suc = document.getElementById('sucBtn'),
    inf = document.getElementById('infBtn'),
    close = document.getElementsByClassName('.closeIco'),
    success =  document.querySelector('.success'),
    info =  document.querySelector('.info'),
    warning =  document.querySelector('.warning'),
    error =  document.querySelector('.error');
  
inf.onclick = function() {
    console.log("info")
    info.style.display = "flex";
}

err.onclick = function() {
    console.log("info")
    error.style.display = "flex";
}

suc.onclick = function() {
    console.log("info")
    success.style.display = "flex";
}

warn.onclick = function() {
    console.log("info")
    warning.style.display = "flex";
}

var parrent = {
    show() {

    },
    hide() {
        close.addEventListener("click", )
    }
};