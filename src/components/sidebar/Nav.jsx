import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCalendarWeek } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { GiFamilyHouse } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu } from "../../feature/ActiveSide";

const Nav = () => {
  // const activeMenu = useSelector((t) => t.sidebar.sidebar);
  const currentColor = useSelector((t) => t.sidebar.currentColor);
  // const screenSize = useSelector((t) => t.sidebar.screenSize);
  // const dispatch = useDispatch();

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  //link style
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  // const handleCloseSideBar = () => {
  //   if (activeMenu !== undefined && screenSize <= 900) {
  //     dispatch(setActiveMenu(false));
  //   }
  // };

  return (
    <>
      <NavLink
        to="/accueil"
        style={{
          backgroundColor:
            splitLocation[1] === "" || splitLocation[1] === "accueil"
              ? currentColor
              : "",
        }}
        className={
          splitLocation[1] === "" || splitLocation[1] === "accueil"
            ? activeLink
            : normalLink
        }
      >
        <AiOutlineHome />
        <span className="capitalize ">Accueil</span>
      </NavLink>
      <NavLink
        to="/guesthouse"
        style={{
          backgroundColor:
            splitLocation[1] === "guesthouse" ? currentColor : "",
        }}
        className={splitLocation[1] === "guesthouse" ? activeLink : normalLink}
      >
        <GiFamilyHouse />
        <span className="capitalize ">GuestHouse</span>
      </NavLink>
      <NavLink
        to="/reservations"
        style={{
          backgroundColor:
            splitLocation[1] === "reservations" ? currentColor : "",
        }}
        className={
          splitLocation[1] === "reservations" ? activeLink : normalLink
        }
      >
        <BsCalendarWeek />
        <span className="capitalize ">Réservations</span>
      </NavLink>
      <NavLink
        to="/profil"
        style={{
          backgroundColor: splitLocation[1] === "profil" ? currentColor : "",
        }}
        className={splitLocation[1] === "profil" ? activeLink : normalLink}
      >
        <BsPerson />
        <span className="capitalize ">Profil</span>
      </NavLink>
      <NavLink
        to="/accueil"
        // style={{
        //   backgroundColor:
        //     splitLocation[1] === "déconnexion" ? currentColor : "",
        // }}
        className={normalLink}
      >
        <BiLogOut />
        <span className="capitalize ">Déconnexion</span>
      </NavLink>
    </>
  );
};

export default Nav;
