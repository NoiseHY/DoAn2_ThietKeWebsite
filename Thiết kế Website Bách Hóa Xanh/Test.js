function toggleChildren() {
  var children = document.querySelectorAll('.child');
  children.forEach(child => {
    if (child.style.display === 'none') {
      child.style.display = 'block';
    } else {
      child.style.display = 'none';
    }
  });
}
