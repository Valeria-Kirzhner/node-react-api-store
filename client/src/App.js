import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Images from "./components/Images";
import UserRoutes from "./components/Routes";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import userService from "./services/userService";
import Logout from "./components/Logout";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    const user = userService.getCurrentUser();
    setUser(user);
  }
  return (
    <>
      <header>
        <Navbar user={user} />
      </header>
      <main>
        <Routes>
          <Route path="/premiumSignup" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/routes" element={<UserRoutes />} />
          <Route path="/images" element={<Images />} />

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
