import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="container mx-auto lg:px-36 px-2 mt-16">
        <h2 className="special-offer my-8">Best Seller</h2>
 <div className="grid lg:grid-cols-2 grid-cols-1  gap-24">
 
  <div className="product-grid-2  py-8 px-3">
  <div className="grid grid-cols-2 gap-12
  ">
  <div className="">
  <Image
       src="/assets/products/img5.png"
      alt="Picture of the author"
      width="350px"
      height="300px"
      layout="responsive" />
  </div>
  <div className="m-auto pr-3">
  <div className="title">Cannatonic</div>
  <p>Contains <span style={{ 'color': 'rgb(91,135,55)','fontWeight':'600' }}>11.9% CBD </span>, it is used for reducing anxiety and depression and promoting relaxation.</p>
  <div className="price my-5">Sold at $10</div>
  <button className="addtocart">Add To Cart</button>
  </div>
</div>

  </div>
  <div className="product-grid-2  py-8 px-3">
  <div className="grid grid-cols-2 gap-16">
  <div className="">
  <Image
         src="/assets/products/img1.png"
      alt="Picture of the author"
      width="350px"
      height="300px"
      layout="responsive" />
  </div>
  <div className="m-auto pr-3">
  <div className="title">Astroid</div>
  <p>Contains <span style={{ 'color': 'rgb(91,135,55)','fontWeight':'600' }}>86% CBD </span>, it is used for reducing anxiety and depression and promoting relaxation.</p>
  <div className="price my-5">Sold at $60</div>
  <button className="addtocart">Add To Cart</button>
  </div>
</div>

  </div>
  <div className="product-grid-2  py-8 px-3">
  <div className="grid grid-cols-2 gap-16">
  <div className="">
  <Image
        src="/assets/products/img6.png"
      alt="Picture of the author"
      width="350px"
      height="300px"
      layout="responsive" />
  </div>
  <div className="m-auto pr-3">
  <div className="title">Zkittlez</div>
  <p>Contains <span style={{ 'color': 'rgb(91,135,55)','fontWeight':'600' }}>16.2% CBD </span>, it is used for reducing anxiety and depression and promoting relaxation.</p>
  <div className="price my-5">Sold at $60</div>
  <button className="addtocart">Add To Cart</button>
  </div>
</div>

  </div>
  <div className="product-grid-2  py-8 px-3">
  <div className="grid grid-cols-2 gap-16">
  <div className="">
  <Image
     src="/assets/products/img7.png"
      alt="Picture of the author"
      width="350px"
      height="300px"
      layout="responsive" />
  </div>
  <div className="m-auto pr-3">
  <div className="title">Limoncello</div>
  <p>Contains <span style={{ 'color': 'rgb(91,135,55)','fontWeight':'600' }}>11% CBD </span>, it is used for reducing anxiety and depression and promoting relaxation.</p>
  <div className="price my-5">Sold at $60</div>
  <button className="addtocart">Add To Cart</button>
  </div>
</div>

  </div>
 
  </div>
  </div>
  )
}

export default Hero
