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

// Photo Slide
let indexSlide = 0;

function nextSlide(n) {
  showSlide(indexSlide += n);
}

function showSlide(n) {
  let listImage = document.getElementsByClassName('photo-banner');

  if (n > listImage.length - 1) {
    indexSlide = 0;
  }

  if (n < 0) {
    indexSlide = listImage.length - 1;
  }

  let index = 0;
  while (index < listImage.length) {
    (listImage[index]).style.display = 'none';
    index++;
  }

  listImage[indexSlide].style.display = 'block';
  console.log(listImage);
  console.log()
}

setInterval(() => nextSlide(1), 3000);