// defines variables

const slideLeftBtn = document.querySelector(".slider-button-left");
const slideRightBtn = document.querySelector(".slider-button-right");
const partnersDetails = document.querySelector(".partners-details");

const slideLeft = () => {
  partnersDetails.style.transform = "translateX(100px)";
};

const slideRight = () => {
  partnersDetails.style.transform = "translateX(-100px)";
};

slideLeftBtn.addEventListener("click", slideLeft);
slideRightBtn.addEventListener("click", slideRight);
