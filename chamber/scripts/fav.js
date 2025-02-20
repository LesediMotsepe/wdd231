let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Lesedi Motsepe";
let place = "Johannesburg, South Africa";

// \u00A9 is the unicode for the copywrite symbol
// backticks allow us to insert variables into the output.
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;

const memberList = document.getElementById('member-list');
const gridViewButton = document.getElementById('grid-view-button');
const listViewButton = document.getElementById('list-view-button');

async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching members data:', error);
        return []; 
    }
}


async function displayMembers() {
    const members = await getMembers();
    if (members.length === 0) {
        memberList.innerHTML = '<p>No members found.</p>'; 
        return;
    }

    memberList.innerHTML = ''; 
    members.forEach((member) => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank" rel="noopener">${member.website}</a></p>
        `;
        memberList.appendChild(memberCard);
    });
}


gridViewButton.addEventListener('click', () => {
    memberList.classList.add('grid-view');
    memberList.classList.remove('list-view');
});

listViewButton.addEventListener('click', () => {
    memberList.classList.add('list-view');
    memberList.classList.remove('grid-view');
});


displayMembers();

const spotlightCards = document.getElementById('spotlight-cards');


fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
       
        const goldAndSilverMembers = data.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);

     
        const selectedMembers = goldAndSilverMembers.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 2) + 2);

        selectedMembers.forEach(member => {
            const spotlightCard = document.createElement('div');
            spotlightCard.classList.add('spotlight-card');
            spotlightCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel === 2 ? 'Silver' : 'Gold'}</p>
            `;
            spotlightCards.appendChild(spotlightCard);
        });
    })
    .catch(error => console.error('Error loading member data:', error));
    
const membershipCards = document.querySelector('.membership-cards');
membershipCards.classList.add('animate');


const links = document.querySelectorAll('.card a');
links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const modalId = link.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.parentNode.parentNode;
        modal.style.display = 'none';
    });
});

const cardGrid = document.querySelector('.card-grid');
const items = fetch('data/items.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="images/${item.image}" alt="${item.name}">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      cardGrid.appendChild(card);
    });
  });
  const visitDate = localStorage.getItem('visitDate');
const currentDate = new Date();

if (!visitDate) {
  localStorage.setItem('visitDate', currentDate.getTime());
  document.querySelector('.sidebar').innerHTML = 'Welcome! Let us know if you have any questions.';
} else {
  const timeDiff = currentDate.getTime() - visitDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff < 1) {
    document.querySelector('.sidebar').innerHTML = 'Back so soon! Awesome!';
  } else {
    document.querySelector('.sidebar').innerHTML = `You last visited ${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago.`;
  }
}


