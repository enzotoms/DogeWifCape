 // Wait until Lucide and the DOM are both ready
  window.addEventListener("load", () => {
    lucide.createIcons();
  });

  function copyContract() {
    const address = document.getElementById("contractAddress").innerText;
    navigator.clipboard.writeText(address);

    const msg = document.getElementById("copyMessage");
    const btn = document.getElementById("copyButton");

    // Show check icon after copy
    btn.innerHTML = '<i data-lucide="check" class="w-5 h-5 text-green-700"></i>';
    lucide.createIcons();

    msg.classList.remove("hidden");
    msg.textContent = "Copied!";

    setTimeout(() => {
      msg.classList.add("hidden");
      btn.innerHTML = '<i data-lucide="copy" class="w-5 h-5"></i>';
      lucide.createIcons();
    }, 2000);
  }
