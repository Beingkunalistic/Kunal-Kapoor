document.addEventListener("DOMContentLoaded", function () {
  // console.log("entered")
  const fadeUpElements = document.querySelectorAll('.intro-left');

  fadeUpElements.forEach(element => {
    element.classList.add('active');
  });
});
function scrollAbout() {
  document.getElementById('about').scrollIntoView({ behavior: "smooth" });
}