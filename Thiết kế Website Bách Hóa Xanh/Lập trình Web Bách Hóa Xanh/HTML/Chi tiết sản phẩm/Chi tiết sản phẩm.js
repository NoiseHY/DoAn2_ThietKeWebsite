document.addEventListener('DOMContentLoaded', function () {
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
      star.addEventListener('click', function () {
        const ratingValue = this.value;
        const ratingDisplay = document.getElementById('rating-value');
        if (ratingDisplay) {
          ratingDisplay.innerHTML = `Đánh giá của bạn là ${ratingValue} sao.`;
        }
      });
    });
  }

  function displayImage(imageSrc) {
    var displayedImgContainer = document.getElementById('displayed-img-container');
    displayedImgContainer.innerHTML = `<img src="${imageSrc}" alt="Selected Image">`;
  }

  const imageSelector = document.querySelector('.image-selector');
  if (imageSelector) {
    imageSelector.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG') {
        const selectedImageSrc = event.target.getAttribute('src');
        displayImage(selectedImageSrc);
      }
    });
  }


  const images = document.querySelectorAll('.image-selector-img img');
  let currentImageIndex = 0;

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const selectedImageSrc = images[currentImageIndex].getAttribute('src');
    displayImage(selectedImageSrc);
  }

  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const selectedImageSrc = images[currentImageIndex].getAttribute('src');
    displayImage(selectedImageSrc);
  }

  // Xử lý khi chọn ảnh
  function handleImageSelection(clickedImage) {
    images.forEach((image) => {
      // Loại bỏ lớp 'selected' của các ảnh khác
      image.classList.remove('selected');
    });
    // Thêm lớp 'selected' cho ảnh được chọn
    clickedImage.classList.add('selected');
  }

  // Xử lý khi nhấn vào ảnh
  images.forEach((image) => {
    image.addEventListener('click', function (event) {
      const clickedImage = event.target;
      handleImageSelection(clickedImage);
      const selectedImageSrc = clickedImage.getAttribute('src');
      displayImage(selectedImageSrc);
    });
  });

  const prevButton = document.querySelector('.prev-img');
  const nextButton = document.querySelector('.next-img');

  // Xử lý khi chọn ảnh
  function handleImageSelection(clickedImage) {
    images.forEach((image) => {

      image.classList.remove('selected');
      prevButton.classList.remove('selected');
      nextButton.classList.remove('selected');
    });
    // Thêm lớp 'selected' cho ảnh được chọn
    clickedImage.classList.add('selected');
  }

  // Xử lý khi nhấn vào ảnh
  images.forEach((image) => {
    image.addEventListener('click', function (event) {
      const clickedImage = event.target;
      handleImageSelection(clickedImage);
      const selectedImageSrc = clickedImage.getAttribute('src');
      displayImage(selectedImageSrc);
    });
  });


  function handleButtonClick(clickedButton) {
    const buttons = [prevButton, nextButton];
    buttons.forEach((button) => {

      button.classList.remove('selected');
      images.forEach((image) => {
        image.classList.remove('selected');
      });
    });

    clickedButton.classList.add('selected');
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', function (event) {
      handleButtonClick(prevButton);
      showPreviousImage();

    });
    nextButton.addEventListener('click', function (event) {
      handleButtonClick(nextButton);
      showNextImage();

    });
  }


  var imgHome = document.getElementById('imgHome');
  imgHome.addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/L%E1%BA%ADp%20tr%C3%ACnh%20Web%20B%C3%A1ch%20H%C3%B3a%20Xanh/HTML/Trang%20ch%E1%BB%A7/TrangChu.html';
  });

  const storedProduct = localStorage.getItem('selectedProduct');

  if (storedProduct) {
    const productData = JSON.parse(storedProduct);

    const displayedImgContainer = document.getElementById('displayed-img-container');
    const productNameElement = document.querySelector('.CTSP-name a');
    const productRatingElement = document.querySelector('.CTSP-DG p:nth-child(1)');
    const productOriginalPriceElement = document.querySelector('.CTSP-cost .CTSP-cost_GiaGoc');
    const productSalePriceElement = document.querySelector('.CTSP-cost a');
    const productDiscountElement = document.querySelector('.CTSP-cost .CTSP-cost-GG');
    const productQuantityElement = document.querySelector('.CTSP-SL-numbers .ipNumbers');

    displayedImgContainer.innerHTML = `<img src="${productData.img}" alt="${productData.name}">`;
    productNameElement.textContent = productData.name.trim();
    productRatingElement.textContent = `${productData.star.trim()} ☆`;
    productOriginalPriceElement.textContent = productData.price.trim();
    productSalePriceElement.textContent = productData.sales.trim();
    productDiscountElement.textContent = productData.pt.trim();
    productQuantityElement.textContent = productData.quantity || '0'; // Thay 'quantity' bằng key tương ứng trong dữ liệu sản phẩm
  }


  // Lấy phần tử hình ảnh từ DOM
  const productImageElement = document.getElementById('productImage');

  // Gán đường dẫn hình ảnh từ selectedProduct vào thuộc tính src của thẻ <img>
  if (storedProduct) {
    const productData = JSON.parse(storedProduct);
    productImageElement.src = productData.img;
  }

});
