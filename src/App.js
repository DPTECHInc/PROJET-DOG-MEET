import "./App.css";
import NavMenu from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import NotFound from "./Components/Notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const Header = () => {
        return (
            <header className="App-header">
                <h1>DogMeet</h1>
                <NavMenu />
            </header>
        );
    };
    const Footer = () => {
        return <h3 className="App-footer">DogMeet by DPTECHINC©</h3>;
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/Accueil" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/About" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
