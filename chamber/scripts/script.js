//document.getElementById('year').textContent = new Date().getFullYear();

/*/ Loading Weather from OpenWeatherMap API
async function loadWeather() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your API key
  const city = 'YourCity';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();

  const current = data.list[0];
  const weatherHTML = `
    <p><strong>Now:</strong> ${current.main.temp}°C - ${current.weather[0].description}</p>
    <ul>
      ${[1, 9, 17].map(i => {
        const day = new Date(data.list[i].dt_txt).toLocaleDateString('en-US', { weekday: 'short' });
        return `<li>${day}: ${data.list[i].main.temp.toFixed(1)}°C</li>`;
      }).join('')}
    </ul>
  `;
  document.getElementById('weather-info').innerHTML = weatherHTML;
}
loadWeather();

// Load Spotlights from members.json
async function loadSpotlights() {
  const response = await fetch('members.json');
  const members = await response.json();
  const goldSilver = members.filter(m => ['Gold', 'Silver'].includes(m.membership_level));
  const randomSpotlights = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

  const container = document.getElementById('spotlight-container');
  randomSpotlights.forEach(member => {
    const card = document.createElement('div');
    card.className = 'spotlight-card';
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p><em>${member.membership_level} Member</em></p>
    `;
    container.appendChild(card);
  });
}
loadSpotlights();*/
document.addEventListener('DOMContentLoaded', () => {
  fetch('scripts/members.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(members => {
      const container = document.getElementById('members');

      members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';

        card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}">
          <h2>${member.name}</h2>
          <p><strong>Membership:</strong> ${member.membership_level}</p>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
          <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p><strong>Joined:</strong> ${new Date(member.join_date).toLocaleDateString()}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading or parsing members.json:", error);
    });
});


let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Lesedi Motsepe";
let place = "Johannesburg, South Africa";

// \u00A9 is the unicode for the copywrite symbol
// backticks allow us to insert variables into the output.
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;
