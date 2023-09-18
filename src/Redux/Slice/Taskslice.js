import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  Task:[]
}

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    AddSlice:(state,action)=>{
        // state.Task.push(action.payload);
        if(state.Task.length === 0){
            state.Task.push({id:1,status:"pending", ...action.payload})
        }
       else{
        const lastindex=state.Task.at(-1);
        state.Task.push({id:lastindex.id+1,status:"pending",  ...action.payload})

       }
    },
   RemoveData:(state,{payload})=>{
state.Task=state.Task.filter(index=>index.id !== payload)
   },
   updateStatus:(state,{payload})=>{
    const findTask=state.Task.find(item=>item.id == payload.id);
    if(findTask){
        findTask.status=payload.status
    }
   }
   
  },
})

// Action creators are generated for each case reducer function
export const { AddSlice,RemoveData,updateStatus} = TaskSlice.actions

export default TaskSlice.reducer