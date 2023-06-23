import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"

import Vdc from "../../public/images/mockups/vdc/vdc.webp"
import Lmg from "../../public/images/mockups/lmg/lmg.webp"
import Realdeal from "../../public/images/mockups/realdeal/a4-brochure.webp"
import Chalete from "../../public/images/mockups/chalete/chalete.webp"
import Alaise from "../../public/images/mockups/alaise/alaise.webp"
import Rosaella from "../../public/images/mockups/rosaella/desktop.webp"

import Thumbnail from "./thumbnail";

export default function CaseStudies() {

    return (
        <div className={css.portfolio_container}>

            

            <div id="portfolio" className="flex justify-between flex-wrap">
                <Thumbnail url="alaise" photo={Alaise} title="Alaise" />
                <Thumbnail url="vdc" photo={Vdc} title="Vdc" />
                <Thumbnail url="lmg" photo={Lmg} title="Lmg" full="true"/>
                <Thumbnail url="chalete" photo={Chalete} title="Chalete" />
                <Thumbnail url="realdeal" photo={Realdeal} title="Realdeal" />
            </div>
        </div>
    )
}
