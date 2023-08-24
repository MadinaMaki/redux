import {createSlice} from "@reduxjs/toolkit";
import {logDOM} from "@testing-library/react";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        filter: {
            minPrice: undefined,
            maxPrice: undefined
        },
        items: [
            {id: 1, category: 'Phones', name: 'Samsung Galaxy S8', price: 299000},
            {id: 2, category: 'CPU', name: 'AMD Ryzen 5600 X', price: 250000},
            {id: 3, category: 'CPU', name: 'Intel Core9', price: 189000},
        ]
    },

    reducers: {
        addProduct: (state, action) => {
            let maxId = state.items[0].id;
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id > maxId) {
                    maxId = state.items[i].id
                }
            }
            action.payload.id = maxId + 1;
            return {...state, items: [...state.items, action.payload]};
        },
        filterProduct: (state, action) => {
            return {...state, filter: {...action.payload}};
        },
        changeProduct: (state, action) => {
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === action.payload.id) {
                    state.items[i] = action.payload;
                }
            }
        },
        deleteProduct: (state, action) => {
            for (let i = 0; i < state.items.length; i++) {
                if(state.items[i].id === action.payload) {
                    state.items.splice(i, 1);
                }
            }
        }
    },
});

export const selectProducts = (state) => state.products.items;

export const selectFilteredProducts = (state) => {
    let filter = state.products.filter;
    if (filter.minPrice === undefined || filter.maxPrice === undefined) {
        return state.products.items;
    }
    // if(filter.minPrice.trim() === '' && filter.maxPrice.trim() === '') {
    //     return state.products.items;
    // }
    let result = [];
    for (let item of state.products.items) {
        if (filter.minPrice < item.price && filter.maxPrice > item.price) {
            result.push(item);
        }
        // else {
        //     return state.products.items;
        // }
    }
    return result;
}

export const {addProduct, filterProduct, changeProduct, deleteProduct} = productSlice.actions;

export default productSlice.reducer;
