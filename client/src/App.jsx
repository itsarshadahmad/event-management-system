import Event from "./components/event/event.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/auth/signin.component";
import Signup from "./components/auth/signup.component";
import SetEvent from "./components/event/set-event.component";
import NewPassword from "./components/auth/new-password.components";
import Partials from "./components/partials/partials.component";
import Home from "./components/home/home.component";
import EventAdmin from "./components/home/event-admin.component";
import AddAnnouncement from "./components/home/add-announcement.component";
import AddKeySpeaker from "./components/event/add-key-speaker.component";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Partials>
                <AddKeySpeaker />
            </Partials>
        ),
    },
    {
        path: "/admin",
        element: (
            <Partials>
                <EventAdmin />
            </Partials>
        ),
    },
    {
        path: "/announcement",
        element: (
            <Partials>
                <AddAnnouncement />
            </Partials>
        ),
    },
    {
        path: "/home",
        element: (
            <Partials>
                <Home />
            </Partials>
        ),
    },
    {
        path: "/set-event",
        element: (
            <Partials>
                <SetEvent />
            </Partials>
        ),
    },
    {
        path: "/event",
        element: (
            <Partials>
                <Event />
            </Partials>
        ),
    },
    {
        path: "/signin",
        element: (
            <Partials navButtonPage={"signup"}>
                <Signin />
            </Partials>
        ),
    },
    {
        path: "/signup",
        element: (
            <Partials>
                <Signup />
            </Partials>
        ),
    },
    {
        path: "/new-password",
        element: (
            <Partials>
                <NewPassword />
            </Partials>
        ),
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
