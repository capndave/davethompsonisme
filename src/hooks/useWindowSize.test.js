import { act, renderHook } from '@testing-library/react-hooks'
import useWindowSize from '../hooks/useWindowSize'

it('provides screen dimensions if window is loaded', async () => {
	const { result } = renderHook(() => useWindowSize())
	expect(result.current.windowSize).toBeTruthy()
})
