const { todoReducer } = require('../../../components/08-useReducer/todoReducer')
const { demoTodos } = require('../../fixtures/demoTodos')

describe('Pruebas en todoReducer', () => {
  test('debe retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {})
    expect(state).toEqual(demoTodos)
  })

  test('debe agregar un TODO', () => {
    const todo = {
      id: 3,
      description: 'Aprender Box',
      done: false
    }
    const action = {
      type: 'add',
      payload: todo
    }
    const state = todoReducer(demoTodos, action)
    // expect(state).toEqual(demoTodos)
    expect(state.length).toBe(3)
    expect(state).toEqual([...demoTodos, todo])
  })

  test('debe eliminar un todo', () => {
    const id = 1
    const action = {
      type: 'delete',
      payload: id
    }
    const state = todoReducer(demoTodos, action)
    console.log(state)
    expect(state.length).toBe(1)
    expect(state).toEqual(demoTodos.filter(demotodo => demotodo.id !== id))
  })

  test('debe hacer el toggle del todo (cambiar estado)', () => {
    const id = 1
    const action = {
      type: 'toggle',
      payload: id
    }

    const state = todoReducer(demoTodos, action)

    expect(state[0].done).toBe(true)
    expect(state[1]).toEqual(demoTodos[1])

  })
})
