const memberList = document.getElementById('member-list');
const gridViewButton = document.getElementById('grid-view-button');
const listViewButton = document.getElementById('list-view-button');

// Fetch members data from JSON file
async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching members data:', error);
        return []; // Return an empty array to prevent errors in subsequent code
    }
}

// Display members in the directory
async function displayMembers() {
    const members = await getMembers();
    if (members.length === 0) {
        memberList.innerHTML = '<p>No members found.</p>'; // Fallback if data is empty
        return;
    }

    memberList.innerHTML = ''; // Clear any existing content
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

// Toggle between Grid and List views
gridViewButton.addEventListener('click', () => {
    memberList.classList.add('grid-view');
    memberList.classList.remove('list-view');
});

listViewButton.addEventListener('click', () => {
    memberList.classList.add('list-view');
    memberList.classList.remove('grid-view');
});

// Initialize the display of members
displayMembers();
