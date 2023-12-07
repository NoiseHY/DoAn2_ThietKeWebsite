document.addEventListener("DOMContentLoaded", function() {
  const chartMonths = document.querySelectorAll(".chart-month");
  chartMonths.forEach(month => {
    const value = month.querySelector(".bar").getAttribute("data-value");
    const bar = month.querySelector(".bar");
    bar.style.height = value + "px";
  });
});
