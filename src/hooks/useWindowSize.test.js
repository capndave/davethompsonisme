import { act, renderHook } from '@testing-library/react-hooks'
import useWindowSize from '../hooks/useWindowSize'

beforeEach(() => {
  window.innerHeight = null
  window.innerWidth = null
})

it('provides default dimensions of zero if window not yet loaded', async () => {
  const { result } = renderHook(() => useWindowSize())
  expect(result.current.windowSize).toEqual({ innerHeight: 0, innerWidth: 0 })
})

it('provides initial screen dimensions if window is loaded', async () => {
  const innerHeight = 5; const innerWidth = 5
  window.innerHeight = innerHeight
  window.innerWidth = innerWidth
  const { result } = renderHook(() => useWindowSize())
  expect(result.current.windowSize).toEqual({ innerHeight, innerWidth })
})

/**
 * TODO - test that hook updates dimensions as window sizes
 * So far have been unable to trigger window change in useEffect
 */
it.skip('provides updated dimensions if window loads', async () => {
  const { result, mockDelay } = renderHook(() => useWindowSize())
  expect(result.current.windowSize).toEqual({ innerHeight: 0, innerWidth: 0 })

  const innerHeight = 100; const innerWidth = 100

  act(() => {
    window.resizeTo(innerHeight, innerWidth)
    // global.dispatchEvent(new Event('resize'))
  })
  jest.advanceTimersByTime(1000)

  console.log('updated')
  expect(result.current.windowSize).toEqual({ innerHeight, innerWidth })
})
