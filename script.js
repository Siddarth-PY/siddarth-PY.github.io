console.log("Portfolio loaded successfully");
<script>
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const status = document.getElementById("form-status");
  status.innerText = "Sending...";

  const formData = new FormData(this);

  try {
    const response = await fetch("http://127.0.0.1:8000/contact", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      status.style.color = "green";
      status.innerText = "✅ Message sent successfully!";
      this.reset();
    } else {
      status.style.color = "red";
      status.innerText = "❌ " + result.error;
    }
  } catch (err) {
    status.style.color = "red";
    status.innerText = "❌ Server not reachable";
    console.error(err);
  }
});
</script>
