const refs = {
  mailingForm: document.querySelector(".mailing"),
};

console.log(refs.mailingForm);

refs.mailingForm.addEventListener("submit", onMailingSubmit);

function onMailingSubmit(e) {
  e.preventDefault();
}
