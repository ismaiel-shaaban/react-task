
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import  ApiService from "../../utils/services/ApiService"
export const fetchProduct = createAsyncThunk( "productSlice/fetchProduct" , async() => {
    return await ApiService.instance().getProduct()
} )
export const fetchProducts = createAsyncThunk( "productsSlice/fetchProducts" , async() => {
    return await ApiService.instance().getProducts()
} )

const productSlice = createSlice({
    initialState: {
        product : {},
        products : []
    } ,
    name:"productSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase( fetchProduct.fulfilled ,(state , action) =>{

            state.product =  action.payload
        })
        builder.addCase( fetchProducts.fulfilled ,(state , action) =>{
            state.products =  action.payload
        })
    
    }
})

export const {} = productSlice.actions

export default productSlice.reducer