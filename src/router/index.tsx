

import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
} from "react-router-dom";
import { PrivateLayout, PublicLayout } from "../layouts";
import { isUserLoggedIn } from "../utils";
import { PageLogin, PageUser, PageUserDetail } from "../pages";

// const loggedin = localStorage.getItem("auth") ? true : false

const router = createBrowserRouter(
    createRoutesFromElements(
        isUserLoggedIn() ? (
            <Route path="/" element={<PrivateLayout />}>
                <Route index path={"/user"} element={<PageUser />} />
                <Route index path={"/user/:id"} element={<PageUserDetail />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Route>
        ) : (
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<PageLogin />} />
                <Route path="/register" element={<PageLogin />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        )
    )
);

export default router;
