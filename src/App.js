import './core.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scrollTop/ScrollTop";


function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route index element={<MainPage/>}/>
        </Routes>
        <ScrollTop/>
        <Footer/>
    </>
  );
}

export default App;