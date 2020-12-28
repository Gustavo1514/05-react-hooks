const { renderHook, act } = require('@testing-library/react-hooks')
const { default: useCounter } = require('../../hooks/useCounter')

describe('Pruebas en UseCounter', () => {
  test('debe retornar los valores po defecto', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.counter).toBe(10)
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.reset).toBe('function')

    // console.log(result.current)
  })

  test('debe tener el counter en 100', () => {
    const { result } = renderHook(() => useCounter(100))
    expect(result.current.counter).toBe(100)
  })

  test('debe incermentar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100))

    const { increment } = result.current
    act(() => {
      increment()
    })
    const { counter } = result.current
    expect(counter).toBe(101)
  })

  test('debe decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100))

    const { decrement } = result.current
    act(() => {
      decrement()
    })
    const { counter } = result.current
    // console.log(counter)
    expect(counter).toBe(99)
  })

  test('debe resetear el counter al valor inicial', () => {
    const { result } = renderHook(() => useCounter(100))

    const { decrement, reset } = result.current
    act(() => {
      decrement()
      reset()
    })
    const { counter } = result.current
    // console.log(counter)
    expect(counter).toBe(100)
  })
})
