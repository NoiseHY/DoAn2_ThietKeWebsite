let slideIndex = 1;
showSlides(slideIndex);

// Tự động chạy slide sau mỗi 7 giây
setInterval(function() { 
  plusSlides(1);
}, 7000);

// Hàm thay đổi slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hàm hiển thị slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}