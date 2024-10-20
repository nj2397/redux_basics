import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        colorValue: { color: "honeydew" },
        value: {
            name: "Navjyot",
            username: "njez23",
            email: "anything@everything.com"
        }
    },
    
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state, action) => {
            state.value = {
                name: "Navjyot",
                username: "njez23",
                email: "anything@everything.com"
            }
        },
        changeColor: (state, action) => {
            state.colorValue = 
                action.payload.color === "default"
                ? { color: "honeydew" }
                : action.payload;
        }
    }
})

export const { login, logout, changeColor } = userSlice.actions;
export default userSlice.reducer;