 function copyContract() {
    const contractText = document.getElementById("contractAddress").innerText;
    navigator.clipboard.writeText(contractText).then(() => {
      const message = document.getElementById("copyMessage");
      message.classList.remove("hidden");
      message.textContent = "Copied!";
      setTimeout(() => {
        message.classList.add("hidden");
      }, 1500);
    });
  }