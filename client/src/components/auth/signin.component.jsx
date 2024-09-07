import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import ForgotPassword from "./forgot-password.component";
// import axios from "axios";
// import { API_URL } from "../../environment/constant";
import api from "../../services/api.service";

export default function SignIn() {
    const [forgotPasswordPage, setForgotPasswordPage] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const openForgotPasswordPopup = (event) => {
        event.preventDefault();
        setForgotPasswordPage(true);
    };

    const closeForgotPasswordPopup = (event) => {
        event.preventDefault();
        setForgotPasswordPage(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await api
            .post(`/users/login`, {
                email,
                password,
            })
            .then((res) => {
                setToken(res.data.Authorization);
                document.cookie = `Authorization=${res.data.Authorization}`;
                localStorage.setItem("Authorization", res.data.Authorization);
            })
            .catch((err) => console.error(err));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                    action="/signin"
                    method="POST"
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link
                                sx={{ cursor: "pointer" }}
                                variant="body2"
                                onClick={openForgotPasswordPopup}
                            >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href="signup"
                                variant="body2"
                                sx={{ cursor: "pointer" }}
                            >
                                {"Don't have an account?"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <ForgotPassword
                    open={forgotPasswordPage}
                    handleClose={closeForgotPasswordPopup}
                />
            </Box>
        </Container>
    );
}
