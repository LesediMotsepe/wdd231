const courses = [
  { code: "CSE 110", title: "Introduction to Programming", credits: 2, description: "This course will introduce students to programming.", technology: "Python" },
  { code: "CSE 210", title: "Programming with Classes", credits: 2, description: "This course will introduce the notion of classes and objects.", technology: "C#" },
  { code: "WDD 130", title: "Web Fundamentals", credits: 2, description: "This course introduces students to the World Wide Web.", technology: "HTML, CSS" },
  { code: "WDD 131", title: "Dynamic Web Fundamentals", credits: 2, description: "Students will learn to create dynamic websites.", technology: "HTML, CSS, JavaScript" },
  { code: "CSE 111", title: "Programming with Functions", credits: 2, description: "CSE 111 students become more organized and efficient.", technology: "Python" }
];

function renderCourseButtons(filter) {
  const courseButtons = document.getElementById("courseButtons");
  const totalCredits = document.getElementById("totalCredits");
  const courseCard = document.getElementById("courseCard");
  courseButtons.innerHTML = "";
  courseCard.innerHTML = "";
  let creditsSum = 0;

  courses.forEach(course => {
    if (filter === "ALL" || course.code.startsWith(filter)) {
      creditsSum += course.credits;
      courseButtons.innerHTML += `
        <button onclick="showCourseDetails('${course.code}')">${course.code}</button>
      `;
    }
  });

  totalCredits.textContent = creditsSum;
}

function showCourseDetails(courseCode) {
  const course = courses.find(c => c.code === courseCode);
  const courseCard = document.getElementById("courseCard");
  courseCard.innerHTML = `
    <div class="card">
      <h3>${course.code}</h3>
      <p><strong>Title:</strong> ${course.title}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Description:</strong> ${course.description}</p>
      <p><strong>Technology:</strong> ${course.technology}</p>
    </div>
  `;
}

// Initialize with all courses
renderCourseButtons("ALL");

let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Lesedi Motsepe";
let place = "Johannesburg, South Africa";

// \u00A9 is the unicode for the copywrite symbol
// backticks allow us to insert variables into the output.
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;