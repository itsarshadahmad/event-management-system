import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

export default function AdminCard({ title, description, id }) {
    return (
        <Card sx={{ maxWidth: "18rem" }}>
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
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                <Button
                    variant="outlined"
                    sx={{ m: 0.5, width: "100%" }}
                    href={`/event/${id}`}
                >
                    View
                </Button>
                <Button
                    variant="outlined"
                    color="success"
                    sx={{ m: 0.5, width: "100%" }}
                    href={`/add-announcement/${id}`}
                >
                    Add Announcement
                </Button>
                <Button
                    variant="outlined"
                    color="warning"
                    sx={{ m: 0.5, width: "100%" }}
                    href={`/add-speaker/${id}`}
                >
                    Add Speaker
                </Button>
                <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ m: 0.5, width: "100%" }}
                    href={`/update/${id}`}
                >
                    Edit
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    sx={{ m: 0.5, width: "100%" }}
                    href={`/delete/${id}`}
                >
                    Delete Event
                </Button>
            </CardActions>
        </Card>
    );
}
