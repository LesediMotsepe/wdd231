// scripts/lastVisit.js

document.addEventListener("DOMContentLoaded", () => {
  const visitMsg = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");

  const now = Date.now();

  if (lastVisit) {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (days === 0) {
      visitMsg.textContent = "Welcome back! You last visited today.";
    } else {
      visitMsg.textContent = `Welcome back! It's been ${days} day${days > 1 ? "s" : ""} since your last visit.`;
    }
  } else {
    visitMsg.textContent = "Welcome! This is your first visit.";
  }

  localStorage.setItem("lastVisit", now);
});
