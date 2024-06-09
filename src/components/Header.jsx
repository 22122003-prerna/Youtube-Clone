 import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"; 

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SiMenu } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg"; 

import { Context } from "../context/contextapi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate(); // Ensure navigate is called within the component

  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];


  return (
    <div className="sticky top-0 z-10 flex  flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">Header</div>
  );
};

export default Header;
