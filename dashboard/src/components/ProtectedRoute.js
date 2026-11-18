
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        axios.get(
            "https://mini-project-s81t.onrender.com/api/auth/me",
            { withCredentials: true }
        )
        .then(() => {
            setAuthenticated(true);
        })
        .catch(() => {
            setAuthenticated(false);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (!loading && !authenticated) {
            window.location.replace("https://mini-project-zeta-wheat.vercel.app");
        }
    }, [loading, authenticated]);

    if (loading || !authenticated) {
        return <h3>Checking authentication...</h3>;
    }

    return children;
};

export default ProtectedRoute;
