document.addEventListener('DOMContentLoaded', function() {
  let number = 0;
  const numberElement = document.querySelector('.ipNumbers');
  
  const increaseButton = document.querySelector('.btTang');
  if (increaseButton) {
    increaseButton.addEventListener('click', () => {
      number++;
      numberElement.textContent = number;
    });
  }

  const decreaseButton = document.querySelector('.btGiam');
  if (decreaseButton) {
    decreaseButton.addEventListener('click', () => {
      if (number > 0) {
        number--;
        numberElement.textContent = number;
      }
    });
  }

  const stars = document.querySelectorAll('.rating input');
  if (stars) {
    stars.forEach((star) => {
      star.addEventListener('click', function() {
        const ratingValue = this.value;
        const ratingDisplay = document.getElementById('rating-value');
        if (ratingDisplay) {
          ratingDisplay.innerHTML = `Đánh giá của bạn là ${ratingValue} sao.`;
        }
      });
    });
  }
});
