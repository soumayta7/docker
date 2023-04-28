import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
const Hero = () => {
 
  return ( 
    <Carousel autoPlay>
      {/*  */}
    <div>    <div className="flex">
    <div className="w-7/12  bg1">
        <div className="container my-auto px-36 pb-48 text-left">
       <h1 className="welcome text-color-1">Love Yourself <br></br><span className="text-black"> More With</span> CBD</h1>
       <br></br>
       <p className="wel-content">Our carefully curated selection is designed to provide you with the highest quality CBD products on the market, our shop is the perfect destination for those looking to indulge in the therapeutic benefits of CBD in a sophisticated setting. So come in, browse our selection, and let us help you discover the many benefits of CBD.</p>
       <br></br>
       <button className="get-started">
           Get Started
               </button>
               
               </div>    </div>
               <div className="w-5/12"> <img src="/hero.png"className="w-full h-full"/>
               </div>    </div>  </div>
               {/*  */}
    <div>
            {/*  */}
    <div>    <div className="flex">
    <div className="w-7/12  bg1">
        <div className="container my-auto px-36 pb-48 text-left">
       <h1 className="welcome text-black">I can buy Myself<br></br><span className="text-color-1"> Flowers</span></h1>
       <br></br>
       <p className="wel-content">Our carefully curated selection is designed to provide you with the highest quality CBD products on the market, our shop is the perfect destination for those looking to indulge in the therapeutic benefits of CBD in a sophisticated setting. So come in, browse our selection, and let us help you discover the many benefits of CBD.</p>
       <br></br>
       <button className="get-started">
           Get Started
               </button>
               
               </div>    </div>
               <div className="w-5/12"> <img src="/hero.png"className="w-full h-full"/>
               </div>    </div>  </div>
               {/*  */}
    </div>
    <div>
          {/*  */}
    <div>    <div className="flex">
    <div className="w-7/12  bg1">
        <div className="container my-auto px-36 pb-48 text-left">
       <h1 className="welcome text-dark">Let's<span className="text-color-1"> Rock and <br></br> Roll</span> all night long</h1>
       <br></br>
       <p className="wel-content">Our carefully curated selection is designed to provide you with the highest quality CBD products on the market, our shop is the perfect destination for those looking to indulge in the therapeutic benefits of CBD in a sophisticated setting. So come in, browse our selection, and let us help you discover the many benefits of CBD.</p>
       <br></br>
       <button className="get-started">
           Get Started
               </button>
               
               </div>    </div>
               <div className="w-5/12"> <img src="/hero.png"className="w-full h-full"/>
               </div>    </div>  </div>
               {/*  */}
    </div>
</Carousel>
  )
}

export default Hero
