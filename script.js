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
      const icon = this.querySelector("i");
      if (!icon.classList.contains("fa-solid")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid", "text-red-500");
      }
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

      
      const time = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      alert(`Calling ${serviceName} at ${serviceNumber} (${time})`);

      // Create History Card Item
      const li = document.createElement("li");
      li.className = "bg-white shadow p-2 rounded flex justify-between items-center";

      li.innerHTML = `
  <div>
    <h4 class="font-bold text-sm">${serviceName}</h4>
    <p class="text-xs ">${serviceNumber}</p>
  </div>
  <span class="text-[10px] font-bold">${time}</span>
`;


     
      historyList.prepend(li);
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
          copyCountEl.textContent = `${copies} Copy`;
        })
        .catch(err => console.error("Failed to copy:", err));
    });
  });

  // Clear History
  clearHistoryBtn.addEventListener("click", function () {
    historyList.innerHTML = "";
  });
});
