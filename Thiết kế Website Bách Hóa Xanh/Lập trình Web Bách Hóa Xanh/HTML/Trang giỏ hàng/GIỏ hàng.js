document.addEventListener('DOMContentLoaded', function () {
  // Lấy dữ liệu từ local storage
  let productList = JSON.parse(localStorage.getItem('productListJSON')) || [];

  function renderProducts() {
    const cartContainer = document.querySelector('.cart-container-info');

    cartContainer.innerHTML = '';

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
              <input type="number" min="1" value="1" class="product-quantity"> <!-- Input số lượng -->
              <button class="update-quantity-btn">Cập nhật số lượng</button> <!-- Button cập nhật số lượng -->
              <button class="delete-product-btn">
                Xóa sản phẩm
              </button>
              <a>
                Sản phẩm tương tự &#62; &#62;
              </a>
            </div>
          </div>
        </div>
      `;

      const quantityInput = productDiv.querySelector('.product-quantity');
      const updateQuantityBtn = productDiv.querySelector('.update-quantity-btn');

      updateQuantityBtn.addEventListener('click', function () {
        const newQuantity = parseInt(quantityInput.value, 10);
        product.quantity = newQuantity; // Cập nhật số lượng sản phẩm trong đối tượng product

        calculateTotalPrice(); // Tính lại tổng giá tiền
        calculateShippingAndTotal(); // Tính lại phí vận chuyển và tổng thanh toán
      });

      cartContainer.appendChild(productDiv);


    });


  }

  function attachDeleteEvent() {
    const deleteButtons = document.querySelectorAll('.delete-product-btn');
    deleteButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        productList.splice(index, 1);
        localStorage.setItem('productListJSON', JSON.stringify(productList));

        renderProducts();
        calculateTotalPrice();
        calculateShippingAndTotal();
        attachDeleteEvent(); // Gắn lại sự kiện sau khi render lại sản phẩm
      });
    });
  }

  renderProducts();
  attachDeleteEvent();

  function calculateTotalPrice() {
    const totalPriceElement = document.querySelector('.cart-price-tt p');
    let total = 0;

    productList.forEach(product => {
      const productQuantity = product.quantity || 1; // Số lượng sản phẩm, nếu không có số lượng thì mặc định là 1
      const price = parseFloat(product.sales.trim().replace('đ', '').replace('.', '').replace(',', '.'));

      total += price * productQuantity; // Tính tổng giá tiền cho từng sản phẩm
    });

    totalPriceElement.textContent = `${total.toFixed(2).replace('.', ',')}đ`;
  }


  function calculateShippingAndTotal() {
    const shippingFeeElement = document.querySelector('.cart-price-vc p');
    const totalPaymentElement = document.querySelector('.cart-price-tong p');
    const shippingFeePerProduct = 5000; // Giả sử phí vận chuyển cho mỗi sản phẩm là 5000đ (bạn có thể thay đổi giá trị này)

    let totalShippingFee = 0;

    productList.forEach(product => {
      const productQuantity = product.quantity || 1; // Số lượng sản phẩm, nếu không có số lượng thì mặc định là 1
      totalShippingFee += shippingFeePerProduct * productQuantity; // Tính phí vận chuyển cho từng sản phẩm
    });

    shippingFeeElement.textContent = `${totalShippingFee.toFixed(2).replace('.', ',')}đ`;

    const totalPrice = parseFloat(document.querySelector('.cart-price-tt p').textContent.replace('đ', '').replace('.', '').replace(',', '.'));
    const totalPayment = totalPrice + totalShippingFee;
    totalPaymentElement.textContent = `${totalPayment.toFixed(2).replace('.', ',')}đ`;
  }



  // Gọi hàm tính tổng tiền, phí vận chuyển và tổng thanh toán
  calculateTotalPrice();
  calculateShippingAndTotal();

  // Hàm kiểm tra xem sản phẩm đã tồn tại trong danh sách hay chưa
  function isProductExist(productList, newProduct) {
    return productList.some(product => (
      product.name === newProduct.name &&
      product.img === newProduct.img &&
      product.price === newProduct.price &&
      product.sales === newProduct.sales &&
      product.star === newProduct.star &&
      product.pt === newProduct.pt
    ));
  }

  var imgThanhtoan = document.getElementById('imgThanhtoan');
  imgThanhtoan.addEventListener('click', function () {
    const cartProducts = document.querySelectorAll('.cart-container-product');
    const allProducts = JSON.parse(localStorage.getItem('allProductsJSON')) || [];

    cartProducts.forEach(productElement => {
      const productName = productElement.querySelector('p').textContent.trim();
      const productImage = productElement.querySelector('.cart-container-product-img img').getAttribute('src');
      const productPrice = productElement.querySelector('#product-price').textContent.trim();
      const productSales = productElement.querySelector('#product-sales').textContent.trim();
      const productStar = productElement.querySelector('.product-stars').textContent.trim();
      const productPT = productElement.querySelector('.cart-container-product-info-sales p').textContent.trim();
      const productQuantity = parseInt(productElement.querySelector('.product-quantity').value, 10);

      const product = {
        name: productName,
        img: productImage,
        price: productPrice,
        sales: productSales,
        star: productStar,
        pt: productPT,
        quantity: productQuantity,
      };

      // Kiểm tra xem sản phẩm đã tồn tại trong danh sách allProducts chưa
      const isProductExist = allProducts.some(existingProduct => (
        existingProduct.name === product.name &&
        existingProduct.img === product.img &&
        existingProduct.price === product.price &&
        existingProduct.sales === product.sales &&
        existingProduct.star === product.star &&
        existingProduct.pt === product.pt
      ));

      
      if (!isProductExist) {
        allProducts.push(product);
      }
    });

    localStorage.setItem('allProductsJSON', JSON.stringify(allProducts));

    window.location.href = 'http://127.0.0.1:5500/L%E1%BA%ADp%20tr%C3%ACnh%20Web%20B%C3%A1ch%20H%C3%B3a%20Xanh/HTML/Trang%20thanh%20to%C3%A1n/Trang%20thanh%20to%C3%A1n.html';
  });

});
