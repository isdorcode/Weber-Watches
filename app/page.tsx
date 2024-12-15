import Contact from "./components/Contact";
import ForMen from "./components/ForMen";
import TechSavyWatches from "./components/Savvy";
// import Popular from "./components/Popular";
import Text from "./components/Banner";
import PricingPlans from "./components/Pricing";
import AboutUs from "./components/About";
// import Cart from "./components/CartPage";
export default function Home() {
  return (
   <>
   <Text />
   {/* <Cart /> */}
   <AboutUs />
   {/* <Popular /> */}
   <PricingPlans />
   <TechSavyWatches />
   <ForMen />
   <Contact />
   </>
  ) 
}
