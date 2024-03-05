import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import NavBar from "./Components/NavBar/NavBar";
import Auth from "./Pages/AuthPage/Auth";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
