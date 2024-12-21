const navIcon = document.getElementById('nav-icon');
const mainDiv = document.querySelector('.main-div');

navIcon.addEventListener('click', () => {
  mainDiv.classList.toggle('active'); // Toggle the "active" class
});
