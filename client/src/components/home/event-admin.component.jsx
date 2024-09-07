import {
    Box,
    Container,
    FormControl,
    InputAdornment,
    OutlinedInput,
    Typography,
} from "@mui/material";
import AdminCard from "./admin-card.component";
import { useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../environment/constant";

export default function EventAdmin() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/signin");
    }

    useEffect(() => {
        axios
            .get(`${API_URL}/event/user/all`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setEvents(res.data);
            });
    }, []);

    const title = "Web dev bootcamp";
    const description =
        "Ready to dive into the world of web development? Our intensive bootcamp is designed to equip you with the skills to build stunning websites and robust web applications. Whether you're a complete beginner or looking to enhance your existing coding knowledge, this bootcamp is for you. Learn from industry experts as you master HTML, CSS, JavaScript, and beyond. Immerse yourself in hands-on projects and gain practical experience. By the end of the bootcamp, you'll have a strong foundation to launch your career as a web developer. Limited spots available, so register now!";

    return (
        <Container>
            <FormControl variant="standard" sx={{ my: 2, display: "flex" }}>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                    <OutlinedInput
                        size="small"
                        id="search"
                        placeholder="Search…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ flexGrow: 1 }}
                        startAdornment={
                            <InputAdornment
                                position="start"
                                sx={{ color: "text.primary" }}
                            >
                                <SearchRoundedIcon fontSize="small" />
                            </InputAdornment>
                        }
                        inputProps={{
                            "aria-label": "search",
                        }}
                    />
                </FormControl>
            </FormControl>
            <Typography gutterBottom variant="h4" component="div">
                Your Events
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    alignItems: "center",
                    // justifyContent: "center",
                }}
            >
                {events.map((event, index) => (
                    <>
                        <AdminCard
                            key={index}
                            title={event.title}
                            description={event.description.split("", 150)}
                            id={event._id}
                        />
                    </>
                ))}
            </Box>
        </Container>
    );
}
