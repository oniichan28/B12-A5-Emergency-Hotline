document.addEventListener("DOMContentLoaded", function () {
  const coinCountEl = document.getElementById("coinCount");
  const historyList = document.getElementById("historyList");
  const callButtons = document.querySelectorAll(".call-btn");
  const copyButtons = document.querySelectorAll(".copy-btn");
  const heartButtons = document.querySelectorAll(".heart-btn");
  const heartCountEl = document.getElementById("heartCount");
  const copyCountEl = document.getElementById("copyCount");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");

  let coins = parseInt(coinCountEl.textContent);
  let hearts = parseInt(heartCountEl.textContent);
  let copies = parseInt(copyCountEl.textContent);
  copyCountEl.textContent = `${copies} Copy`;


  // Heart Buttons
  heartButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      hearts++;
      heartCountEl.textContent = hearts;
    });
  });

  // Call Buttons
  callButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const card = btn.closest(".card");
      const serviceName = card.querySelector(".service-name").textContent;
      const serviceNumber = card.querySelector(".service-number").textContent;

      if (coins < 20) {
        alert("Sorry! You don't have enough coins.");
        return;
      }

      coins -= 20;
      coinCountEl.textContent = coins;

      const time = new Date().toLocaleTimeString();
      alert(`Calling ${serviceName} at ${serviceNumber} (${time})`);

      const li = document.createElement("li");
      li.textContent = `${serviceName} - ${serviceNumber} (${time})`;
      historyList.appendChild(li);
    });
  });

  // Copy Buttons
  copyButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const card = btn.closest(".card");
      const serviceNumber = card.querySelector(".service-number").textContent;

      navigator.clipboard.writeText(serviceNumber)
        .then(() => {
          alert(`Copied ${serviceNumber} to clipboard`);
          copies++;
          copyCountEl.textContent = copies;
        })
        .catch(err => console.error("Failed to copy:", err));
    });
  });

  // Clear History
  clearHistoryBtn.addEventListener("click", function () {
    historyList.innerHTML = "";
  });
});
