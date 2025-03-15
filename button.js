const buttons = document.querySelectorAll('.accordion-button')
const contents = document.querySelectorAll('.accordion-content')

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (contents[index].style.display === 'none') {
      contents[index].style.display = 'block'
    } else {
      contents[index].style.display = 'none'
    }
  })
})

const hamburger = document.querySelector('.hamburger')
const navLinks = document.getElementById('nav-links')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('show')
  navLinks.classList.toggle('show')
})
