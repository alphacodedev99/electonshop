import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: []
    },
    reducers: {
        saveAllProductsAction: (state, action) => {
            // console.log(action.payload);
            state.allProducts = action.payload;            
        }
    }
})

export const {saveAllProductsAction} = productSlice.actions;
export default productSlice.reducer;