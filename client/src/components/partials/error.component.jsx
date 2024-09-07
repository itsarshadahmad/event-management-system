import { Button, Container, Typography } from "@mui/material";

export default function Error() {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80vh",
                flexDirection: "column",
            }}
        >
            <img
                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                alt="404"
                width={500}
                height={250}
            />
            <Typography variant="h6">
                The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" href="/" sx={{ my: 1 }}>
                Back Home
            </Button>
        </Container>
    );
}
