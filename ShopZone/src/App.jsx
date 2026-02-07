import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navabr from "./Components/Navabr";
import Feature from "./Components/Feature";
import ActionBanner from "./Components/ActionBanner";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Shop from "./Components/Shop";

function App() {
  return (
    <BrowserRouter>
      <Navabr />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Feature />
              <ActionBanner />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
