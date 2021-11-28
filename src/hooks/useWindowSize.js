import { useState, useEffect } from 'react'
import debounce from '../utilities/debounce'

function useWindowSize () {
  // See default state of dimensions
  const [windowSize, setWindowSize] = useState({
    innerHeight: 0,
    innerWidth: 0
  })

  // Use hook to run the following code after page is loaded
  useEffect(() => {
    if (window) {
      setWindowSize({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      })
    }
    /*
			Debounce function for performance to check window resizing every 1000ms instead of of every ms.
			Upon resize, set new dimension to state.
			Update 1000 value as needed. Note: 1000 = 1 second
		*/
    const debouncedHandleResize = debounce(function handleResize () {
      setWindowSize({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      })
    }, 500)

    // Listen for window resize and run the debounce resize function above.
    window.addEventListener('resize', debouncedHandleResize)

    // Remove the event listener if resizing stopped.
    return () => window.removeEventListener('resize', debouncedHandleResize)
  }, [])

  return { windowSize }
}

export default useWindowSize
