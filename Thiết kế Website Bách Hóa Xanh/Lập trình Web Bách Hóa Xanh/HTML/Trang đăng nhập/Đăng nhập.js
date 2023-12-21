document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('password');
  const usernameInput = document.getElementById('username');
  const loginForm = document.getElementById('loginForm');
  const imgIcon = document.querySelector('.form-group img');
  console.log("Kết nối thành công");

  imgIcon.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      imgIcon.src = 'Anh/show.png';
    } else {
      passwordInput.type = 'password';
      imgIcon.src = 'Anh/hide.png';
    }
  });

  // Tạo sự kiện submit form
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn việc submit mặc định của form

    // Lấy giá trị của username và password từ input
    const savedUserString = localStorage.getItem('user');
    if (savedUserString) {
      const savedUser = JSON.parse(savedUserString);

      const enteredUsername = usernameInput.value;
      const enteredPassword = passwordInput.value;

      // So sánh thông tin đăng nhập với thông tin trong Local Storage
      if (
        enteredUsername === savedUser.fullname &&
        enteredPassword === savedUser.password
      ) {
        alert('Chào mừng đến với Bách Hóa Xanh !');
        window.location.href = '/Lập trình Web Bách Hóa Xanh/HTML/Trang chủ/TrangChu.html';
      } else {
        // Thông báo lỗi khi thông tin đăng nhập không chính xác
        alert('Thông tin đăng nhập không chính xác!');
      }
    }
  });

  // Kiểm tra nếu đã đăng ký, điền thông tin từ Local Storage vào input
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    usernameInput.value = savedUsername;
    passwordInput.value = savedPassword;
  }
});
