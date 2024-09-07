import {
    Box,
    Container,
    FormControl,
    InputAdornment,
    OutlinedInput,
    Paper,
    Typography,
} from "@mui/material";
import EventCard from "../event/event-card.component";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import { events } from "../../data";

export default function Home() {
    const [search, setSearch] = useState("");

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

            <Paper
                sx={{
                    p: 2,
                    my: 2,
                }}
                elevation={3}
            >
                <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
                    Registered Events
                </Typography>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(auto-fit, minmax(200px, 1fr))",
                            sm: "repeat(auto-fit, minmax(250px, 1fr))",
                        },
                        gridGap: 20,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {events.map((val, i) => (
                        <EventCard
                            key={i}
                            title={val.title}
                            description={val.description.split("", 120)}
                            link={"#"}
                        />
                    ))}
                </Box>
            </Paper>
            <Typography component="h1" variant="h4" sx={{ mt: 4, mb: 1 }}>
                Events
            </Typography>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gridGap: 20,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {events.map((val, i) => (
                    <EventCard
                        key={i}
                        title={val.title}
                        description={val.description.split("", 120)}
                        link={"#"}
                    />
                ))}
            </Box>
        </Container>
    );
}
