import "./App.css";
import { Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import Home  from "./pages/Home"

const App = () => {
  return (
    <Routes>  
      <Route path="/" element={<IntroPage />} />  
      <Route path="/home" element={<Home />} />
    </Routes>
  ) 
}
export default App;
