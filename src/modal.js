function ModPopup(type, title, text) {
    ModPopup.superclass.constructor.call(this, type, title, text);
  }
  
  extend(ModPopup, Parrent);
  
  ModPopup.prototype.show = function () {

    ModPopup.superclass.show.call(this)

    var overlay = document.querySelector(`.${this.type}`)
    
    overlay.addEventListener('click', function(event){

      if(event.target == overlay) {
        modal.hide()
      }
    })
  }
  
  ModPopup.prototype.getTemplate = function () {
    return `<div class="${this.type}">
    <div class="modal">
        <h1>${this.title}</h1>
        <p>${this.text}</p>
    </div>
</div>`;
  };
  
  var modal = new ModPopup(
    "overlay",
    "Modal Window",
    "some textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome text"
  );