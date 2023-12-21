document.addEventListener('DOMContentLoaded', function() {
  const passwordInputs = document.querySelectorAll('input[type="password"]');
  const passwordIcons = document.querySelectorAll('.form-group-icon');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const registerForm = document.getElementById('registerForm');
  const successMessage = document.getElementById('successMessage');

  // Xử lý hiển thị và ẩn mật khẩu
  passwordIcons.forEach(function(icon, index) {
    icon.addEventListener('click', function() {
      if (passwordInputs[index].type === 'password') {
        passwordInputs[index].type = 'text';
        icon.src = '/Lập trình Web Bách Hóa Xanh/HTML/Trang đăng nhập/Anh/show.png';
      } else {
        passwordInputs[index].type = 'password';
        icon.src = '/Lập trình Web Bách Hóa Xanh/HTML/Trang đăng nhập/Anh/hide.png';
      }
    });
  });

  // Xác nhận nhập lại mật khẩu đúng
  confirmPasswordInput.addEventListener('input', function() {
    const messageElement = document.getElementById('confirm-message');
    const imgElements = document.getElementsByTagName('img');

    if (confirmPasswordInput.value === passwordInputs[0].value) {
      messageElement.textContent = 'Mật khẩu nhập lại chính xác';
      messageElement.style.color = 'green';
      messageElement.style.marginTop = '30px';

      // Loop through img elements and reset any styles that might have been changed
      for (let i = 0; i < imgElements.length; i++) {
        imgElements[i].style.cssText = ''; // Reset all styles for img elements
      }
    } else {
      messageElement.textContent = 'Mật khẩu nhập lại không chính xác';
      messageElement.style.color = 'red';
      messageElement.style.marginTop = '30px';
    }
  });

  // Xử lý submit form đăng ký và lưu vào Local Storage
  registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn việc submit mặc định của form

    // Lấy giá trị từ các input
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Tạo một đối tượng user từ thông tin nhập vào
    const user = {
      fullname: fullname,
      email: email,
      password: password
    };

    // Lưu thông tin user vào Local Storage
    localStorage.setItem('user', JSON.stringify(user));

    // Hiển thị thông báo đăng ký thành công
    successMessage.style.display = 'block';

    // Reset form sau khi đăng ký thành công (tùy chọn)
    registerForm.reset();
  });
});
