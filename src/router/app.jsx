import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;
