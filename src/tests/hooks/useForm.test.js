const { renderHook, act } = require('@testing-library/react-hooks')
const { useForm } = require('../../hooks/useForm')

useForm

describe('Pruebas en use For ', () => {
  const initialForm = {
    name: 'Henry',
    email: 'hg@gmail.com'
    // password: '2e3dew'
  }

  test('debe regresar un formulario por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))

    const [values, handleInputChange, reset] = result.current
    console.log(values)
    expect(values).toEqual(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  })

  test('debe cambiar el valor del formulario (solo el name)', () => {
    const { result } = renderHook(() => useForm(initialForm))

    const [values, handleInputChange, reset] = result.current

    act(() => {
      const e = {
        target: {
          name: 'name',
          value: 'Mary'
        }
      }
      handleInputChange(e)
    })

    const [formValues] = result.current
    console.log(formValues)
    expect(formValues).toEqual({ ...initialForm, name: 'Mary' })
  })

  test('debe reseter correctamente el formulario', () => {
    const { result } = renderHook(() => useForm(initialForm))

    const [values, handleInputChange, reset] = result.current

    act(() => {
      const e = {
        target: {
          name: 'name',
          value: 'Mary'
        }
      }
      handleInputChange(e)
      reset()
    })

    const [formValues] = result.current
    console.log({formValues})
    expect(formValues).toEqual(initialForm)
  })
})
