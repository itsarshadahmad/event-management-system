import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        // primary: {
        //     main: "#393E46",
        //     contrastText: "#FFF",
        // },
        // secondary: {
        //     main: "#00ADB5",
        // },
        error: {
            main: "#FF4444",
        },
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
    breakpoints: {
        values: {
            xs: 300,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiOutlinedInput: {
            style: {
                borderRadius: 8,
            },
        },
        MuiButton: {
            style: {
                borderRadius: 8,
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
