import { createSlice } from "@reduxjs/toolkit";
const initialState={
    username:"Tasnia Sharin",
    email:"sharintasnia1@gmail.com",
    myTask:[]
}
export const userSlice=createSlice({
    name:"UserSlice",
    initialState,
    reducers:{
collectTask:(state,{payload})=>{
    state.myTask=payload;
}
    

    }

})
export const {collectTask} =userSlice.actions;
export default userSlice.reducer