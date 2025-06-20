// scripts/modules/menu.js
import { loadTreats } from './treats.js';

const container = document.getElementById('treats-container');

loadTreats().then(data => {
  container.innerHTML = data.map(treat => `
    <div class="treat-card">
      <img src="${treat.image}" alt="${treat.name}">
      <h4>${treat.name}</h4>
      <p>${treat.flavor}</p>
      <p>${treat.price}</p>
      <button onclick="openModal('${treat.name}', '${treat.flavor}', '${treat.price}')">Details</button>
    </div>
  `).join('');
});

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
