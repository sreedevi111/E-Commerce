import { Routes, Route } from "react-router-dom";
import React,{useEffect} from "react";
import {auth} from "./firebase"

//components

import Header from "./components/Header";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment"

function App() {

  const [{user}, dispatch] = useStateValue();

  //will run after the app component loads
  useEffect(() => {
    
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        //if user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      {/* header should be available at every end point*/}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={ !user? <Login/> :< CheckOut />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
