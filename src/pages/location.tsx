

import SVGHeader from "@/components/svg.header";
import useBackgroundMover from "@/hooks/background-mover";
import { useSiteStore } from "@/providers/store";
import { Page } from "@/types";
import { FC, useEffect } from "react";

const Location: FC = () => {

  const { setPage } = useSiteStore()

  useEffect(() => {
      setPage(Page.LOCATION)
  }, [setPage])

  const position = useBackgroundMover(7); // Adjust multiplier as needed

  const backgroundStyle = {
    backgroundPosition: `${position.x}% ${position.y}%`,
  };
  

    return (
    <div className='patternpad-02 w-full h-full flex item-center justify-center' style={backgroundStyle}>
      <div className='w-[70%] h-full bg-secondary/90 font-rubik px-2 text-md text-balance  overflow-y-scroll pb-4'>
        {/* <h1>Расположение.</h1> */}
        <SVGHeader width={500} height={55} value="Расположение"/>
        <br />
        <p className='w-full text-center'>Мы располагаемся по адресу поселок Металлострой, ул Центральная дом 11. (корпус 2. кв 15)</p>
        <br />
        <p className='w-full text-center'>Наш дом находится в самом центре поселка, на центральной площади рядом с дк имени "Маяковского", в том же здании что и отделение почты.</p>
        <br />
        <p className='w-full text-center'>Чтобы к нам попасть, вам нужно зайти со двора, найти подъезд, в котором на первом этаже есть салон красоты. Подняться на четвертый, последний этаж и позвонить в дверь справа, напротив хостела.</p>
        <br />
        <p className='w-full text-center'>Доехать до площади можно на автобусах 115, 115А со станции метро "Рыбацкое". На 335, 337, 335А, 337А автобусах из Колпино.</p>
        <br />
        <p className='w-full text-center'>Пожалуйста позвоните нам перед посещением!</p>
        <br />
        <p className='w-full text-center'>Мы на городских картах:</p>
        
        <div className="w-full flex flex-row items-center justify-evenly mt-8">
          <button className="no-outline btn-outline btn-lg btn btn-accent">Гугл</button>
          <button className="no-outline btn-outline btn-lg btn btn-accent" onClick={
            () => {window.open('https://yandex.ru/maps/-/CDcGNBzD', '_blank');}
          }>Яндекс</button>
          <button className="no-outline btn-outline btn-lg btn btn-accent">2 Gis</button>
        </div>
        </div>
   </div>)
}
export default Location