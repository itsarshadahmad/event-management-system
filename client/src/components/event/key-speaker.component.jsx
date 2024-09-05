import { Box, Container, Typography } from "@mui/material";

export default function KeySpeaker({ name, bio, topic }) {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: {
                    xs: "80vw",
                    sm: "300px",
                    md: "300px",
                },
            }}
        >
            <Box
                component="img"
                src="/src/assets/event.svg"
                sx={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "100%",
                    my: 3,
                }}
            />

            <Box sx={{ display: "flex", m: 0.5 }}>
                <Typography sx={{ fontWeight: 700, mr: 1, fontSize: "1.2rem" }}>
                    Name:
                </Typography>
                <Typography sx={{ fontSize: "1.2rem" }}>{name}</Typography>
            </Box>

            <Box sx={{ display: "flex", m: 1 }}>
                <Typography sx={{ fontWeight: 700, mr: 1, fontSize: "1.2rem" }}>
                    Bio:
                </Typography>
                <Typography sx={{ fontSize: "1.2rem" }}>{bio}</Typography>
            </Box>

            <Box sx={{ display: "flex", m: 1 }}>
                <Typography sx={{ fontWeight: 700, mr: 1, fontSize: "1.2rem" }}>
                    Topic:
                </Typography>
                <Typography sx={{ fontSize: "1.2rem" }}>{topic}</Typography>
            </Box>
        </Container>
    );
}
