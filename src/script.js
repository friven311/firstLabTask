 class Parrent {
   constructor(type, title, text) {
   this.type = type;
   this.title = title;
   this.text = text;
   }
   getTemplate () {
      return ``;
   }
   show () {
      const cont = document.querySelector(`.contMod`);
      if (cont) {
         cont.innerHTML += this.getTemplate();
      }
   }
   hide () {
      const cont = document.querySelector(`.${this.type}`); 
      cont.remove()
      }
 }
