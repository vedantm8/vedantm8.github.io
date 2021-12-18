import './App.css';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from "./pages/Resume";
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/aboutme" element={<AboutMe />} />
                <Route exact path="/contacts" element={<Contact />} />
                <Route exact path="/resume" element={<Resume />} />
            </Routes>
        </HashRouter>
    );
}

export default App;