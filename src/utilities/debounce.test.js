import debounce from './debounce'

jest.useFakeTimers() // tell jest to mock all timeouts

const mockFunction = jest.fn()
const debouncedFunction = debounce(mockFunction, 1000)

it('executes the passed function only once', () => {
  for (let i = 0; i < 100; i++) {
    debouncedFunction()
  }

  jest.runAllTimers() // runs all timers

  expect(mockFunction).toBeCalledTimes(1)
})
