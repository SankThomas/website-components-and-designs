const menuGrid = document.querySelector(".menu-grid")
const actionButton = document.querySelector(".action")

actionButton.addEventListener("click", () => {
  menuGrid.classList.toggle("open")
})
