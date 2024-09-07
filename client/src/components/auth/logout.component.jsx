import { Navigate, useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    if (token) {
        localStorage.removeItem("token");
        navigate("/signin");
    }

    return <Navigate to="/" />;
}
