import { createSlice } from "@reduxjs/toolkit";

const value:any = [];
export const CartSlice = createSlice({
  name: "cart",
  initialState:value,
  reducers: {
    add: (state, action) => {
        //@ts-ignore
        state.push(action.payload);
    },
    remove: (state, action) => {
        //@ts-ignore
        return state.filter((item)=>item.id!==action.payload)
    },
  },
});
export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;