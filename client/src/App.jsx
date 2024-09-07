import Event from "./components/event/event.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/auth/signin.component";
import Signup from "./components/auth/signup.component";
import NewPassword from "./components/auth/new-password.components";
import Partials from "./components/partials/partials.component";
import Home from "./components/home/home.component";
import EventAdmin from "./components/home/event-admin.component";
import AddAnnouncement from "./components/home/add-announcement.component";
import AddKeySpeaker from "./components/event/add-key-speaker.component";
import Error from "./components/partials/error.component";
import Logout from "./components/auth/logout.component";
import DeleteEvent from "./components/event/delete-event.component";
import AddEvent from "./components/event/add-event.component";
import UpdateEvent from "./components/event/update-event.component";

const router = createBrowserRouter([
    {
        path: "/add-speaker/:id",
        element: (
            <Partials>
                <AddKeySpeaker />
            </Partials>
        ),
    },
    {
        path: "/dashboard",
        element: (
            <Partials>
                <EventAdmin />
            </Partials>
        ),
    },
    {
        path: "/add-announcement/:id",
        element: (
            <Partials>
                <AddAnnouncement />
            </Partials>
        ),
    },
    {
        path: "/",
        element: (
            <Partials>
                <Home />
            </Partials>
        ),
    },
    {
        path: "/new-event",
        element: (
            <Partials>
                <AddEvent />
            </Partials>
        ),
    },
    {
        path: "/update/:id",
        element: (
            <Partials>
                <UpdateEvent />
            </Partials>
        ),
    },
    {
        path: "/event/:id",
        element: (
            <Partials>
                <Event />
            </Partials>
        ),
    },
    {
        path: "/delete/:id",
        element: (
            <Partials>
                <DeleteEvent />
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
    {
        path: "/logout",
        element: (
            <Partials>
                <Logout />
            </Partials>
        ),
    },
    {
        path: "*",
        element: (
            <Partials>
                <Error />
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
