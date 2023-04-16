import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, registerFetch } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
        builder
            // case for logout
            .addCase(logOut.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            // cases for refreshing
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            })
            // mather for register & login
            .addMatcher(
                isAnyOf(registerFetch.fulfilled, logIn.fulfilled),
                (state, action) => {
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.isLoggedIn = true;
                })
            .addMatcher(
                isAnyOf(registerFetch.rejected, logIn.rejected),
                (state, action) => {
                    state.error = action.payload;
                })
    
});

export const authReducer = authSlice.reducer;