import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
