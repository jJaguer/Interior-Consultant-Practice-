const buttonMenu = document.querySelector('.icoMenuMovil'),
      menuMovil = document.querySelector('.navMenuMovil'),
      exitMenuMovil = document.querySelector('.exitMenuMovil');

buttonMenu.addEventListener('click',() =>{
    menuMovil.classList.add('active')
})

exitMenuMovil.addEventListener('click',()=>{
    menuMovil.classList.remove('active')
})