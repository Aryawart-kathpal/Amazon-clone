navBtn=document.getElementById('nav-toggle');
showNav=document.getElementById('nav-second');
hideMargin=document.getElementById('small-nav');

navBtn.addEventListener('click',()=>{
    showNav.classList.toggle('show-nav-second');
    hideMargin.classList.toggle('hide-margin');
})

const date = (document.getElementById(
    "date"
  ).innerHTML = new Date().getFullYear());