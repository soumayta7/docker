import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import SpecialOffer from "@modules/home/components/special-offer"
import BestSeller  from "@modules/home/components/best-seller"
import Blogs  from "@modules/home/components/blogs"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <Hero />
      <SpecialOffer />
      <BestSeller/>
      <Blogs/>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <FeaturedProducts /> */}
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
