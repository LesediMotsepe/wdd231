import { loadTreats } from './modules/treats.js';

// Set footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = "Last modified: " + document.lastModified;

// Hamburger menu toggle
const menuBtn = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Load and display treats
const container = document.getElementById('treats-container');

loadTreats().then(data => {
  // Save full data in localStorage
  localStorage.setItem('treats', JSON.stringify(data));

  // Limit to 4 treats (Customer Favorites)
  const favorites = data.slice(0, 4); // Or filter by data.filter(t => t.favorite)

  // Display 4 favorite treats
  container.innerHTML = favorites.map(treat => `
    <div class="treat-card">
      <img src="${treat.image}" alt="${treat.name}" />
      <h4>${treat.name}</h4>
      <p>${treat.flavor} - ${treat.price}</p>
      <button onclick="openModal('${treat.name}', '${treat.flavor}', '${treat.price}')">Details</button>
    </div>
  `).join('');
});

// Modal open/close
window.openModal = (name, flavor, price) => {
  const modal = document.getElementById("modal");
  modal.querySelector(".modal-content").innerHTML = `
    <h2>${name}</h2>
    <p>Flavor: ${flavor}</p>
    <p>Price: ${price}</p>
    <button onclick="closeModal()">Close</button>
  `;
  modal.style.display = "flex";
};

window.closeModal = () => {
  document.getElementById("modal").style.display = "none";
};
