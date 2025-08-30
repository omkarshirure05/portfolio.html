// Smooth scrolling
const navLinks = document.querySelectorAll('.navlinks a');
navLinks.forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target=document.querySelector(link.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:"smooth"});
    }
    // close mobile menu after click
    document.querySelector('.navlinks').classList.remove('show');
  });
});

// Highlight active link while scrolling
window.addEventListener("scroll",()=>{
  let current="";
  document.querySelectorAll("section").forEach(sec=>{
    const top=sec.offsetTop-100;
    const height=sec.clientHeight;
    if(pageYOffset>=top && pageYOffset<top+height){
      current="#"+sec.getAttribute("id");
    }
  });
  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href")===current){
      link.classList.add("active");
    }
  });
});

// Mobile menu toggle
const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".navlinks");
hamburger.addEventListener("click",()=>{
  navMenu.classList.toggle("show");
});
