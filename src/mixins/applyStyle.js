function animateGroup (group) {
  const length = group.childNodes[0].getTotalLength() // Number of nodes in group
  group.childNodes[0].setAttribute('stroke-dasharray', length) // changes stroke-dasharray prop
  group.childNodes[0].setAttribute('stroke-dashoffset', length) // changes stroke-offset prop
  group.childNodes[0].classList.add('animated') // adds a class for the animation
}

function triggerAnimation (svgGroups, start, end, speed) {
  return new Promise((resolve, reject) => {
    let i = start
    const interval = setInterval(() => {
      animateGroup(svgGroups[i])
      i++
      if (i === end) {
        clearInterval(interval)
        resolve('finished')
      }
    }, speed)
  })
}

function animate () {
  return new Promise((resolve, reject) => {
    const svgGroups = document.getElementsByTagName('svg')[0].querySelectorAll('g')

    // Animate "Dave Thompson"
    triggerAnimation(svgGroups, 0, 22, 100) // 1st group

    // Animate "is me" after 2.5 seconds
    setTimeout(() => {
      triggerAnimation(svgGroups, 22, 28, 200)
    }, 2500)

    // Animate period after 4 seconds
    // Resolve this promise when triggerAnimation resolves
    setTimeout(() => {
      triggerAnimation(svgGroups, 28, 29, 200)
        .then(mssg => resolve(mssg))
        .catch(e => reject(e))
    }, 4000)
  })
}

function appear () {
  const svgs = document.getElementsByTagName('svg')
  console.log(svgs)
  // svgs[0].classList.add('visible')
}

module.exports = {
  animate,
  animateGroup,
  appear
}
