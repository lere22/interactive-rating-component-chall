// initialize variable
const form = document.getElementById("rating-form");
const ratingStartCard = document.querySelector(".rating-start");
const ratingThanksCard = document.querySelector(".rating-thanks");
const submitBtn = document.getElementById("submit");
const rateAgainBtn = document.getElementById("rate-again");
const ratings = document.querySelectorAll('input[name="rating"]');
const ratingSelected = document.querySelector(".rating-selection-number");

// the procces
const displayThanksCard = function () {
	ratingStartCard.style.display = "none";
	ratingThanksCard.style.display = "flex";
};

const getRating = function () {
	let checkedRating = null;
	ratings.forEach((rating) => {
		if (rating.checked) {
			checkedRating = rating.value;
		}
	});
	if (checkedRating) {
		ratingSelected.textContent = checkedRating;
		displayThanksCard();
	}
};

const displayStartCard = function () {
	ratings.forEach((rating) => {
		rating.checked = false;
	});
	ratingStartCard.style.display = "flex";
	ratingThanksCard.style.display = "none";
};

const handleSubmit = function (e) {
	e.preventDefault();
	getRating();
};

const handleReset = function () {
	displayStartCard();
};

// rvent listener
form.addEventListener("submit", handleSubmit);
rateAgainBtn.addEventListener("click", handleReset);
