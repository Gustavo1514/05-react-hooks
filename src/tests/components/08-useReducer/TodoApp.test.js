const { act } = require('@testing-library/react')
const { shallow, mount } = require('enzyme')
const { default: TodoApp } = require('../../../components/08-useReducer/TodoApp')

const { demoTodos } = require('../../fixtures/demoTodos')
describe('pruebas en <TodoApp/>', () => {

  const wrapper = shallow(<TodoApp />)
  Storage.prototype.setItem= jest.fn(()=>{})
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe agregar un Todo', () => {
    const wrapper = mount(<TodoApp />)
    act(()=>{
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])

    })
    expect(wrapper.find('h1').text().trim()).toBe('Todo App (2)')
    expect(localStorage.setItem).toHaveBeenCalledTimes(2)
  })

  test('debe eliminar un todo', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id)
    expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)')

  });
})
