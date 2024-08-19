

import SVGHeader from "@/components/svg.header";
import useBackgroundMover from "@/hooks/background-mover";
import { useSiteStore } from "@/providers/store";
import { Page } from "@/types";
import { FC, useEffect } from "react";

const Mastery: FC = () => {

    const { setPage } = useSiteStore()

    useEffect(() => {
        setPage(Page.HOME)
    }, [setPage])

    const position = useBackgroundMover(7); // Adjust multiplier as needed

    const backgroundStyle = {
      backgroundPosition: `${position.x}% ${position.y}%`,
    };
    
    return (
    <div className='patternpad-yellow-2 w-full h-full flex item-center justify-center' style={backgroundStyle}>
      <div className='w-[70%] h-full bg-accent/90 font-rubik px-2 text-md text-balance overflow-y-scroll pb-4'>
        <SVGHeader width={500} height={55} value="Lego-лофт"/>
        <p className="mt-2 w-full text-center">в поселке Металлострой.</p>
        <br />
        <p className='w-full text-center'>Lego-лофт — это комфортная квартира-чердак, с двумя большими залами и несколькими другими комнатами, общей площадью в 100 кв. м. в которой есть все необходимое для встреч небольшими группами, чтобы вместе собирать наборы из популярного датского конструктора LEGO.</p>
        <br />
        <p className='w-full text-center'>В основном зале располагается мастерская с множеством органайзеров, большими и удобными столами и вращающимися стульями, стеллажами и витринами с готовыми наборами из конструктора Lego.</p>
        <br />
        <p className='w-full text-center'>Второй зал-лекторий предназначен для совместного просмотра образовательных видео, а также групповых занятий за компьютером, который иногда также трансформируется в гостинную выходного дня или фотостудию.</p>
        <br />
        <p className='w-full text-center'>В помещении также есть гардероб, гримерка, магазин Lego, родительский кабинет и совместная кладовая.</p>
        </div>
   </div>)
}
export default Mastery