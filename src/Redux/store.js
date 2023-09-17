import { configureStore } from '@reduxjs/toolkit'
import TaskSlice from '../Redux/Slice/Taskslice'
export const store = configureStore({
  reducer: {
    TaskSlice:TaskSlice
  },
})