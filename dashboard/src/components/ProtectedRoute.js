
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        axios.get(
            "http://localhost:3001/api/auth/me",
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
            window.location.replace("http://localhost:3000");
        }
    }, [loading, authenticated]);

    if (loading || !authenticated) {
        return <h3>Checking authentication...</h3>;
    }

    return children;
};

export default ProtectedRoute;
