import LandingPage from "../pages/LandingPage";
import SingleVideo from "../pages/SingleVideo";
import VideoRepository from "../pages/VideoRepository";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/repository" element={<VideoRepository />} />
        <Route path="/video" element={<SingleVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
