import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../Redux/Features/login/loginSlice';

const store = configureStore({
    reducer: {
        login: loginReducer
    }
})

export default store
