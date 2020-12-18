const initialState = [
  {
    id: 1,
    todo: 'Comprar comida',
    done: false
  }
]

const todoReducer = (state = initialState, action) => {
  if (action?.type=== 'agregar') {
      return [...state, action.payload]
  }
    return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'Seguir aprendiendo',
  done: false
}

const agregarTodoAccion = {
  type: 'agregar',
  payload: newTodo
}

todos = todoReducer(todos, agregarTodoAccion)
console.log(todos)
