import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from "universal-cookie";
import { SignIn } from '../../../Service/auth.service';


const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    users: null,
};

// initialize userToken from local storage
const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null



// Generates pending, fulfilled and rejected action types
export const loginUser = createAsyncThunk('login/loginUser', async ({ email, password }, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ email, password });
    try {
        const res = await SignIn(body, config);
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem("isAuthenticated", true)
        const cookies = new Cookies();
        cookies.set("token", res.data.token, { path: "/" });
        return res.data
    }
    catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }

})

// export const loadUser = () => async (dispatch) => {
//     if (localStorage.token) {
//       setAuthToken(localStorage.token);
//     }

//     try {
//       const res = await axios.get("/api/auth");

//       dispatch({
//         type: USER_LOADED,
//         payload: res.data,
//       });
//     } catch (err) {
//       dispatch({
//         type: AUTH_ERROR,
//       });
//     }
//   };

const loginSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => {
            state.loading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.isAuthenticated = true
            state.error = ''
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default loginSlice.reducer