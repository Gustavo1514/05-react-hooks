const { shallow } = require('enzyme')
const { default: TodoList } = require('../../../components/08-useReducer/TodoList')

const { demoTodos } = require('../../fixtures/demoTodos')

describe('pruebas sobre <TodoList />', () => {
  const handleDelete = jest.fn()
  const handleToogle = jest.fn()
  const wrapper = shallow(
    <TodoList
      handleDelete={handleDelete}
      handleToogle={handleToogle}
      todos={demoTodos}
    />
  )
  test('debe mostrar correctamente el componente ', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe listar <TodolistItem />  correctamente (el numero de elementos de demoTodos)', () => {
    //   console.log(wrapper.find('TodoListItem').length) 
      expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length)

      expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any (Function))
  });
})
