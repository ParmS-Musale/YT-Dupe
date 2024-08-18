import React from "react";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/authProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import Loading from "./loader/Loading";

const App = () => {
  const { loading } = useAuth();
  return (
    <>

      {loading ? <Loading /> :
        (
          <div>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/search/:searchQuery" element={<Search />} />
              <Route path="/video/:id" element={<PlayingVideo />} />
            </Routes>
          </div>
            )
      } 
        </>
  );
};

export default App;
