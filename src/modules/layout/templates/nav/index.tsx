import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Image from "next/image"
const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [close,setclose]=useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const handle=()=>{
    console.log('test');
    console.log(close);
    close?setclose(false):setclose(true);
    // setclose(true);
  }
  const { toggle } = useMobileMenu()

  return (
    <div>
     {close?
       <div className="searchbar bg-white {close}" >
 <div className="grid grid-cols-2 gap-4 place-content-between bg-white container2 py-5">
  <div className="mt-auto cursor">
  <Image onClick={() =>handle()}
      priority
      src="/svg/close.svg"
      height={24}
      width={24}
      alt="arrow"
    /> 
  </div>
  <div className="text-right flex">
 <div className="border flex">
 <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full bg-white/5 px-3.5  py-1 text-white"
                placeholder="Search (Keyword,Product etc.)..."
              />
 <Image
      priority
      src="/svg/search.svg"
      height={24}
      width={24}
      alt="arrow"
    />  </div> 
<div className="flex-auto xl:w-6/12  lg:w-8/12  md:w-10/12 text-right">
  <ul className="left-ui-nav flex">
 <li className="middle">
 <Image
      priority
      src="/svg/user.svg"
      height={24}
      width={24}
      alt="arrow"
    />    
 </li>
<li className="middle">
<Image
      priority
      src="/svg/cart.svg"
      height={24}
      width={24}
      alt="arrow"
    />  
 </li>
<li className="middle">
 <div  className="flex">
  <span className="en middle">EN</span>
 <span  className="middle">
 <Image
      priority
      src="/svg/en.svg"
      height={24}
      width={24}
      alt="arrow"
    />  
  </span>
                      </div>
                    
                     </li>
 
                 </ul>
  </div>

  </div>
</div>
 </div>
 :''}
 <div className="navbar lg:hidden">
 <div className="flex justify-between py-4 px-5">
  <div> <Image
      priority
      src="/svg/left.svg"
      height={24}
      width={24}
      alt="arrow"
    /> </div>
  <div className="text-center mx-4 logo"> <div className="relative">
                <span className="span4">C</span>
                <span className="span5">B</span>
                <span className="span6">D</span>
              </div></div>
  <div className="flex">  <Image onClick={() =>handle()}
      priority
      src="/svg/search.svg"
      height={24}
      width={24}
      alt="arrow"
    /> <div className="ml-5"> <Image
    priority
    src="/svg/cart.svg"
    height={24}
    width={24}
    alt="arrow"
  />  </div>
</div>
</div>
 </div>
    <div className="navbar hidden lg:block">
      <div className="container2 mx-auto py-2">
<div className="flex relative">

  <div className="flex-auto relative w-24">

              <div>
                <span className="span1">C</span>
                <span className="span2">B</span>
                <span className="span3">D</span>
              </div>
            </div>
 
  <div className="flex-auto w-8/12 m-auto">
  <ul className="menu">
                <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">Blog</a></li>
                 </ul>
  </div>
  <div className="flex-auto w-4/12 text-right">
  <ul className="left-ui">
                    <li>
                         <button className="login">
                             Login
                                 </button>
                         </li>
                    <li className="middle cursor">
   <Image onClick={() =>handle()}
      priority
      src="/svg/search.svg"
      height={24}
      width={24}
      alt="arrow"
    />    
     </li>
<li className="middle">
                    
                     <Image
      priority
      src="/svg/user.svg"
      height={24}
      width={24}
      alt="arrow"
    />    

                      </li>
                     <li className="middle">
                     
                     <Image
      priority
      src="/svg/cart.svg"
      height={24}
      width={24}
      alt="arrow"
    />  

                     
                     </li>
                     <li className="middle">
                      <div  className="flex">
                      <span className="en middle">EN</span>
 <span  className="middle">
 <Image
      priority
      src="/svg/en.svg"
      height={24}
      width={24}
      alt="arrow"
    />  
  </span>
                      </div>
                    
                     </li>
 
                 </ul>
  </div></div>
 
  </div>
    </div>
   </div>
//       className={clsx("sticky top-0 inset-x-0 z-50 group", {
//         "!fixed": isHome,
//       })}
//     >
//       <div class="flex">
//   <div class="flex-none">
//     01
//   </div>
//   <div class="flex-auto w-64">
//     02
//   </div>
//   <div class="flex-auto w-32">
//     03
//   </div>
// </div> 
//       <header
//         className={clsx(
//           "relative h-16 px-8 mx-auto transition-colors bg-white border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
//           {
//             "!bg-white !border-gray-200": !isHome || isScrolled,
//           }
//         )}
//       >
//         <nav
//           className={clsx(
//             "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
//             {
//               "text-white group-hover:text-gray-900": isHome && !isScrolled,
//             }
//           )}
//         >
//           <div className="flex-1 basis-0 h-full flex items-center">
//             <div className="block small:hidden">
//               <Hamburger setOpen={toggle} />
//             </div>
//             <div className="hidden small:block h-full">
//               <DropdownMenu />
//             </div>
//           </div>

//           <div className="flex items-center h-full">
//           <ul className="menu">
//                     <li><a href="#" className="active">Home</a></li>
//                     <li><a href="#">Products</a></li>
//                     <li><a href="#">About</a></li>
//                     <li><a href="#">Contact</a></li>
//                     <li><a href="#">Blog</a></li>
//                 </ul>
//             {/* <Link href="/">
//               <a className="text-xl-semi uppercase">Acdme</a>
//             </Link> */}
//           </div>

//           <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
//              <ul className="left-ui">
//                     <li>
//                         <button className="login">
//                             Login
//                                 </button>
//                         </li>
//                     <li className="middle">

// <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" aria-labelledby="searchIconTitle" stroke="#000" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000"> <title id="searchIconTitle">Search</title> <path d="M14.4121122,14.4121122 L20,20"/> <circle cx="10" cy="10" r="6"/> </svg>
//                     </li>
//                     <li className="middle">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
//                     </li>
//                     <li className="middle">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
//                     </li>
//                     <li>
//                      <span className="en middle">EN</span>
// <span  className="middle">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>

// </span>
//                     </li>
 
//                 </ul>
//             {/* <div className="hidden small:flex items-center gap-x-6 h-full">
//               {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
//               <Link href="/account">
//                 <a>Account</a>
//               </Link>
//             </div> */}
//             {/* <CartDropdown /> */}
//           </div>
//         </nav>
//         <MobileMenu />
//       </header>
//     </div>
  )
}

export default Nav
