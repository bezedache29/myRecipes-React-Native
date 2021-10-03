import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "./type"

export const addTaskOnStore = (title) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
    }
  }
}

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: {
      id,
    }
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id
    }
  }
}