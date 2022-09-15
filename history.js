const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken,typingSpeed, errorCount) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");
  newRow.innerHTML = `
  <h3 class="card-title">${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>Your typing speed: <span class="bold">${typingSpeed}</span> WPM</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, typingSpeed, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <p class="text">${test.questionText}</p>
  <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
  <p>Your typing speed: <span class="bold">${test.typingSpeed}</span> WPM</p>
  <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  });
}
//clear history
document.getElementById('clear-btn').addEventListener('click', function () {
  localStorage.clear()
  histories.innerHTML = "";
})
