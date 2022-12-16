import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveMenu } from '../feature/ActiveSide';

// const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
//   <TooltipComponent content={title} position="BottomCenter">
//     <button
//       type="button"
//       onClick={() => customFunc()}
//       style={{ color }}
//       className="relative text-xl rounded-full p-3 hover:bg-light-gray"
//     >
//       <span
//         style={{ background: dotColor }}
//         className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
//       />
//       {icon}
//     </button>
//   </TooltipComponent>
// );

const Navbar = () => {
  // const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
  const activeMenu = useSelector((t) => t.sidebar.sidebar);
  const currentColor = useSelector((t) => t.sidebar.currentColor);
  const screenSize = useSelector((t) => t.sidebar.screenSize);
  const dispatch = useDispatch();
  const [width, setWindowWidth] = useState(window.innerWidth);

  const handleOpenSideBar = () => {
    // if (activeMenu === false) {
    dispatch(setActiveMenu(!activeMenu));
    // }
  };

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  window.addEventListener("resize", updateDimensions);

  useEffect(() => {
    if (width <= 900) {
      dispatch(setActiveMenu(false));
    } else {
      dispatch(setActiveMenu(true));
    }
  }, [width]);

  

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

      {/* <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} /> */}
      <button onClick={handleOpenSideBar} className="relative text-xl rounded-full p-3 hover:bg-light-gray" style={{ color: currentColor }}>
        <span
          // style={{ background: currentColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        <AiOutlineMenu />
      </button>
      {/* <div className="flex">
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div> */}
    </div>
  );
};

export default Navbar;
