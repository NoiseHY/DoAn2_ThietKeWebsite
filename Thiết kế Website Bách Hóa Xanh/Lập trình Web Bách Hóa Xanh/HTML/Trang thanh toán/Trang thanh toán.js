function calculateProductTotalPrice(product) {
  const productPrice = parseFloat(product.sales.replace('đ', '').replace('.', '').replace(',', '').trim());
  return productPrice * product.quantity;
}

function updateCartDetails() {
  const cartItems = localStorage.getItem('allProductsJSON');
  const productList = JSON.parse(cartItems) || [];

  const cartList = document.getElementById('cartList');
  const totalPriceElement = document.createElement('li'); // Tạo phần tử hiển thị tổng thành tiền
  const shippingFeeElement = document.createElement('li'); // Tạo phần tử hiển thị phí vận chuyển

  cartList.innerHTML = ''; // Xóa nội dung cũ của giỏ hàng

  let totalPrice = 0;

  productList.forEach(product => {
    const item = document.createElement('li');
    const itemInfo = document.createElement('div');
    const itemName = document.createElement('h6');
    const itemPrice = document.createElement('a');
    const itemTotalPrice = document.createElement('span');

    itemName.textContent = product.name.trim();
    itemPrice.textContent = `${product.sales} x ${product.quantity}`;

    const productTotalPrice = calculateProductTotalPrice(product);

    itemTotalPrice.textContent = `${productTotalPrice.toFixed(2)}đ`;

    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice);
    item.appendChild(itemInfo);
    item.appendChild(itemTotalPrice);

    cartList.appendChild(item);

    totalPrice += productTotalPrice;
  });

  const shippingFee = 10000; // Phí vận chuyển

  // Tính tổng thành tiền kèm phí vận chuyển
  const totalWithShipping = totalPrice + shippingFee;


  // Hiển thị phí vận chuyển
  shippingFeeElement.innerHTML = `<span>Phí vận chuyển</span><strong>${shippingFee.toFixed(2)}đ</strong>`;
  cartList.appendChild(shippingFeeElement);

  // Hiển thị tổng thành tiền
  totalPriceElement.innerHTML = `<span>Tổng thành tiền</span><strong>${totalWithShipping.toFixed(2)}đ</strong>`;
  cartList.appendChild(totalPriceElement);
}

document.addEventListener('DOMContentLoaded', function () {
  updateCartDetails();

  var imgTrangChu = document.getElementById('imgTrangChu');
  imgTrangChu.addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/L%E1%BA%ADp%20tr%C3%ACnh%20Web%20B%C3%A1ch%20H%C3%B3a%20Xanh/HTML/Trang%20ch%E1%BB%A7/TrangChu.html';
  })
});
