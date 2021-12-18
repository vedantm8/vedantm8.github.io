import './App.css';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from "./pages/Resume";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/aboutme" element={<AboutMe />} />
            <Route exact path="/contacts" element={<Contact />} />
            <Route exact path="/resume" element={<Resume />} />
        </Switch>
    );
}

export default App;