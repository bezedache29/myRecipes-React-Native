import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./type"

const initialState = [
  { id: 1, title: 'Ma première tâche', isCompleted: false}
]

const tasksListOnStore = (state = initialState, action) => {

  let newTasks = []

  switch(action.type) {
    case ADD_TASK:
      return [...state, {
        id: Date.now(),
        title: action.payload.title,
        isCompleted: false
      }]

    case TOGGLE_TASK:
      state.forEach(task => {
        if (task.id !== action.payload.id) {
          newTasks.push(task)
          return
        }

        newTasks.push({
          ...task,
          isCompleted: !task.isCompleted
        })
      })
      return state = newTasks

      case DELETE_TASK:
        state.forEach(task => {
          if (task.id !== action.payload.id) {
            newTasks.push(task)
            return
          }
        })
      return state = newTasks

    default:
      return state
  }
}

export default tasksListOnStore