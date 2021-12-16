import './App.css';
import HomePage from './pages/HomePage/HomePage';
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
                <Route exact path="/contact" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;