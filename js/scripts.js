var contactsButton = document.querySelector(".contacts__btn"),
	feedback = document.querySelector(".feedback"),
	modalClose = feedback.querySelector(".modal__close"),
	inputName = feedback.querySelector("input[name=feedback-name]");

contactsButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedback.classList.add("modal--opened");
	inputName.focus();
});

modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedback.classList.remove("modal--opened");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if(feedback.classList.contains("modal--opened")) {
			evt.preventDefault();
			feedback.classList.remove("modal--opened");
		}
	}
});