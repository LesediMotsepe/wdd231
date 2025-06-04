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
