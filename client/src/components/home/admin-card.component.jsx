import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

export default function AdminCard() {
    return (
        <Card sx={{ maxWidth: "20rem" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/src/assets/event.svg"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                >
                    Event Name
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                >
                    Description Description Description Description Description
                    Description Description Description Description Description
                    Description Description Description Description
                    Description...
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                <Button variant="outlined" sx={{ m: 0.5, width: "100%" }}>
                    View
                </Button>
                <Button
                    variant="outlined"
                    color="success"
                    sx={{ m: 0.5, width: "100%" }}
                >
                    Add Announcement
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ m: 0.5, width: "100%" }}
                >
                    Edit
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    sx={{ m: 0.5, width: "100%" }}
                >
                    Delete Event
                </Button>
            </CardActions>
        </Card>
    );
}