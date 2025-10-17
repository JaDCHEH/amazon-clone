import React, { useEffect } from "react";
import "./Styles/App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import Login from "./Pages/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("User is signed in:", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // User is signed out
        dispatch({
          type: "SET_USER",
          user: null,
        });
        console.log("User is signed out");
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route
            path="/payment"
            element={[<Header />, <Payment />, <Footer />]}
          />
          <Route
            path="/checkout"
            element={[<Header />, <Checkout />, <Footer />]}
          />
          <Route path="/" element={[<Header />, <Home />, <Footer />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
