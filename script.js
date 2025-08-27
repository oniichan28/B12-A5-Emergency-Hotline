let coinCount = 100;
const coinDisplay = document.getElementById("coinCount");

const callButtons = document.querySelectorAll(".call-btn");
callButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("✅ Call button clicked!");
  });
});