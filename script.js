let current = 0;
let sections = document.getElementsByClassName("cvm-section");
let stepNumber = document.getElementById("stepNumber");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

window.addEventListener('load', () => {
   setTimeout(() => {
      document.getElementById('loadingScreen').classList.add('hidden');
   }, 200);
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('toggle-switch');
  const body = document.body;

  if (toggleSwitch) {
    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('dark');
    });
  }
});

/* -- Navigation Function -- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* -- Add shadow to the navigation bar when scrolling -- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (!navHeader) return;

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.8)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* -- Typing revealing effect -- */
var typingEffect = new Typed(".typedText",{
  strings : ["Web Designer","YouTuber","Developer","Coder","AI Expert","Marketer"],
  loop : true,
  typeSpeed : 100,
  backSpeed : 80,
  backDelay : 2000
})

/* -- Scroll reveal animation -- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- Project Box -- */
sr.reveal('.project-box',{interval: 200})

/* -- Headings -- */
sr.reveal('.top-header',{})

/* -- Scroll reveal left-right animation -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- Change active link ----- */
const pageSections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  pageSections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

    const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if(link){
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
          link.classList.add('active-link')
      } else {
          link.classList.remove('active-link')
      }
    }
  })
}

window.addEventListener('scroll', scrollActive)

/* -- notification case -- */
document.addEventListener('DOMContentLoaded', () => {
    const notification = document.getElementById('portfolioNotification');

    if(!notification) return;

    function showNotification() {
        setTimeout(() => {
            notification.classList.add('show');
        }, 1500);
    }

    window.dismissNotification = function() {
        notification.classList.remove('show');
        notification.addEventListener('transitionend', () => {
            if (!notification.classList.contains('show')) {
                notification.style.display = 'none';
            }
        }, { once: true });
    };

    showNotification();
});

let current = 0;
let sections = document.getElementsByClassName("cvm-section");
let stepNumber = document.getElementById("stepNumber");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

function openCV() {
    const modal = document.getElementById("cvModal");
    if(modal) {
        modal.style.display = "flex";
        showStep(current);
    }
}

function closeCV() {
    const modal = document.getElementById("cvModal");
    if(modal) {
        modal.style.display = "none";
    }
}

function showStep(index) {
    for(let i = 0; i < sections.length; i++){
        sections[i].classList.remove("cvm-section-active");
    }

    sections[index].classList.add("cvm-section-active");
    stepNumber.textContent = index + 1;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === sections.length - 1;
}

function nextStep() {
    if(current < sections.length - 1){
        current++;
        showStep(current);
    }
}

function prevStep() {
    if(current > 0){
        current--;
        showStep(current);
    }
}
