document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('password');
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
});
