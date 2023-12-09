function displayImage(imageSrc) {
  var displayedImgContainer = document.getElementById('displayed-img-container');
  displayedImgContainer.innerHTML = `<img src="${imageSrc}" alt="Selected Image">`;
}

// Hiển thị ảnh đầu tiên khi trang được tải
window.onload = function() {
  var firstImageSrc = document.querySelector('.image-selector img').getAttribute('src');
  displayImage(firstImageSrc);
};