import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="container mx-auto px-2 lg:px-36 mt-12 newsletter text-center mb-32" >
   
  <h2 className="title text-center">Newsletter</h2>
  <p className="my-5">Sign up for our Newsletter and get Weekly Updates and get the latest information on CBD Products and their uses.</p>
 <div>
 <div className="mt-6 lg:w-8/12  md:w-11/12 w-11/12 m-auto">
<div className="flex">
<label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="subsinput min-w-0 flex-auto r w-full border-0 bg-white/5 px-3.5 py-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:red "
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="flex-none subs  bg-color2 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-color2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
</div>
            </div>
 </div>
  
  </div>
  )
}

export default Hero
