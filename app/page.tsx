import About from "../components/HomePage/About";
import ImageSlider from "../components/HomePage/ImageSlider";
import Servicecard from "../components/HomePage/Servicecard";
import Homesection from "../components/HomePage/Homesection";
import FeaturesPage from "../components/HomePage/Featurespage";
import Welcomesection from "../components/HomePage/Welcomesection";
import Testimonialsection from "../components/HomePage/Testimonialsection";
import Formsection from "../components/HomePage/Formsection";



export default function Page() {
  return (
    <>
   <ImageSlider/>
   <Servicecard/>
   <About/>
   <Homesection/>
   <FeaturesPage/>
   <Welcomesection/>
   <Testimonialsection/>
   <Formsection/>
    </>
  );
}