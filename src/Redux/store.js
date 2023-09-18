import { configureStore } from '@reduxjs/toolkit'
import TaskSlice from '../Redux/Slice/Taskslice'
import userSlice from '../Redux/Slice/UserSlice';
export const store = configureStore({
  reducer: {
    TaskSlice:TaskSlice,
    userSlice:userSlice
  },
})