import "./App.css";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./components/Login";
import Payment from "./pages/Payment";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { auth } from "./adapter/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { useStateValue } from "./stores/StateProvider";

const promise = loadStripe(
  "pk_test_51PbiI9RrAmy3ssPn7vmdgRDS0Jjf1X6juwQNt93Y2ELDBpr74SDbMNRggKiKTznnBo8dd16vG6mHQ5TdFGnOm1es003Q8VctN7"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="*"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
