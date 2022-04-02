import "./App.css";
import { Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import Home  from "./pages/Home"
import Example  from "./pages/Example"

const App = () => {
  return (
    <Routes>  
      <Route path="/" element={<Home />} />  
      <Route path="/home" element={<Home />} />
      <Route path="/example" element={<Example />} />
    </Routes>
  ) 
}
export default App;
