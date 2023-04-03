// initialize variable
const form = document.getElementById("rating-form");
const ratingStartCard = document.querySelector(".rating-start");
const ratingThanksCard = document.querySelector(".rating-thanks");
const submitBtn = document.getElementById("submit");
const rateAgainBtn = document.getElementById("rate-again");

// The procces
const displayThanksCard = function () {
	ratingStartCard.style.display = "none";
	ratingThanksCard.style.display = "flex";
};

const displayStartCard = function () {
	ratingStartCard.style.display = "flex";
	ratingThanksCard.style.display = "none";
};

const handleSubmit = function (e) {
	e.preventDefault();
	displayThanksCard();
};

const handleReset = function (e) {
	e.preventDefault();
	displayStartCard();
};

// Event listener
form.addEventListener("submit", handleSubmit);
rateAgainBtn.addEventListener("click", handleReset);
