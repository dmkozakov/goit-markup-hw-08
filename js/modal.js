const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  backdrop: document.querySelector(".backdrop"),
};

refs.openModalBtn.addEventListener("click", onModalOpenClick);

function onModalOpenClick() {
  document.body.classList.add("modal-open");
  refs.backdrop.classList.remove("backdrop--is-hidden");

  refs.closeModalBtn.addEventListener("click", onModalCloseClick);
  refs.backdrop.addEventListener("click", onBackdropClick);
  window.addEventListener("keydown", onEscKeyClose);

  function onModalCloseClick() {
    closeModal();
  }

  function onBackdropClick(e) {
    if (e.target.classList.contains("backdrop")) {
      closeModal();
    }
  }

  function onEscKeyClose(e) {
    console.log(e);
    if (e.code === "Escape") {
      closeModal();
    }
  }

  function closeModal() {
    document.body.classList.remove("modal-open");
    refs.backdrop.classList.add("backdrop--is-hidden");
    window.removeEventListener("keydown", onEscKeyClose);
    refs.backdrop.removeEventListener("click", onBackdropClick);
  }
}
