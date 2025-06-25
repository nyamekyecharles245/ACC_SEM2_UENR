
const submitContainer = document.getElementsByClassName("submit-container")[0];
const thankContainer = document.getElementsByClassName("thank-you-container")[0];
const submitBtn = document.getElementsByTagName("button")[0];
const ratingButtons = document.getElementsByTagName("h3");
const rateTag = document.getElementsByTagName("span")[0];

// Submit functionality
submitBtn.onclick = function() {
  if (selectedRating === 0) {
    alert("Please select a rating!");
    return;
  }
  
  thankContainer.style.display = "flex";
  submitContainer.style.display = "none";
  rateTag.innerText = "You selected " + selectedRating + " out of 5";
};

let selectedRating = 0;

// Individual onclick handlers for each rating button
ratingButtons[0].onclick = function() {
  ratingButtons[0].classList.remove("active");
  ratingButtons[1].classList.remove("active");
  ratingButtons[2].classList.remove("active");
  ratingButtons[3].classList.remove("active");
  ratingButtons[4].classList.remove("active");
  
  ratingButtons[0].classList.add("active");
  selectedRating = 1;
};

ratingButtons[1].onclick = function() {
  ratingButtons[0].classList.remove("active");
  ratingButtons[1].classList.remove("active");
  ratingButtons[2].classList.remove("active");
  ratingButtons[3].classList.remove("active");
  ratingButtons[4].classList.remove("active");
  
  ratingButtons[1].classList.add("active");
  selectedRating = 2;
};

ratingButtons[2].onclick = function() {
  ratingButtons[0].classList.remove("active");
  ratingButtons[1].classList.remove("active");
  ratingButtons[2].classList.remove("active");
  ratingButtons[3].classList.remove("active");
  ratingButtons[4].classList.remove("active");
  
  ratingButtons[2].classList.add("active");
  selectedRating = 3;
};

ratingButtons[3].onclick = function() {
  ratingButtons[0].classList.remove("active");
  ratingButtons[1].classList.remove("active");
  ratingButtons[2].classList.remove("active");
  ratingButtons[3].classList.remove("active");
  ratingButtons[4].classList.remove("active");
  
  ratingButtons[3].classList.add("active");
  selectedRating = 4;
};

ratingButtons[4].onclick = function() {
  ratingButtons[0].classList.remove("active");
  ratingButtons[1].classList.remove("active");
  ratingButtons[2].classList.remove("active");
  ratingButtons[3].classList.remove("active");
  ratingButtons[4].classList.remove("active");
  
  ratingButtons[4].classList.add("active");
  selectedRating = 5;
};





















































