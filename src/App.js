import './App.css';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/aboutme" element={<AboutMe />} />
                <Route exact path="/contacts" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;