// import React from 'react';

// function Signup() {
//     return ( 
//         <div>
//             <h1>Signup Page Working!</h1>
//         </div>
//      );
// }

// export default Signup;


import React, { useState } from "react";
import axios from "axios";

const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auth/login`,
                {
                    username,
                    email,
                    password
                },
                { withCredentials: true }
            );

            alert(response.data.message);

        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        }
    };

    return (
        <div>
            <h2>Create Account</h2>

            <form onSubmit={handleSignup}>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                  placeholder="Password"
                    value={password}
                    required
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button type="submit">
                    Sign Up
                </button>

            </form>
        </div>
    );
};

export default Signup;

