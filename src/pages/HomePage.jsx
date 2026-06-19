import Carousel from "../components/Hero/Hero";
import HomeProducts from "../components/HomeProducts/HomeProducts";
import LatestProducts from "../components/LatestProducts/LatestProducts";
import Services from "../components/Services/Services";
export default function HomePage() {
    return (<div className="">
     <Carousel />
     <Services />
    <LatestProducts />
    <HomeProducts />
    </div>);
}
