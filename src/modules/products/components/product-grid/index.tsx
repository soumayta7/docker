import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (

    // <div className="">
 
    // <div style={{position: 'relative',borderRadius:'20px'}}>
    // <div className="product-icon">
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" fill="rgba(60,89,36,1)"></path></svg>    
    // </div>
    // <Image
    //       src="/assets/products/img1.png"
    //       alt="Picture of the author"
    //       width="100%"
    //       height="67px"
    //       layout="responsive" />
    //  </div>
    // <div className="px-4 pb-4 mt-3">
    // <div className="title">Astroid</div>
    // <p>86% CBD</p>
    // <div className="flex">
    //   <div className="flex-1 w-64">
    //   <div className="price">
    //     Sold at $60
    //     </div>
    //   </div>
    //   <div className="flex-1 w-32 text-center">
    //  <button className="pro-plus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="rgba(255,255,255,1)"></path></svg></button>
    //   </div>
    // </div>
    
    // </div>
    // </div>


    <Link href={`/products/${handle}`}>
      <a>
      <div className="">
      <div style={{position: 'relative',borderRadius:'20px'}}>
   <div className="product-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z" fill="rgba(60,89,36,1)"></path></svg>    
 </div>
          <Thumbnail thumbnail={thumbnail} size="full" />
          </div>
          <div className="px-4 pb-4 mt-3">
            <div className="title">{title}</div>
            <p><p>86% CBD</p></p>
            <div className="flex">
  <div className="flex-1 w-64">
  <div className="price">
  {price ? (
                <>
                  {price.price_type === "sale" && (
                    <span className="line-through text-gray-500">
                    {price.original_price} 
                    </span>
                  )}
                  <span
                    className={clsx("font-semibold", {
                      "text-rose-500":  price.price_type === "sale",
                    })}
                  >
                   Sold at     {price.calculated_price}
                  </span>
                </>
              ) : (
                <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
              )}
    </div>

  </div>
  <div className="flex-1 w-32 text-center">
 <button className="pro-plus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="rgba(255,255,255,1)"></path></svg></button>
  </div>
</div>

          
          
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview
