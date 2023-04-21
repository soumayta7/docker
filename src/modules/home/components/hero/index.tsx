import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="milton-container">
    <div className="flex">
    <div className="w-7/12  bg1">
    <div className="container my-auto px-36 pb-48">
       <h1 className="welcome">Welcome to <br></br><span className="text-color-1"> CBinDeed shop</span></h1>
       <br></br>
       <p className="wel-content">Our carefully curated selection is designed to provide you with the highest quality CBD products on the market, our shop is the perfect destination for those looking to indulge in the therapeutic benefits of CBD in a sophisticated setting. So come in, browse our selection, and let us help you discover the many benefits of CBD.</p>
       <br></br>
       <button className="get-started">
           Get Started
               </button>
               
    </div>
    </div>
    <div className="w-5/12">
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
  <Image
    alt='Mountains'
    src='/hero.png'
    layout='fill'
    objectFit='cover'
  />
</div>
</div>
  
    {/* <Image src="/hero.png"  layout="responsive"  objectFit="contain"/> */}
   
 
    </div>
    </div>
  )
}

export default Hero
