import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Announcements() {
    return (
        <Card sx={{ width: "100%", my: "16px" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Announcements title
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Announcements description
                </Typography>
                <Typography variant="body2">Date</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
