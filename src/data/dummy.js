import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson,BsCalendarWeek } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { GiFamilyHouse } from 'react-icons/gi';


export const links = [
  {
    title: 'Menu',
    links: [
      {
        name: 'Accueil',
        icon: <AiOutlineHome />,
      },
    ],
  },

  {
    title: 'Menu',
    links: [
      {
        name: 'GuestHouse',
        icon: <GiFamilyHouse />,
      },
      {
        name: 'Réservations',
        icon: <BsCalendarWeek />,
      },
      {
        name: 'Profil',
        icon: <BsPerson />,
      },
      {
        name: 'Déconnexion',
        icon: <BiLogOut/>,
      },
    ],
  },
];

export const options = [
  {
    id: 1,
    image: "Icon/guest-house.png",
    number: 48,
    Name: 'Guest House'
  },
  {
    id: 2,
    image: "Icon/booking.png",
    number: 15,
    Name: 'Réservations'
  },
  {
    id: 3,
    image: "Icon/no-entry.png",
    number: 28,
    Name: 'Chambres occupées'
  },
  {
    id: 4,
    image: "Icon/check.png",
    number: 20,
    Name: 'Chambres disponibles'
  }
];

