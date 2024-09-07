import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function EventCard({ title, description, id }) {
    return (
        <Card sx={{ maxWidth: "20rem" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/src/assets/event.svg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined" href={`/event/${id}`}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
