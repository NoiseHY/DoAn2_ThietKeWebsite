document.addEventListener('DOMContentLoaded', function () {
  // Lấy dữ liệu từ local storage
  const productListFromLocalStorage = localStorage.getItem('productListJSON');
  const productList = JSON.parse(productListFromLocalStorage) || [];

  function renderProducts() {
    const cartContainer = document.querySelector('.cart-container-info');

    productList.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('cart-container-product');

      productDiv.innerHTML = `
        <div class="cart-container-product">
          <div class="cart-container-product-img">
            <img src="${product.img}">
          </div>
          <div class="cart-container-product-info">
            <p>${product.name.trim()}</p>
            <div class="cart-container-product-info-container">
              <div class="sales-txt">
                <p style="text-decoration-line: line-through; color: black;" id="product-price">
                  ${product.price.trim()}
                </p>
                <p id="product-sales">
                  ${product.sales.trim()}
                </p>
              </div>
              <div class="sales-stars">
                <div class="cart-container-product-info-sales">
                  <a class="product-stars">
                    ${product.star.trim()} <img src="/Lập trình Web Bách Hóa Xanh/HTML/Trang chủ/Anh/SanPham/star.png">
                  </a>
                  <p>
                    ${product.pt.trim()}
                  </p>
                </div>
              </div>                           
            </div>
            <div class="cart-container-product-info-bt">
              <button>
                Xóa sản phẩm 
              </button>
              <a>
                Sản phẩm tương tự &#62; &#62;
              </a>
            </div>
          </div>
        </div>
      `;

      cartContainer.appendChild(productDiv);
    });
  }

  // Gọi hàm render 
  renderProducts();

  // Tính tổng tiền
  function calculateTotalPrice() {
    const totalPriceElement = document.querySelector('.cart-price-tt p');
    let total = 0;

    productList.forEach(product => {
      const price = parseFloat(product.sales.trim().replace('đ', '').replace('.', '').replace(',', '.'));
      total += price;
    });

    totalPriceElement.textContent = `${total.toFixed(2).replace('.', ',')}đ`;
  }

  // Tính phí vận chuyển và tổng thanh toán
  function calculateShippingAndTotal() {
    const shippingFeeElement = document.querySelector('.cart-price-vc p');
    const totalPaymentElement = document.querySelector('.cart-price-tong p');
    const shippingFee = 50000; // Giả sử phí vận chuyển là 50.000đ

    shippingFeeElement.textContent = `${shippingFee.toFixed(2).replace('.', ',')}đ`;

    const totalPrice = parseFloat(document.querySelector('.cart-price-tt p').textContent.replace('đ', '').replace('.', '').replace(',', '.'));
    const totalPayment = totalPrice + shippingFee;
    totalPaymentElement.textContent = `${totalPayment.toFixed(2).replace('.', ',')}đ`;
  }

  // Gọi hàm tính tổng tiền, phí vận chuyển và tổng thanh toán
  calculateTotalPrice();
  calculateShippingAndTotal();
});
