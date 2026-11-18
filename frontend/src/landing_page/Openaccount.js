
// import React from 'react';

// function Openaccount() {
//   return (
//     <div className="container p-5">
//       <div className="row text-center mb-5">
//         <h1 className="mt-5">Open a Zerodha account</h1>

//         <p>
//           Modern platforms and apps, ₹0 investments, and flat ₹20
//           intraday and F&O trades.
//         </p>

//         <button
//           className="p-3"
//           style={{
//             width: "auto",
//             lineHeight: "1",
//             margin: "0 auto",
//             backgroundColor: "skyblue"
//           }}
//         >
//           Sign up now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Openaccount;


import React,{useState} from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const navigate = useNavigate();

    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post(
    //                 `${process.env.REACT_APP_API_URL}/api/auth/login`,
    //             {
    //                 email,
    //                 password
    //             },
    //             { withCredentials: true }
    //         );

    //         alert(response.data.message);
    //          navigate("https://mini-project-p671h131x-zerodha-clone3.vercel.app");
    //          window.location.href = "https://mini-project-p671h131x-zerodha-clone3.vercel.app";
             
             

    //     } catch (error) {
    //         alert(
    //             error.response?.data?.message ||
    //             "Login failed"
    //         );
    //     }
    // };


const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/auth/login`,
            {
                email,
                password
            },
            { withCredentials: true }
        );

        alert(response.data.message);

        window.location.href = "https://mini-project-p671h131x-zerodha-clone3.vercel.app";

    } catch (error) {
        alert(
            error.response?.data?.message ||
            "Login failed"
        );
    }
};


    return (
        <div>
            <h2>Login to Zerodha Clone</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    );
};

export default Login;
