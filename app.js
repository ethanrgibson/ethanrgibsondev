const classes = ['red', 'color', 'blue', 'black', 'goldenrod', 'green', 'pink']
let index = -1
function changeColor() {
  index++
  if (index == classes.length) index = 0
  let word = document.getElementById('magic')
  for (let i = 0; i < classes.length; i++) {
    const classColor = classes[i];
    if (index == i) {
      word.classList.add(classColor)
    }
    else {
      word.classList.remove(classColor)
    }
  }
}
setInterval(changeColor, 500)