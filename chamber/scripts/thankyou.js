
document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("formData"));

  if (data) {
    document.getElementById("fName").textContent = data.firstName;
    document.getElementById("lName").textContent = data.lastName;
    document.getElementById("email").textContent = data.email;
    document.getElementById("phone").textContent = data.phone;
    document.getElementById("business").textContent = data.business;
    document.getElementById("date").textContent = data.date;
  }
});
