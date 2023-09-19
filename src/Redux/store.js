import { configureStore } from '@reduxjs/toolkit';
import TaskSlice from '../Redux/Slice/Taskslice';
import userSlice from '../Redux/Slice/UserSlice';
import baseApi from '../Redux/Slice/Api';

 const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,  
    TaskSlice: TaskSlice,
    userSlice: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
 export default store;