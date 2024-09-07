import axios from "axios";
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../environment/constant";

export default function DeleteEvent() {
    const { id } = useParams("id");
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    if (!token) {
        localStorage.removeItem("token");
        navigate("/signin");
    }

    useEffect(() => {
        axios
            .get(`${API_URL}/event/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                // setEvent(res.data);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return <Navigate to="/" />;
}
