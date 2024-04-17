let hamburger = document.getElementById('check')
let navbar = document.querySelector('.navbar-1')
ham=false
hamburger.addEventListener('click', ()=>{
  ham = !ham
  if(ham){
    navbar.style.display='block'
  } else{
    navbar.style.display='none'
  }
})
