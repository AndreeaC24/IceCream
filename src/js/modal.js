(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-s]"),
      closeModalBtn: document.querySelector("[data-modal-closed]"),
      modal: document.querySelector("[data-modal-hidden]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
  (() => {
    
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-s-fr]"),
      closeModalBtn: document.querySelector("[data-modal-close-fr]"),
      modal: document.querySelector("[data-modal-fr]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();