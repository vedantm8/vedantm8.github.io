import './App.css';
import Navbar from './components/navbar'
import Introduction from './components/introduction/Introduction'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Introduction />
        </div>
    );
}

export default App;