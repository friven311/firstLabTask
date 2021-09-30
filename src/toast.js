class ToastPop extends Parrent {
  show () {
    super.show()
     setTimeout(() =>{super.hide()}, 5000)
  }
}

class InfoPop extends ToastPop  {
  getTemplate () {
    return `
    <div class="flexability">
      <div class="popup info">    
            <img class="infoIco" src="../img/info.png" alt="logo" >
            <img src="../img/ico/close.png" class="closeIco" onclick="info.hide()">
          <div class="col" >
            <span>${this.title}</span>
            <span>${this.text}</span>
          </div>
          </div>      
      </div>`
  }
}

const info = new InfoPop(
  "info",
  "Info!",
  "Check some stuff"
);

class SucPop extends ToastPop{
  getTemplate = function() {
    return `
    <div class="flexability">
      <div class="popup success">    
        <img src="../img/ico/close.png" class="closeIco" onclick="success.hide()">
        <img src="../img/succs.png" alt="" class="succsessIco">
          <div class="col" >
            <span>${this.title}</span>
            <span>${this.text}</span>
          </div>
        </div>      
      </div>`
  } 
}

const success = new SucPop(
  "success",
  "Sucsess!",
  "EveryThing is fine"
);

class WarnPop extends ToastPop{
  getTemplate = function() {
    return `
    <div class="flexability">
      <div class="popup warning">    
      <img src="../img/ico/close.png" class="closeIco" onclick="warning.hide()">
      <img src="../img/warn.png" alt="" class="warningIco">
          <div class="col" >
            <span>${this.title}</span>
            <span>${this.text}</span>
          </div>
        </div>      
      </div>`
  }
}

const warning = new WarnPop(
  "warning",
  "warning!",
  "some warning"
);

class ErrPop extends ToastPop{
  getTemplate = function() {
    return `
    <div class="flexability">
      <div class="popup error">    
        <img src="../img/ico/close.png" class="closeIco" onclick="error.hide()">
        <img src="../img/error.png" alt="" class="errorIco">
          <div class="col" >
            <span>${this.title}</span>
            <span>${this.text}</span>
          </div>
        </div>      
      </div>`
  }   
}

const error = new ErrPop(
  "error",
  " Error!!",
  "Some errors here"
);
