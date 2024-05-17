import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllDataAPI, loginUserAPI } from "./HomeAPI";


const initialState = {
    loading: false,
    data: {}
}
// const initialState = {
//     email: '',
//     password: ''
// }
export const getAllData = createAsyncThunk("product/getAllData" , async () => {
    const response = await getAllDataAPI()
    if(response && response.status == 200){
        return response.data
    }
})
export const loginUser = createAsyncThunk("product/loginUser", async (value) => {
    const response = await loginUserAPI(value)
    if(response && response.status == 200) {
        // localstorage.setItem("token", response.data.token)
        console.log(response.data.token);
    }
})
// const HomeSlice = createSlice({
//     name: "login",
//     initialState,
//     reducers: {},
//     extraReducers: (buileder) => {
//         buileder.addCase(loginUser.pending, (state) => {
//             state.email = ''
//             state.password = ''
//         }).addCase(loginUser.fulfilled, (state, action) => {
//             state.email = action.payload
//             state.password = action.payload
//             // state.loading = false
//         })
//     }
// })

const HomeSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (buileder) => {
        buileder.addCase(getAllData.pending, (state) => {
            state.loading = true
        }).addCase(getAllData.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
    }
})

export default HomeSlice.reducer;
