

import SVGHeader from "@/components/svg.header";
import useBackgroundMover from "@/hooks/background-mover";
import { useSiteStore } from "@/providers/store";
import { Page } from "@/types";
import { FC, useEffect } from "react";

const Program: FC = () => {

  const { setPage } = useSiteStore()

  useEffect(() => {
      setPage(Page.PROGRAM)
  }, [setPage])

  const position = useBackgroundMover(7); // Adjust multiplier as needed

  const backgroundStyle = {
    backgroundPosition: `${position.x}% ${position.y}%`,
  };
  
    return (
    <div className='patternpad-03 w-full h-full flex item-center justify-center' style={backgroundStyle}>
      <div className='w-[70%] h-full bg-primary/90 font-rubik px-2 text-md text-balance overflow-y-scroll pb-4'>
        {/* <h1>Программа.</h1> */}
        <SVGHeader width={500} height={50} value="Программа"/>
        <br />
        <p className='w-full text-center'>Занятия предусмотрены для детей и подростков в возрасте от 8 до 16 лет.</p>
        <br />
        <p className='w-full text-center'>Занятия разделены по группам трех возрастных категорий: 8-10 лет, 11-13 лет, 14-16 лет.</p>
        <br />
        <p className='w-full text-center'>Занятия происходят два раза в неделю в составе небольших групп от 5 до 8 детей в группе и одного преподавателя. Каждое занятие длится два академических часа с небольшим перерывом. Всего дети и подростки занимаются три часа в неделю.</p>
        <br />
        <p className='w-full text-center'>Каждые два месяца группа собирает наборы на заданную тему. По итогам семестра проводится экспо-день и фотосессия с работами детей, и совместными портретами детей и родителей.</p>
        <br />
        <p className='w-full text-center'>Занятия проводятся исключительно по абонементам, но по воскресеньям мастерскую можно посетить по записи в формате коворкинга выходного дня. Оставить подростка под нашим присмотром.</p>
        <br />
        <p className='w-full text-center'>Также в мастерской можно приобретать новые конструкторы Lego, покупать редкие коллекционные наборы, покупать лего в ассортименте поштучно, покупать тематические книги, фирменные огранайзеры, контейнеры и иной инвентарь.</p>
        </div>
   </div>)
}
export default Program