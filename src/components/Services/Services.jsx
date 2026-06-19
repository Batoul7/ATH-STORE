import { ServicesData } from "../../Data/ServicesData";
import ServiceCard from "./ServiceCard";
export default function Services() {
    return (<section className=' container mx-auto px-5 py-10'>
    <ServiceCard data={ServicesData}/>
    </section>);
}
