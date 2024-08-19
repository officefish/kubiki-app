

//import SVGHeader from "@/components/svg.header";
import SVGHeader from "@/components/svg.header";
import useBackgroundMover from "@/hooks/background-mover";
import { useSiteStore } from "@/providers/store";
import { Page } from "@/types";
import { FC, useEffect } from "react";

const Checkin: FC = () => {

  const { setPage } = useSiteStore()

  useEffect(() => {
      setPage(Page.CHECKIN)
  }, [setPage])

  const position = useBackgroundMover(7); // Adjust multiplier as needed

  const backgroundStyle = {
    backgroundPosition: `${position.x}% ${position.y}%`,
  };
  

    return (
    <div className='patternpad-orange-1 w-full h-full flex item-center justify-center' style={backgroundStyle}>
      <div className='w-[70%] h-full bg-warning/90 font-rubik px-2 text-md text-balance  overflow-y-scroll pb-4'>
          <SVGHeader width={500} height={55} value="Презентация"/>
          <br />
          <p className='w-full text-center'>Каждые выходные мы проводим презентации, на которых мы подробно рассказываем о нашей мастерской.</p>
          <br />
          <p className='w-full text-center'>Мы беседуем с родителями о том, зачем ребенку заниматься Lego, чему способствует это занятие.</p>
          <br />
          <p className='w-full text-center'>Мы подробно обсуждаем возможные наклонности и таланты каждого подростка, чтобы с помощью лего подвести его к профессиям, касающихся таких индустрий как промышленный дизайн, инженерное дело, робототехника, программирование, архитектурный дизайн, разработка компьютерных игр, кино и мультипликация.</p>
          <br />
          <p className='w-full text-center'>Во время презентации сами дети занимаются конструктором лего и знакомятся со своим будущим преподавателем.</p>
          <br />
          <p className='w-full text-center'>Мы часто устраиваем на презентациях безпроигрышные лотереи,готовим иные приятные сюрпризы.</p>
          <br />
          <p className='w-full text-center'>Мы уверены что вместе с вами мы отлично проведем время с большой пользой и удовольствием.</p>
          <br />
          <p className='w-full text-center'>Встречи происходят по предварительной записи, по телефонам: +7(921)756-60-45(Ксения), +7(911)715-06-37(Сергей)</p>
          <br />
          <p className='w-full text-center'>ПРиходите к нам!</p>
        </div>
   </div>)
}
export default Checkin