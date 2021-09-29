function Parrent(type, title, text) {
     "use strict";
     this.type = type;
     this.title = title;
     this.text = text;
   }

   Parrent.prototype = {
     constructor: Parrent,
   };
   
   Parrent.prototype.getTemplate = function () {
     return ``;
   };
   
   Parrent.prototype.show = function () {
     var cont = document.querySelector(`.contMod`);
     if (cont) {
          cont.innerHTML += this.getTemplate();
     }
   };
   
   Parrent.prototype.hide = function () {
     var cont = document.querySelector(`.${this.type}`); 
     cont.remove()
     }