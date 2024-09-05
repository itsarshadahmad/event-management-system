import {
    Box,
    Container,
    FormControl,
    Input,
    InputAdornment,
    Paper,
    Typography,
} from "@mui/material";
import EventCard from "../event/event-card.component";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
    return (
        <Container>
            {/* <Typography component="h1" variant="h3">
                Home
            </Typography> */}

            <FormControl variant="standard" sx={{ my: 2, display: "flex" }}>
                <Input
                    id="input-with-icon-adornment"
                    placeholder="Search Events"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
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
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
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
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </Box>
        </Container>
    );
}
