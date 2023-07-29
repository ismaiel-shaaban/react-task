import { createSlice  } from '@reduxjs/toolkit'



const cartSlice = createSlice({
    initialState: {
        items : [],
        isCartOpen:false
    } ,
    name:"cartSlice",
    reducers:{
        addToCart:(state , action)=>{
           state.items.find(item => item.id == action.payload.id) ? alert("product added to card alerdy") : state.items.push(action.payload)
        },
        removeFromCart:(state , action)=>{
            state.items = state.items.filter((item) => action.payload.id != item.id )
        },
        displayCart:(state , action)=>{
            state.isCartOpen = true
        },
        hideCart:(state , action)=>{
            state.isCartOpen = false
        },
        
    },
    // extraReducers:(builder)=>{
    //     console.log(builder)
    //     builder.addCase( fetchProduct.fulfilled ,(state , action) =>{
    //         console.log(action , state)
    //         return action.payload
    //     })
    // }
})

export const {addToCart ,removeFromCart,displayCart,hideCart} = cartSlice.actions

export default cartSlice.reducer