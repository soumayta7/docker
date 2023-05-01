import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
const Hero = () => {
  return ( 
      <div className="flex flex-wrap">
    <div className=" lg:w-7/12  sm:w-full md:w-full bg1 md:order-3 sm:order-2 lg:order-1 order-2">
        <div className="lg:container my-auto lg:px-36 md:px-20 px-12 lg:pb-48 pb-10 text-left text-center lg:text-left">
       <h1 className="welcome text-color-1">Love Yourself <br></br><span className="text-black"> More With</span> CBD</h1>
       <br></br>
<div className="container m-auto">
<p className="wel-content">Our carefully curated selection is designed to provide you with the highest quality CBD products on the market, our shop is the perfect destination for those looking to indulge in the therapeutic benefits of CBD in a sophisticated setting. So come in, browse our selection, and let us help you discover the many benefits of CBD.</p>

</div>
       <br></br>
       <button className="get-started">
           Get Started
               </button>
               
               </div>    </div>
               <div className="lg:w-5/12  md:w-full sm:w-full md:order-1 sm:order-1 lg:order-2 order-1"> <img src="/hero.png"className="w-full h-full"/>
               </div>    </div>  
      
  )
}

export default Hero
