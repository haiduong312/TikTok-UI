// Layout
import { HeaderOnly } from "../Components/Layout";

import Home from "../pages/Home/index";
import Following from "../pages/Following/index";
import Profile from "../pages/Profile/index";
import Upload from "../pages/Upload/index";
export const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/Following",
        component: Following,
    },
    {
        path: "/Profile",
        component: Profile,
    },
    {
        path: "/Upload",
        component: Upload,
        layout: HeaderOnly,
    },
];

export const privateRoutes = [];
