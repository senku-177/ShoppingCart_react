import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            console.log(action.payload);
            const newState= state.filter((item) => item.id !== action.payload);
            console.log(newState);
            return newState;
        },
    }
});

export const {add,remove}= cartSlice.actions;
export default cartSlice.reducer;