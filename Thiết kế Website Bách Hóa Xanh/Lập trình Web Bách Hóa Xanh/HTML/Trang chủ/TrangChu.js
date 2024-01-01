document.addEventListener('DOMContentLoaded', function () {

  // Các đoạn mã để đếm ngược
  const phầnTửNgày = document.querySelector("#days");
  const phầnTửGiờ = document.querySelector("#hours");
  const phầnTửPhút = document.querySelector("#minutes");
  const phầnTửGiây = document.querySelector("#seconds");

  const thờiGianMụcTiêu = new Date("2024-01-10T00:00:00").getTime();

  function cậpNhậtĐồngHồ() {
    const thờiGianHiệnTại = new Date().getTime();
    const khoảngCáchThờiGian = thờiGianMụcTiêu - thờiGianHiệnTại;

    if (khoảngCáchThờiGian > 0) {
      const sốNgàyCònLại = Math.floor(khoảngCáchThờiGian / (1000 * 60 * 60 * 24));
      const sốGiờCònLại = Math.floor((khoảngCáchThờiGian % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const sốPhútCònLại = Math.floor((khoảngCáchThờiGian % (1000 * 60 * 60)) / (1000 * 60));
      const sốGiâyCònLại = Math.floor((khoảngCáchThờiGian % (1000 * 60)) / 1000);

      phầnTửNgày.textContent = sốNgàyCònLại;
      phầnTửGiờ.textContent = sốGiờCònLại.toString().padStart(2, '0');
      phầnTửPhút.textContent = sốPhútCònLại.toString().padStart(2, '0');
      phầnTửGiây.textContent = sốGiâyCònLại.toString().padStart(2, '0');
    } else {
      phầnTửNgày.textContent = '00';
      phầnTửGiờ.textContent = '00';
      phầnTửPhút.textContent = '00';
      phầnTửGiây.textContent = '00';
      clearInterval(cậpNhậtMỗiGiây);
    }
  }

  const cậpNhậtMỗiGiây = setInterval(cậpNhậtĐồngHồ, 1000);
  cậpNhậtĐồngHồ();

  // Event listener cho hình ảnh
  var imgDanhMuc = document.getElementById('imgDanhMuc');
  imgDanhMuc.addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/L%E1%BA%ADp%20tr%C3%ACnh%20Web%20B%C3%A1ch%20H%C3%B3a%20Xanh/HTML/Trang%20danh%20m%E1%BB%A5c/Danhmuc.html';
  });

  // Event listener cho hình ảnh
  var imgCart = document.getElementById('imgCart');
  imgCart.addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/L%E1%BA%ADp%20tr%C3%ACnh%20Web%20B%C3%A1ch%20H%C3%B3a%20Xanh/HTML/Trang%20gi%E1%BB%8F%20h%C3%A0ng/Gi%E1%BB%8F%20h%C3%A0ng.html';
  });

  var imgTrangCaNhan = document.getElementById('imgTrangCaNhan');
  imgTrangCaNhan.addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/L%E1%BA%ADp%20tr%C3%ACnh%20Web%20B%C3%A1ch%20H%C3%B3a%20Xanh/HTML/Trang%20c%C3%A1%20nh%C3%A2n/Trang%20c%C3%A1%20nh%C3%A2n.html';
  })

  var productImg = document.getElementById('product-img');
  productImg.addEventListener('click', function () {
    // Lấy thông tin sản phẩm từ các phần tử HTML
    const product = {};
    const productNameElement = document.querySelector('#product-name');
    const productPriceElement = document.querySelector('#product-price');
    const productSalesElement = document.querySelector('#product-sales');
    const productStarElement = document.querySelector('#product-stars');
    const productPtElement = document.querySelector('#product-pt');

    product.img = this.src;
    product.name = productNameElement.textContent.trim();
    product.price = productPriceElement.textContent.trim();
    product.sales = productSalesElement.textContent.trim();
    product.star = productStarElement.textContent.trim();
    product.pt = productPtElement.textContent.trim();

    localStorage.setItem('selectedProduct', JSON.stringify(product));

    window.location.href = 'http://127.0.0.1:5500/L%E1%BA%ADp%20tr%C3%ACnh%20Web%20B%C3%A1ch%20H%C3%B3a%20Xanh/HTML/Chi%20ti%E1%BA%BFt%20s%E1%BA%A3n%20ph%E1%BA%A9m/Chi%20ti%E1%BA%BFt%20s%E1%BA%A3n%20ph%E1%BA%A9m.html';
  });

  function updateCartCount() {
    const cartCountElement = document.querySelector('.img-cart-content'); // Chọn phần tử span

    if (cartCountElement) {
      const cartCount = productList.length; // Lấy số lượng sản phẩm từ danh sách
      cartCountElement.textContent = cartCount; // Cập nhật số lượng sản phẩm trong giao diện người dùng
    }
  }

  // Gọi hàm để cập nhật số lượng khi có sự thay đổi trong danh sách sản phẩm
  updateCartCount();

});



let slideIndex = 1;
showSlides(slideIndex);

// Tự động chạy slide sau mỗi 7 giây
setInterval(function () {
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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

let productList = [];

// Hàm để lưu danh sách sản phẩm vào Local Storage
function saveProductListToLocalStorage() {
  localStorage.setItem('productListJSON', JSON.stringify(productList));
}

// Hàm để load danh sách sản phẩm từ Local Storage
function loadProductListFromLocalStorage() {
  const productListFromLocalStorage = localStorage.getItem('productListJSON');
  productList = JSON.parse(productListFromLocalStorage) || [];
}

loadProductListFromLocalStorage();

function addToProductList(element) {
  const product = {};

  // Lấy các thông tin sản phẩm từ phần tử HTML
  const parent = element.closest('.Sanpham-tpye');
  product.img = parent.querySelector('#product-img').src;
  product.name = parent.querySelector('#product-name').textContent;
  product.price = parent.querySelector('#product-price').textContent;
  product.sales = parent.querySelector('#product-sales').textContent;
  product.star = parent.querySelector('#product-stars').textContent;
  product.pt = parent.querySelector('#product-pt').textContent;

  // Thêm sản phẩm vào danh sách
  productList.push(product);

  console.log('Sản phẩm đã được thêm vào danh sách:', productList);
  alert('Sản phẩm đã được thêm vào giỏ hàng');

  saveProductListToLocalStorage();
  location.reload();
}



function convertToJSON() {
  const productListJSON = JSON.stringify(productList);
  localStorage.setItem('productListJSON', productListJSON);

  // Đợi 
  setTimeout(() => {
    window.location.href = 'http://127.0.0.1:5500/L%E1%BA%ADp%20tr%C3%ACnh%20Web%20B%C3%A1ch%20H%C3%B3a%20Xanh/HTML/Trang%20gi%E1%BB%8F%20h%C3%A0ng/Gi%E1%BB%8F%20h%C3%A0ng.html';
  }, 100);
}

