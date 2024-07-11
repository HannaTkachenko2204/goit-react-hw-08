// import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

const token = {
    setAuth(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    clearAuth() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const logIn = createAsyncThunk(
    'auth/login',
    async (userInfo, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/login', userInfo);
            token.setAuth(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.clearAuth();
        return;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

