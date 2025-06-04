
const API_KEY = '10219efbd4a62c71add937c94fbe2b97';
const CITY = 'Johannesburg';
const UNITS = 'metric';

async function fetchWeather() {
  try {
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`
    );
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=${UNITS}`
    );

    if (!weatherRes.ok || !forecastRes.ok) throw new Error("Weather API request failed");

    const current = await weatherRes.json();
    const forecast = await forecastRes.json();

    const currentTemp = Math.round(current.main.temp);
    const condition = current.weather[0].description;

    const forecastHTML = forecast.list
      .filter(f => f.dt_txt.includes("12:00:00"))
      .slice(0, 3)
      .map(f => {
        const day = new Date(f.dt_txt).toLocaleDateString(undefined, { weekday: "short" });
        const temp = Math.round(f.main.temp);
        return `<li>${day}: ${temp}°C</li>`;
      }).join("");

    document.getElementById('weather-info').innerHTML = `
      <p><strong>Now:</strong> ${currentTemp}°C – ${capitalize(condition)}</p>
      <ul>${forecastHTML}</ul>
    `;
  } catch (err) {
    console.error("Weather error:", err);
    document.getElementById('weather-info').textContent = "Weather info unavailable.";
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//  Spotlights: Gold/Silver Random Selection 
async function loadSpotlights() {
  try {
    const res = await fetch('scripts/members.json');
    if (!res.ok) throw new Error("Failed to load member data");
    const members = await res.json();

    const goldSilver = members.filter(m =>
      ['Gold', 'Silver'].includes(m.membership_level)
    );

  
    const count = Math.floor(Math.random() * 2) + 2; // Random 2 or 3
    const selected = goldSilver
      .sort(() => Math.random() - 0.5)
      .slice(0, count);

    const container = document.getElementById('spotlight-container');
    container.innerHTML = "";

    selected.forEach(member => {
      const div = document.createElement('div');
      div.className = 'spotlight-card';
      div.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
        <p><em>${member.membership_level} Member</em></p>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error("Spotlight load error:", err);
    document.getElementById('spotlight-container').textContent = "Could not load spotlight members.";
  }
}


async function loadMembers() {
  try {
    const res = await fetch('scripts/members.json');
    if (!res.ok) throw new Error("Failed to fetch member list");

    const members = await res.json();
    const container = document.getElementById('members');
    container.innerHTML = ""; 

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
        <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a></p>
        <p><strong>Joined:</strong> ${new Date(member.join_date).toLocaleDateString()}</p>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Member load error:", err);
    document.getElementById('members').textContent = "Unable to load member directory.";
  }
}


function updateFooterInfo() {
  const year = new Date().getFullYear();
  const lastModified = document.lastModified;
  const author = "Lesedi Motsepe";
  const place = "Johannesburg, South Africa";

  document.getElementById("copywrite").innerHTML = `\u00A9 ${year} | ${author} | ${place}`;
  document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;
}


document.addEventListener('DOMContentLoaded', () => {
  fetchWeather();
  loadSpotlights();
  loadMembers();
  updateFooterInfo();
});
