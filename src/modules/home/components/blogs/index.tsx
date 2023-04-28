import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="container mx-auto px-36 mt-24 mb-12 pb-10" style={{'background':'#fbf9e9'}}>
         <div className="flex my-10 pt-5">
 
  <div className="flex-1 w-64 ">
  <h2 className="special-offer">Latest blog posts</h2>
  </div>
  <div className="flex-1 w-32 text-right">
 
  <button className="read-more inline-flex"><span className="mr-3" style={{'fontSize':'16px'}}>View All</span>
 
    <Image
      priority
      src="/svg/right.svg"
      height={20}
      width={20}
      alt="arrow"
    />
 

</button></div>
 
</div>

 <div className="grid grid-cols-2 gap-8">
 {/*  */}
 <div className="grid grid-cols-4 gap-4 bg-white blog-list mb-6">
 <div  style={{ borderRadius: '3px 10px 10px 3px', overflow: 'hidden', width: '100%', height: '120px',margin:'25px' }}>
  <Image
       src="/assets/blogs/img1.png"
      alt="Picture of the author"
      width="40px"
      height="50px"
      layout="responsive" /></div>
 <div className="col-span-3 my-8 mx-6 mr-10"> 
  <div className="title">Ways CBD may help to promote relaxation and reduce feelings of stress and anxiety.</div>
  <p className="pt-3">CBD may help to reduce symptoms of anxiety and depression, as well as improve sleep in people with insomnia </p>
<div className="text-right"> 
  <button className="read-more inline-flex"><span className="mr-3">Read more</span>
  <Image
      priority
      src="/svg/right.svg"
      height={20}
      width={20}
      alt="arrow"
    />
</button></div>
  </div>
 </div>
   {/*  */}
    {/*  */}
 <div className="grid grid-cols-4 gap-4 bg-white blog-list mb-6">
 <div  style={{ borderRadius: '3px 10px 10px 3px', overflow: 'hidden', width: '100%', height: '120px',margin:'25px' }}>
  <Image
       src="/assets/blogs/img4.png"
      alt="Picture of the author"
      width="40px"
      height="50px"
      layout="responsive" /></div>
 <div className="col-span-3 my-8 mx-6 mr-10"> 
  <div className="title">Ways CBD may help to promote relaxation and reduce feelings of stress and anxiety.</div>
  <p className="pt-3">CBD may help to reduce symptoms of anxiety and depression, as well as improve sleep in people with insomnia </p>
<div className="text-right"> 
  <button className="read-more inline-flex"><span className="mr-3">Read more</span>
  <Image
      priority
      src="/svg/right.svg"
      height={20}
      width={20}
      alt="arrow"
    />
</button></div>
  </div>
 </div>
   {/*  */}
    {/*  */}
 <div className="grid grid-cols-4 gap-4 bg-white blog-list mb-6">
 <div  style={{ borderRadius: '3px 10px 10px 3px', overflow: 'hidden', width: '100%', height: '120px',margin:'25px' }}>
  <Image
       src="/assets/blogs/img3.png"
      alt="Picture of the author"
      width="40px"
      height="50px"
      layout="responsive" /></div>
 <div className="col-span-3 my-8 mx-6 mr-10"> 
  <div className="title">Ways CBD may help to promote relaxation and reduce feelings of stress and anxiety.</div>
  <p className="pt-3">CBD may help to reduce symptoms of anxiety and depression, as well as improve sleep in people with insomnia </p>
<div className="text-right"> 
  <button className="read-more inline-flex"><span className="mr-3">Read more</span>
  <Image
      priority
      src="/svg/right.svg"
      height={20}
      width={20}
      alt="arrow"
    />
</button></div>
  </div>
 </div>
   {/*  */}
    {/*  */}
 <div className="grid grid-cols-4 gap-4 bg-white blog-list mb-6">
 <div  style={{ borderRadius: '3px 10px 10px 3px', overflow: 'hidden', width: '100%', height: '120px',margin:'25px' }}>
  <Image
       src="/assets/blogs/img2.png"
      alt="Picture of the author"
      width="40px"
      height="50px"
      layout="responsive" /></div>
 <div className="col-span-3 my-8 mx-6 mr-10"> 
  <div className="title">Ways CBD may help to promote relaxation and reduce feelings of stress and anxiety.</div>
  <p className="pt-3">CBD may help to reduce symptoms of anxiety and depression, as well as improve sleep in people with insomnia </p>
<div className="text-right"> 
  <button className="read-more inline-flex"><span className="mr-3">Read more</span>
  <Image
      priority
      src="/svg/right.svg"
      height={20}
      width={20}
      alt="arrow"
    />
</button></div>
  </div>
 </div>
   {/*  */}
   
 
  </div>
  </div>
  )
}

export default Hero
