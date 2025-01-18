const courses = [
    { id: 1, name: 'CSE 110', completed: true },
    { id: 2, name: 'CSE 220', completed: false },
    { id: 3, name: 'WDD 130', completed: true },
    { id: 3, name: 'WDD 131', completed: true },
    { id: 3, name: 'CSE 111', completed: true },
    { id: 3, name: 'WDD 231', completed: false }
  ];

const courselist = document.getElementById('course-list');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

function toggleNav() {
  navMenu.classList.toggle('show');
  navToggle.classList.toggle('active');const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized and efficient.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on user experience and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false 
    }
];


function filterCourses(filter) {
    const courseContainer = document.getElementById('courseContainer');
    const totalCreditsDiv = document.getElementById('totalCredits');
    courseContainer.innerHTML = ''; 
    totalCreditsDiv.textContent = ''; 
    
    const filteredCourses = courses.filter(course => 
        (filter === 'All' || course.subject === filter) && course.completed === true
    );

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h2>${course.subject} ${course.number}</h2>
            <p><strong>Title:</strong> ${course.title}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
        `;
        courseContainer.appendChild(courseCard);
    });

   
    totalCreditsDiv.textContent = `Total Credits: ${totalCredits}`;
}


filterCourses('All');
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }



  
let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Lesedi Motsepe";
let place = "Johannesburg, South Africa";

// \u00A9 is the unicode for the copywrite symbol
// backticks allow us to insert variables into the output.
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;
}

courses.forEach((course) => {
  const courseElement = document.createElement('div');
  courseElement.textContent = course.name;
  if (course.completed) {
    courseElement.classList.add('completed');
  }
  courselist.appendChild(courseElement);
});

const filterButtons = document.getElementById('filter-buttons');
const courseList = document.getElementById('course-list');

filterButtons.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const filterValue = e.target.textContent;
    const filteredCourses = courses.filter((course) => {
      if (filterValue === 'All') {
        return true;
      } else if (filterValue === 'Completed') {
        return course.completed;
      } else if (filterValue === 'Incomplete') {
        return !course.completed;
      }
    });
    courseList.innerHTML = '';
    filteredCourses.forEach((course) => {
      const courseElement = document.createElement('div');
      courseElement.textContent = course.name;
      if (course.completed) {
        courseElement.classList.add('completed');
      }
      courseList.appendChild(courseElement);
    });
  }
});
const totalCreditsElement = document.getElementById('total-credits');
const coursed = [
  { id: 1, name: 'Course 1', credits: 3, completed: true },
  { id: 2, name: 'Course 2', credits: 4, completed: false },
  { id: 3, name: 'Course 3', credits: 5, completed: true },
];

const totalCredits = coursed.reduce((acc, course) => acc + course.credits, 0);
totalCreditsElement.textContent = `Total credits: ${totalCredits}`;
