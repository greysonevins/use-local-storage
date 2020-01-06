import { useLocalStorage } from './'
import { renderHook, act } from "@testing-library/react-hooks";


describe('useLocalStorage', () => {

  afterEach(() => {
    window.localStorage.removeItem('test')
  })
  const testKey = 'test'
  const initialValue = ''
  test('should return an array with the value and a setter function: localStorage and setLocalStorage', () => {
    const { result } = renderHook(() => useLocalStorage(testKey, initialValue))
    // expect(result.current).toHaveProperty('localStorage')
    const [localStorage, setLocalStorage] = result.current
    expect(localStorage).toBe(initialValue)
    expect(typeof setLocalStorage).toBe('function')
  })
  test('should update localStorage when using setLocalStorage', () => {
    const { result } = renderHook(() => useLocalStorage(testKey, initialValue))

    const nextValue = 'test1'

    act(() => {
      result.current[1](nextValue)
    })
    expect(JSON.parse(window.localStorage.getItem(testKey))).toEqual(nextValue)
    expect(result.current[0]).toEqual(nextValue)
  })
  test('should delete localstorage when null is passed to useLocalStorage', () => {
    const { result } = renderHook(() => useLocalStorage(testKey, initialValue))
    act(() => {
      result.current[1](null)
    })
    const outPutValue = JSON.parse(window.localStorage.getItem(testKey))
    const hasKey = window.localStorage.hasOwnProperty(testKey)
    expect(outPutValue).toBe(null)
    expect(hasKey).toBe(false)
  })
})
