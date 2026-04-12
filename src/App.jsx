import { BrowserRouter, Routes, Route } from "react-router-dom";

import Todos from "./Pages/Todos";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/todos" element={<Todos/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
