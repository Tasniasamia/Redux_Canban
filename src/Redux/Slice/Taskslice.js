import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Task:[]
}

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = TaskSlice.actions

export default TaskSlice.reducer