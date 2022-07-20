import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Gaming from "./pages/Gaming";
import Sports from "./pages/Sports";
import GameClips from "./pages/GameClips";


const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/clips" element={<GameClips />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
