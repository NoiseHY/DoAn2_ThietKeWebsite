document.addEventListener('DOMContentLoaded', function() {

  console.log("kết nối thành công !");
    
  const chartMonths = document.querySelectorAll(".chart-month");
  chartMonths.forEach(month => {
    const value = month.querySelector(".bar").getAttribute("data-value");
    const bar = month.querySelector(".bar");
    bar.style.height = value + "px";
  });
});
