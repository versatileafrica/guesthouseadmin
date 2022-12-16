import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';
import { setActiveMenu } from '../feature/ActiveSide';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './sidebar/Nav';

const Sidebar = () => {
  const activeMenu = useSelector((t) => t.sidebar.sidebar);
  const currentColor = useSelector((t) => t.sidebar.currentColor);
  const screenSize = useSelector((t) => t.sidebar.screenSize);
  const dispatch = useDispatch();
  const [width, setWindowWidth] = useState(window.innerWidth);

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      dispatch(setActiveMenu(false));
    }
  };
  const handleOpenSideBar = () => {
    // if (activeMenu === false) {
    dispatch(setActiveMenu(!activeMenu));
    // }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  //mise à jour de la width
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  window.addEventListener("resize", updateDimensions);

  // if (width < 768) {
    return (
      <>
        {activeMenu && (
          // <div className="h-screen w-72 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 sidebar">
          <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            <div className="flex justify-between items-center">
              <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                <SiShopware /> <span>Shoppy</span>
              </Link>
              {/* <TooltipComponent content="Menu" position="BottomCenter"> */}
              <button
                type="button"
                onClick={() => dispatch(setActiveMenu(!activeMenu))}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
              {/* </TooltipComponent> */}
            </div>
            <div className="mt-10 ">
              <Nav />
              {/* {links.map((item) => (
                <div key={item.title}>
                  {* <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p> *}
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : '',
                      })}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span className="capitalize ">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))} */}
            </div>
          </div>
        ) 
        // : (
        //   <button onClick={handleOpenSideBar} className="relative text-xl rounded-full p-3 hover:bg-light-gray" style={{ color: currentColor }}>
        //     <span
        //       // style={{ background: currentColor }}
        //       className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        //     />
        //     <AiOutlineMenu />
        //   </button>
        // )
        }
      </>
    );
  // }
  // else {
  //   return (
  //     <div className='flex relative'>
        
  //         {activeMenu && (
  //           <div className="h-screen w-72 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 sidebar">
  //             <div className="flex justify-between items-center">
  //               <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
  //                 <SiShopware /> <span>Shoppy</span>
  //               </Link>
                
  //               <button
  //                 type="button"
  //                 onClick={() => dispatch(setActiveMenu(!activeMenu))}
  //                 style={{ color: currentColor }}
  //                 className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
  //               >
  //                 <MdOutlineCancel />
  //               </button>
               
  //             </div>
  //             <div className="mt-10 ">
  //               {links.map((item) => (
  //                 <div key={item.title}>
  //                   <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
  //                     {item.title}
  //                   </p>
  //                   {item.links.map((link) => (
  //                     <NavLink
  //                       to={`/${link.name}`}
  //                       key={link.name}
  //                       onClick={handleCloseSideBar}
  //                       style={({ isActive }) => ({
  //                         backgroundColor: isActive ? currentColor : '',
  //                       })}
  //                       className={({ isActive }) => (isActive ? activeLink : normalLink)}
  //                     >
  //                       {link.icon}
  //                       <span className="capitalize ">{link.name}</span>
  //                     </NavLink>
  //                   ))}
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         )}
       
  //       <div className='p-1 md:ml-2 md:mr-2 relative'>
  //         <button onClick={handleOpenSideBar} className="relative text-xl rounded-full p-3 hover:bg-light-gray" style={{ color: currentColor }}>
          
  //           <AiOutlineMenu />
  //         </button>

  //       </div>
  //     </div>
  //   );
  // }
};

export default Sidebar;
