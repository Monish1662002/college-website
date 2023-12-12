const togglebtn = document.querySelector('.toggle-btn')
const togglebtnIcon = document.querySelector('.toggle-btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')

togglebtn.onclick = function () {
  dropdownMenu.classList.toggle('open')
  const isOpen = dropdownMenu.classList.contains('open')

  togglebtnIcon.classList = isOpen
  ?'bx bx-x'
  :'bx bx-menu'
}
