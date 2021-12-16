import NavBar from "../../components/navbar";
import Introduction from "../../components/introduction/Introduction";
import MainImage from "../../components/MainImage/MainImage";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <div className="frontPage">
                <Introduction />
                <MainImage />
            </div>
        </div>
    )
}

export default HomePage;