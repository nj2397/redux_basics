import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { login, logout, changeColor } from "../redux/user";

const Login = () => {
    const userDetails = useSelector((state) => state.user.value);
    const userColorDetails = useSelector((state) => state.user.colorValue);

    const [colorInput, setColorInput] = useState("");
    const dispatch = useDispatch();

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: userColorDetails.color
            }}
        >
            <div>
                <p>User Details...</p>
                <p>Name: {userDetails.name}</p>
                <p>Username: {userDetails.username}</p>
                <p>Email: {userDetails.email}</p>
                <button
                    onClick={() => {
                        dispatch(
                            login({
                                name: "Nibjyoti",
                                username: "nj23",
                                email: "everything@anything.com"
                            })
                        )
                    }}
                >
                    Switch Users
                </button>
                <button onClick={() => dispatch(logout())}>Logout</button>
                <div>
                    <input 
                        type="text"
                        placeholder="Change Background Color"
                        onInputCapture={(e) => setColorInput(e.target.value)}
                    />
                    <button onClick={() => dispatch(changeColor({ color: colorInput }))}>
                        Set
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Login;
