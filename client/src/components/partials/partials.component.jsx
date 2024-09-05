import { Box } from "@mui/material";
import Navbar from "./navbar.component";
import Copyright from "./copyright.component";

function Partials({ children, navButtonPage }) {
    return (
        <>
            <Box sx={{ minHeight: "95vh" }}>
                <Navbar navButtonPage={navButtonPage} />
                {children}
            </Box>
            <Copyright sx={{ my: 2 }} />
        </>
    );
}

export default Partials;
