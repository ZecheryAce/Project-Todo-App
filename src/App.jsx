import { BrowserRouter, Routes, Route } from "react-router-dom";

import Todos from "./pages/Todos";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/todos" element={<Todos/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
