import Content from "../Content/Content";
import ContentCounter from "../ContentCounter/ContentCounter";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Content></Content>}></Route>
            <Route path="/counter" element={<ContentCounter></ContentCounter>}></Route>
        </Routes>
    )
}

export default AppRoutes
