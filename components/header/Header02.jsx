import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "../../data/footer_data";
import { FaMediumM } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import DarkMode from "../mode/DarkMode";
import Logo from "./../../public/images/logo.png";
import WhiteLogo from "./../../public/logo.png";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import {
  isChildrenPageActive,
  isParentPageActive,
} from "../../utils/daynamicNavigation";
import { useEffect, useState } from "react";


export default function Header02() {
  const [toggle, setToggle] = useState(false);
  const [isScroll, setScroll] = useState(false);
  const [isCollapse, setCollapse] = useState(null);

  const route = useRouter();

  // sticky menu
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 4) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  // window resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    });
  });

  /* -------------------------------------------------------------------------- */
  /*                            daynamic navigations                            */
  /* -------------------------------------------------------------------------- */
  

  

  

  // mobile page collapse
  const mobileCollapse = (id) => {
    if (isCollapse === id) {
      return setCollapse(null);
    }
    setCollapse(id);
  };

  return (
    <>
      {/* main desktop menu sart*/}
      <header
        className={`js-page-header page-header--transparent fixed top-0 z-20 w-full transition-colors ${
          isScroll ? "js-page-header--is-sticky" : ""
        }`}
      >
        <div className="flex items-center px-6 py-6 xl:px-24 ">
          <Link className="shrink-0" href="/">
            <a>
              <Image
                src={WhiteLogo}
                height={56}
                width={259}
                alt="BlackVault Crypto Miner"
              />
            </a>
          </Link>
          {/* End  logo */}

          
          {/* End Desktop search form */}

          <div className="js-mobile-menu dark:bg-black invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
            <nav className="navbar w-full">
              <ul className="flex flex-col lg:flex-row">
                {/* home */}
                <li className="group">
                  <Link href="/">
                    <a>
                      <button className="font-display hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "/")
                              ? "text-accent dark:text-gold"
                              : ""
                          }
                        >
                          Home
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>

                {/**Features */}
                <li className="group">
                  <Link href="#features">
                    <a>
                      <button className="font-display hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "#features")
                              ? "text-accent dark:text-gold"
                              : ""
                          }
                        >
                          Features
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>

                {/*roadmap*/}
                <li className="group">
                  <Link href="#roadmap">
                    <a>
                      <button className="font-display hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "#roadmap")
                              ? "text-accent dark:text-gold"
                              : ""
                          }
                        >
                          Roadmap
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* End menu for desktop */}

            <div className="ml-8 hidden items-center lg:flex xl:ml-12">
            <div className="flex space-x-6">
                <Link href="https://medium.com/@blackvaultcoin/">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer"
                  >
                  <FaMediumM className="text-lg text-jacarta-300 dark:text-green dark:hover:text-gold" />
                  </a>
                </Link>
                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link href={href} key={id}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer"
                      >
                        <svg className="icon group-hover:fill-accent fill-green h-5 w-5 dark:group-hover:fill-gold">
                          <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                        </svg>
                      </a>
                    </Link>
                  );
                })}
                <Link href="https://t.me/BlackVaultCoin">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer"
                  >
                  <FaTelegramPlane className="text-lg text-jacarta-300 dark:text-green dark:hover:text-gold" />
                  </a>
                </Link>
              </div>

            </div>
            {/* End header right content (metamask and other) for desktop */}
          </div>
          {/* header menu conent end for desktop */}

          <div className="ml-auto flex lg:hidden">
            
          <div className="flex space-x-2">
                <Link href="https://medium.com/@blackvaultcoin/">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group cursor-pointer"
                    >
                      <FaMediumM className="text-lg text-jacarta-300 dark:text-green dark:hover:text-gold" />
                    </a>
                </Link>
                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link href={href} key={id}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer"
                      >
                        <svg className="icon group-hover:fill-accent fill-green h-5 w-5 dark:group-hover:fill-green">
                          <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                        </svg>
                      </a>
                    </Link>
                  );
                })}
                <Link href="https://t.me/BlackVaultCoin">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer"
                  >
                    <FaTelegramPlane className="text-lg text-jacarta-300 dark:text-green dark:hover:text-gold" />
                  </a>
                </Link>
            </div>
          </div>
          {/* End header right content user  for mobile */}
        </div>
        {/* End flex item */}
      </header>
      {/* main desktop menu end */}

      {/* Start mobile menu and it's other materials */}
      
      {/* End mobile menu and it's other materials */}
    </>
  );
}
