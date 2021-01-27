const { shallow } = require('enzyme')
const {
  default: TodoAdd
} = require('../../../components/08-useReducer/TodoAdd')

describe('pruebas en <TodoAdd/>', () => {
  const handleAddTodo = jest.fn()
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />)
  test('debe mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('No debe llmar handleAddTodo ', () => {
    // wrapper.find('form').simulate('submit', { preventDefault () {} })

    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault () {} })
    expect(handleAddTodo).toHaveBeenCalledTimes(0)
  })

  test('debe llamar la funcion handleAddTodo', () => {
    const value = 'adios Mundo'
    let input = wrapper.find('input')
    input.simulate('change', {
      target: {
        name: 'description',
        value
      }
    })
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault () {} })
    expect(handleAddTodo).toHaveBeenCalledTimes(1)
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: value,
      done: false
    })
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
