import css from "./casestudies.module.scss"
import Image from 'next/image'
import "animate.css"
import { Children } from "react"

export default function HalfSizePhoto({children, src, width, height, reverse}) {

    if(reverse) {
        return (
            <>
                <div className={css.half_photo_wrap}>
                    <div className="w-50-l">
                        <Image src={"/../public/images/mockups/"+src} width={width} height={height}></Image>
                    </div>
                    <div className={"w-50-l tc flex flex-column justify-center items-center "+css.half_text}>
                        <p className="w-40">
                            {children}
                        </p>
                        <Image src={"/../public/images/mockups/"+src} width={width} height={height}></Image>
                    </div>
                </div>
            </>
        )
    }else {
        return (
            <>
                <div className={css.half_photo_wrap}>
                    <div className={"w-50-l tc flex flex-column justify-center items-center "+css.half_text}>
                        <p className="w-40">
                            {children}
                        </p>
                        <Image src={"/../public/images/mockups/"+src} width={width} height={height}></Image>
                    </div>
                    <div className="w-50-l">
                        <Image src={"/../public/images/mockups/"+src} width={width} height={height}></Image>
                    </div>
                </div>
            </>
        )
    }

}
