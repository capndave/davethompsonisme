function animateGroup(group) {
  let length = group.childNodes[0].getTotalLength();
  group.childNodes[0].setAttribute("stroke-dasharray", length)              // changes stroke-dasharray prop
  group.childNodes[0].setAttribute("stroke-dashoffset", length)                 // changes stroke-offset prop
  group.childNodes[0].classList.add("animated")                             // adds a class for the animation
}

function animate() {

  /* If no cookie, render svg and animate its groups */
  const svgs = document.getElementsByTagName("svg")
  const groups = svgs[0].querySelectorAll("g")  // get gs from current

  function triggerDelayedAnimation(time, maxIterations) {
    setTimeout(function () {                                                  // sets a timeout for delay
      animateGroup(groups[i])
      i += 1;
      if (i < maxIterations) {
        triggerDelayedAnimation(time, maxIterations);
      }
    }, time)
  }

  let i = 0;
  // Trigger 1st line animation
  triggerDelayedAnimation(100, 22);

  // 2nd line animation
  setTimeout(() => {
    console.log('Setting off second animation')
    i = 22;
    triggerDelayedAnimation(200, 28)
  }, 2500)
  
  // 3rd line animation
  setTimeout(() => {
    console.log('Setting off second animation')
    i = 23;
    triggerDelayedAnimation(200, 29)
  }, 3700)
}

function appear() {
  const svgs = document.getElementsByTagName("svg")
  console.log(svgs)
  svgs[0].classList.add("visible")
}

module.exports = {
  animate,
  animateGroup,
  appear
}


