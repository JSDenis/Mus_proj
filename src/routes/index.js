import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Header from "../template/Header";
import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";
import ErrorNotFound from "../pages/ErrorNotFound";
import RadioItem from "../pages/RadioItem";
import PlayList from "../pages/PlayList";
import SignIn from "../pages/SignIn";

const routes = {
    "/": Home,
    "/contact": Contact,
    "/:id": RadioItem,
    "/signin": SignIn
}

const router = async () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");
    header.innerHTML = Header();
    let hash = getHash();
    let route = await getResolveRoutes(hash);
    let render = routes[route] ? routes[route] : ErrorNotFound;
    content.innerHTML = await render();
}

export default router;