class ModPopup extends Parrent {
    show() {
        super.show()
        const overlay = document.querySelector(`.${this.type}`)
        
        overlay.addEventListener('click', (event) =>{    
          if(event.target == overlay) {
            modal.hide()
          }
        })
    }

    getTemplate () {
        return `<div class="${this.type}">
        <div class="modal">
            <h1>${this.title}</h1>
            <p>${this.text}</p>
        </div>
    </div>`;
      };
  }
  
  const modal = new ModPopup(
    "overlay",
    "Modal Window",
    "some textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome text"
  );
