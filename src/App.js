import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//importation pages
import Accueil from "./pages/Accueil";
import Booking from "./pages/Booking";
import Guest_house from "./pages/Guest_house";
import Profil from "./pages/Profil";

const App = () => {
  const activeMenu = useSelector((t) => t.sidebar.sidebar);

  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          {/* {activeMenu ? ( */}
          {/* <div className="max-md:fixed dark:bg-secondary-dark-bg bg-white "> */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
          {/* ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )} */}
          <div className={
            activeMenu
              ? 'bg-gray-100 min-h-screen md:ml-72 w-full  '
              : 'bg-gray-100 w-full min-h-screen flex-2 '
          }>
            <div className="static navbar w-full ">
              <Navbar />
            </div>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/accueil" element={<Accueil />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="/guesthouse" element={<Guest_house />} />
              <Route path="/reservations" element={<Booking />} />

            </Routes>

          </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
