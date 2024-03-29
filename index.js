function toggleNav() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

function closeNav() {
  var navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("show");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.onscroll = showScrollUpButton;

function showScrollUpButton() {
  var scrollUpBtn = document.getElementById("scrollUpBtn");
  scrollUpBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
}

function scrollToTop() {
  document.documentElement.scrollIntoView({ behavior: 'smooth' });
}


document.getElementById('currentRating').textContent = document.getElementById('customRange1').value;
document.getElementById('currentRating1').textContent = document.getElementById('customRange2').value;
document.getElementById('currentRating2').textContent = document.getElementById('customRange3').value;
document.getElementById('currentRating3').textContent = document.getElementById('customRange4').value;
document.getElementById('currentRating4').textContent = document.getElementById('customRange5').value;
document.getElementById('currentRating5').textContent = document.getElementById('customRange6').value;