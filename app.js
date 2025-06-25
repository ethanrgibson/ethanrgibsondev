function changeColor() {
  let word = document.getElementById('magic')
  word.classList.toggle('exciting')
}
setInterval(changeColor, 1000)