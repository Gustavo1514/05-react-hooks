const { shallow } = require('enzyme')
const {
  default: TodoListItem
} = require('../../../components/08-useReducer/TodoListItem')
const { demoTodos } = require('../../fixtures/demoTodos')

describe(' Pruebas en <TodoListItem />', () => {
  const handleDelete = jest.fn()
  const handleToogle = jest.fn()
  //   const handleDelete = () => {}
  //   const handleToogle = () => {}
  const index = 0
  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      handleToogle={handleToogle}
      handleDelete={handleDelete}
      i={index}
    />
  )
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe llamar la funcion handleDelete', () => {
    wrapper.find('button').simulate('click')
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
  })
  test('debe llamar la funcion handleToggle', () => {
    wrapper.find('p').simulate('click')
    expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id)
  })

  test('debe mostrar el texto correctamente', () => {
    console.log(wrapper.find('p').text())
    const p = wrapper.find('p')

    expect(p.text()).toBe(`1. ${demoTodos[0].description}`)
  })

  test('debe tener la clase complete si el TODO.done es true', () => {
    demoTodos[0].done = true
    const wrapper = shallow(
      <TodoListItem
        todo={demoTodos[0]}
        handleToogle={handleToogle}
        handleDelete={handleDelete}
        i={index}
      />
    )
    console.log(wrapper.find('p').hasClass('complete'))
    expect(wrapper.find('p').hasClass('complete')).toBe(true)
  })
})
