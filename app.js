
// Extracurricular colors

const classes = ['red', 'blueish', 'goldenrod', 'black', 'blue', 'green', 'pink']
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
setInterval(changeColor, 750)



// Service Scroller

// const scrollers = document.querySelectorAll('.scroller')

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation()
// }

// function addAnimation() {
//   scrollers.forEach((scroller) => {
//     scroller.setAttribute('data-animated', 'true')

//     const scrollerInner = scroller.querySelector('.scroller-inner')
//     const scrollerContent = Array.from(scrollerInner.children)

//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true)
//       scrollerInner.appendChild(duplicatedItem)
//     })
//   });


// }