  document.addEventListener('DOMContentLoaded', function () {
    // Lấy các phần tử hiển thị thời gian đếm ngược từ HTML
    const phầnTửNgày = document.querySelector("#days");
    const phầnTửGiờ = document.querySelector("#hours");
    const phầnTửPhút = document.querySelector("#minutes");
    const phầnTửGiây = document.querySelector("#seconds");

    // Đặt thời gian mục tiêu cho đồng hồ đếm ngược
    const thờiGianMụcTiêu = new Date("2023-12-27T00:00:00").getTime();

    // Cập nhật thời gian đếm ngược
    function cậpNhậtĐồngHồ() {
      const thờiGianHiệnTại = new Date().getTime();
      const khoảngCáchThờiGian = thờiGianMụcTiêu - thờiGianHiệnTại;

      if (khoảngCáchThờiGian > 0) {
        const sốNgàyCònLại = Math.floor(khoảngCáchThờiGian / (1000 * 60 * 60 * 24));
        const sốGiờCònLại = Math.floor((khoảngCáchThờiGian % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const sốPhútCònLại = Math.floor((khoảngCáchThờiGian % (1000 * 60 * 60)) / (1000 * 60));
        const sốGiâyCònLại = Math.floor((khoảngCáchThờiGian % (1000 * 60)) / 1000);

        // Cập nhật các phần tử hiển thị với thời gian còn lại
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

    // Cập nhật đồng hồ mỗi giây
    const cậpNhậtMỗiGiây = setInterval(cậpNhậtĐồngHồ, 1000);
    cậpNhậtĐồngHồ();
  });
