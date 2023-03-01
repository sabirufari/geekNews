import './core.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scrollTop/ScrollTop";
import AboutPage from "./pages/aboutPage/AboutPage";
import MobileDev from './components/news/mobileDev/MobileDev';
import WebDev from './components/news/webDev/WebDev';
import MultiMedia from "./components/multiMedia/MultiMedia";
import Event from "./components/news/event/Event";
import Meneger from './components/news/meneger/Meneger';


function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path="/about/:id" element={<AboutPage/>}/>
            <Route path="/mobile" element={<MobileDev/>}/>
            <Route path="/web" element={<WebDev/>}/>  
            <Route path='/multiMedia' element={<MultiMedia/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/projectmeneger" element={<Meneger/>}/>

        </Routes>
        <ScrollTop/>
        <Footer/>
    </>
  );
}

export default App;