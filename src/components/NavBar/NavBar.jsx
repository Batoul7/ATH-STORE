import { useState } from "react";
import { NavLinksData } from "../../Data/NavLinks";
import NavItems from "./NavItems";
export default function NavBar() {
    const [_, setActive] = useState(false);
    return (<nav className='hidden lg:flex w-70  justify-between items-center'>
      <NavItems items={NavLinksData} show={setActive}/>
    </nav>);
}
