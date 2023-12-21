document.addEventListener("DOMContentLoaded", () => {
  const chartComponents = document.querySelectorAll(".chart-component");
  const chartAmountSpans = document.querySelectorAll(".span-chart-amount");
  
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      data.forEach((entry, index) => {
          chartAmountSpans[index].textContent = `$${entry.amount}`;
          chartComponents[index].style.height = `${entry.amount}%`;
      });
  });
  
  chartComponents.forEach((chartComponent, index)=>{
    chartComponent.addEventListener("mouseenter", ()=>{
      chartAmountSpans[index].classList.add("active-chart");
      console.log("mouseenter");
    })
    chartComponent.addEventListener("mouseleave", ()=>{
      chartAmountSpans[index].classList.remove("active-chart");
      console.log("mouseleave");
    })
  })
});