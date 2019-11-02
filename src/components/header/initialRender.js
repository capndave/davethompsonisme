function animateGroup(group) {
  let length = group.childNodes[0].getTotalLength();
  group.childNodes[0].setAttribute("stroke-dasharray", length)              // changes stroke-dasharray prop
  group.childNodes[0].setAttribute("stroke-dashoffset", length)                 // changes stroke-offset prop
  group.childNodes[0].classList.add("animated")                             // adds a class for the animation
}

function initialRender(groups) {

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
  triggerDelayedAnimation(100, 22); // part 1

  setTimeout(function () { // 2nd line animation
    i = 22;
    triggerDelayedAnimation(200, 28)
  }, // part 2
    2500)
}

module.exports = initialRender


