const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})





ScrollReveal().reveal('.btn', {interval:500});
ScrollReveal().reveal('.cy .link', {interval:500});

ScrollReveal().reveal('.card-bodyy', {interval:5000});

ScrollReveal().reveal('.card', {delay:200,easing:"ease-out", interval:200, scale:1.0});


































const navbar = document.querySelector('.navbar');
let navbarTop = navbar.offsetTop;

function fixedNav() {
  if (window.scrollY >= navbarTop) {    
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');    
  }
}

window.addEventListener('scroll', fixedNav);






























