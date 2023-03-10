import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { CardPage } from "./pages/CardPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
