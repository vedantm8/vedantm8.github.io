import './App.css';
import Navbar from './components/navbar'
import Introduction from './components/introduction/Introduction'
import MainImage from './components/MainImage/MainImage'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="frontPage">
                <Introduction />
                <MainImage />
            </div>
        </div>
    );
}

export default App;