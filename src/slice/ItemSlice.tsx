import {Item} from "../model/Item.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ItemSlice{
    items: Item[];
}
export const initialState: ItemSlice= {
    items: [],
}

const itemSlice = createSlice({
    name:'items',
    initialState,
    reducers:{
        setItem: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        },
        updateItem: (state, action: PayloadAction<Item>) => {
            const index = state.items.findIndex(
                (item)=>item.code === action.payload.code
            );
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.code !== action.payload
            );
        },
    },
});
export const {setItem,updateItem,deleteItem} = itemSlice.actions;
export default itemSlice.reducer;