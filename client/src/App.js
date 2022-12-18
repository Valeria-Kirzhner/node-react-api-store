import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/premiumSignup" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/logout" element={<Home />} />

          <Route path="/" exact element={<Home />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
