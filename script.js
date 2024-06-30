let menuIcon = document.querySelector('#menu-icon');
 let naviBar = document.querySelector('.navigationbar');
    
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        naviBar.classList.toggle('active');
   

let sections = document.querySelector("section");
let navbarLinks = document.querySelector('header nav a');

window.onscroll() = ()=>{
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if(top >= offset && top < offset + height){
            navbarLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
};
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('bx-x');
naviBar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img,.about-image, .project-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});


consttyped = new Typed('.multiple-text', {
    strings: ['Student','Mern Stack Developer','Coder',],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop:true
});



// script.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');
  
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      body.classList.add(currentTheme);
  
      // Update the icon based on the saved theme
      if (currentTheme === 'dark-mode') {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
      }
    }
  
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');
  
      // Update the icon
      if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'dark-mode');
      } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'light-mode');
      }
    });
  });
  