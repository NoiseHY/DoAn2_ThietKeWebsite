function toggleChildren(event) {
  const containers = document.querySelectorAll('.container');
  const currentContainer = event.currentTarget;
  const currentChildren = currentContainer.querySelectorAll('.child');

  // Kiểm tra trạng thái hiển thị của div cha hiện tại
  const isCurrentContainerDisplayed = currentContainer.dataset.displayed === 'true';

  // Nếu div cha hiện tại đang được hiển thị, đóng nó lại và kết thúc hàm
  if (isCurrentContainerDisplayed) {
    currentChildren.forEach(child => {
      child.style.display = 'none';
    });
    currentContainer.dataset.displayed = 'false';
    return;
  }

  // Ẩn tất cả các children của các div cha khác
  containers.forEach(container => {
    if (container !== currentContainer) {
      const children = container.querySelectorAll('.child');
      children.forEach(child => {
        child.style.display = 'none';
      });
      container.dataset.displayed = 'false';
    }
  });

  // Hiển thị hoặc ẩn children của div cha hiện tại
  currentChildren.forEach(child => {
    if (child.style.display === 'none' || child.style.display === '') {
      child.style.display = 'block';
    } else {
      child.style.display = 'none';
    }
  });

  // Đặt trạng thái hiển thị của div cha hiện tại là true
  currentContainer.dataset.displayed = 'true';
}
