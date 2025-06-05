document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const firstName = params.get("firstName");
  const lastName = params.get("lastName");
  const email = params.get("email");
  const phone = params.get("phone");
  const organization = params.get("organization");
  const timestamp = params.get("timestamp");

  document.getElementById("firstName").textContent = firstName || "N/A";
  document.getElementById("lastName").textContent = lastName || "N/A";
  document.getElementById("email").textContent = email || "N/A";
  document.getElementById("phone").textContent = phone || "N/A";
  document.getElementById("organization").textContent = organization || "N/A";
  document.getElementById("timestamp").textContent = timestamp || new Date().toLocaleDateString();
});
