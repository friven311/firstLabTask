function ToastPop(type, title, text) {
    ToastPop.superclass.constructor.call(this, type, title, text)
}

extend(ToastPop, Parrent)

ToastPop.prototype.show = function() {
    ToastPop.superclass.show.call(this)

     var bindedHide = InfoPop.superclass.hide.bind(this)
     setTimeout(bindedHide, 5000)
};

function InfoPop(type, title, text) {
    InfoPop.superclass.constructor.call(this, type, title, text);
  }
  
  extend(InfoPop, ToastPop);
  
  InfoPop.prototype.getTemplate = function() {
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
  
  var info = new InfoPop(
    "info",
    "Info!",
    "Check some stuff"
  );

  function SucPop(type, title, text) {
    SucPop.superclass.constructor.call(this, type, title, text);
  }
  
  extend(SucPop, ToastPop);
  
  SucPop.prototype.getTemplate = function() {
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
  
  var success = new SucPop(
    "success",
    "Sucsess!",
    "EveryThing is fine"
  );

  function WarnPop(type, title, text) {
    WarnPop.superclass.constructor.call(this, type, title, text);
  }
  
  extend(WarnPop, ToastPop);
  
  WarnPop.prototype.getTemplate = function() {
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
  
  var warning = new WarnPop(
    "warning",
    "warning!",
    "some warning"
  );



  function ErrPop(type, title, text) {
    ErrPop.superclass.constructor.call(this, type, title, text);
  }
  
  extend(ErrPop, ToastPop);
  
  ErrPop.prototype.getTemplate = function() {
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
  
  var error = new ErrPop(
    "error",
    " Error!!",
    "Some errors here"
  );







