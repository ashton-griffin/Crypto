import { BrowserRouter, Routes, Route } from "react-router-dom"
import CryptoDetail from "./pages/CryptoDetail";
import CryptoHome from "./pages/CryptoHome";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<CryptoHome />} />
        <Route path='/coin/:id' element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
