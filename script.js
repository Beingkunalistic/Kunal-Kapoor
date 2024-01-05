// Script to add active class to the intro section so it fades up.
document.addEventListener("DOMContentLoaded", function () {
  // console.log("entered")
  const fadeUpElements = document.querySelectorAll('.intro-left');

  fadeUpElements.forEach(element => {
    element.classList.add('active');
  });
});

//function to scroll the page upon clicking the down arrow.
function scrollAbout() {
  var targetSection = document.getElementById('about');
  var offset = 600;
  targetSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  window.scrollBy(0, offset);
}


//script for animating text.
document.addEventListener('DOMContentLoaded', function () {
  const words = ['Student', 'Web Developer', 'Musician', 'Tech Enthusiast!'];
  let index = 0;
  let letterIndex = 0;
  let currentWord = '';

  function type() {
    if (letterIndex < words[index].length) {
      currentWord += words[index][letterIndex];
      document.getElementById('dynamic-text').innerText = currentWord;
      letterIndex++;
      setTimeout(type, 100); // Adjust the typing speed
    } else {
      setTimeout(erase, 1000); // Wait for a second before erasing
    }
  }

  function erase() {
    if (letterIndex > 0) {
      currentWord = currentWord.slice(0, -1);
      document.getElementById('dynamic-text').innerText = currentWord;
      letterIndex--;
      setTimeout(erase, 50); // Adjust the erasing speed
    } else {
      index = (index + 1) % words.length;
      setTimeout(type, 500); // Wait for half a second before typing the next word
    }
  }

  type(); // Start the typing animation
});
