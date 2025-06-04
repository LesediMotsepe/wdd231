// Improved JavaScript with OpenWeatherMap API

async function loadRealWeather() {
  const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
  const city = 'Johannesburg'; // Or any desired city
  const units = 'metric'; // Use 'imperial' for Fahrenheit

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
    );
    if (!response.ok) throw new Error('Weather fetch failed');

    const data = await response.json();
    const temp = Math.round(data.main.temp);
    const condition = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const html = `
      <p><strong>Now:</strong> ${temp}°C - ${condition}</p>
      <img src="${iconUrl}" alt="${condition}" loading="lazy" />
    `;
    document.getElementById('weather-info').innerHTML = html;
  } catch (err) {
    console.error('Error loading weather:', err);
    document.getElementById('weather-info').textContent = "Unable to load weather data.";
  }
}

// Footer Info
let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Lesedi Motsepe";
let place = "Johannesburg, South Africa";

document.getElementById("copywrite").innerHTML = `© ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;

// Load Spotlights
async function loadSpotlights() {
  const response = await fetch('members.json');
  const members = await response.json();
  const goldSilver = members.filter(m => ['Gold', 'Silver', 'Platinum'].includes(m.membership_level));
  const randomSpotlights = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

  const container = document.getElementById('spotlight-container');
  container.innerHTML = '';
  randomSpotlights.forEach(member => {
    const card = document.createElement('div');
    card.className = 'spotlight-card';
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" loading="lazy" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p><em>${member.membership_level} Member</em></p>
    `;
    container.appendChild(card);
  });
}

// Load Member Cards
async function loadMembers() {
  try {
    const response = await fetch('scripts/members.json');
    if (!response.ok) throw new Error("Failed to fetch members");
    const members = await response.json();
    const container = document.getElementById('members');
    container.innerHTML = '';

    members.forEach(member => {
      const card = document.createElement('div');
      card.className = 'member-card';
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" loading="lazy">
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
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadRealWeather();
  loadSpotlights();
  loadMembers();
});
