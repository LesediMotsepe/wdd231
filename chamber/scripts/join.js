document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joinForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      business: document.getElementById("business").value,
      date: new Date().toLocaleDateString()
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "thankyou.html";
  });
});

// Setting timestamp
    document.getElementById("timestamp").value = new Date().toISOString();

    // Modal
    document.querySelectorAll('[data-modal]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const modalId = e.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "block";
      });
    });

    document.querySelectorAll('.close').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = "none";
      });
    });

    window.addEventListener('click', e => {
      if (e.target.classList.contains('modal')) {
        e.target.style.display = "none";
      }
    });

