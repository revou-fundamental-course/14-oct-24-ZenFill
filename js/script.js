// Ini JavaScript

// Function to display the current time
function displayCurrentTime() {
  const currentTimeElement = document.getElementById('currentTime');
  const now = new Date();
  currentTimeElement.textContent = now.toUTCString();
}

// Display the current time on page load
window.onload = function () {
  displayCurrentTime();
};

// Input Form
document.getElementById('messageForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('message').value;

  // Output Form
  document.getElementById('outputName').innerHTML = name;
  document.getElementById('outputDob').textContent = dob;
  document.getElementById('outputGender').textContent = gender;
  document.getElementById('outputMessage').textContent = message;

  // Update the current time
  displayCurrentTime();
});
