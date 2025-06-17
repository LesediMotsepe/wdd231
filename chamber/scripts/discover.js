// scripts/discover.js

document.addEventListener("DOMContentLoaded", () => {
  fetch("scripts/places.json")
    .then((res) => res.json())
    .then((data) => {
      const grid = document.getElementById("place-cards");

      data.places.forEach((place, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = `images/${index + 1}.webp`;
        img.alt = `${place.name}`;
        img.loading = "lazy";

        const title = document.createElement("h3");
        title.textContent = place.name;

        const address = document.createElement("p");
        address.textContent = place.address;

        const desc = document.createElement("p");
        desc.textContent = place.description;

        const link = document.createElement("a");
        link.href = "#";
        link.textContent = "Learn More";

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(desc);
        card.appendChild(link);

        grid.appendChild(card);
      });
    })
    .catch((err) => console.error("Failed to load places.json", err));
});
