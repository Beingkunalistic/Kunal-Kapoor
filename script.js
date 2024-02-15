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
  var targetSection = document.getElementById('scroll-to-about');
  var offset = 660;
  targetSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  window.scrollBy(0, offset);
}

// function scrollProject() {
//   var targetSection = document.getElementById('projects');
//   console.log("working");
//   var offset = 1320;
//   targetSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
//   window.scrollBy(0, offset);
// }

//script for animating text.
document.addEventListener('DOMContentLoaded', function () {
  const words = ['Student', 'Web Developer', 'Musician', 'Freelancer', 'Tech Enthusiast.'];
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

//adding class to navbar when the screen has been scrolled for a bit.

const scrollLength = 96.80000305175781;
window.addEventListener('scroll', function () {
  if (window.scrollY >= scrollLength) {
    // console.log("working");
    document.querySelector('.navbar').classList.add("nav-active");
  }
  else if (window.scrollY < scrollLength) {
    document.querySelector('.navbar').classList.remove("nav-active");
  }
  // console.log(window.scrollY);
})

const project = document.querySelector('.project-section');
let options = {
  root: null, // this is viewport
  rootMargin: '0px', // the viewport margin is set to 0px
  threshold: 0.4 // when the specified section 50% visible only then will the content appear
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      project.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(project); // start observing the section

function redirectUser(url){
  window.open(url, '_blank');
}

