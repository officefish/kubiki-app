

import { useSiteStore } from "@/providers/store";
import { Page } from "@/types";
import { FC } from "react";
import { Link } from "react-router-dom";

const Navigation: FC = () => {

  const { page } = useSiteStore()

    return <>
      <Link 
      to={'/'}
      ><button className=
        {`no-outline 
          btn-lg btn 
          uppercase
          text-yellow-700
          disabled:pointer-events-none 
          disabled:cursor-default
          disabled:bg-accent/10
          btn-accent
          `}
          disabled={page === Page.HOME}
        >Мастерская
      </button></Link>
      <Link 
      to={'/program'}
      ><button className= {`no-outline 
        btn-lg btn 
        uppercase
        text-blue-900
          disabled:pointer-events-none 
          disabled:cursor-default
          disabled:bg-primary/10
          btn-primary
          no-outline

        `}
        disabled={page === Page.PROGRAM}
      >
        Программа
      </button>
        </Link>
      <Link 
      to={'/location'}
      ><button className={`no-outline 
        btn-lg btn 
        uppercase
        text-pink-900
        disabled:pointer-events-none 
          disabled:cursor-default
          disabled:bg-secondary/10
          btn-secondary
          no-outline
        `}
        disabled={page === Page.LOCATION}
      >
        Расположение
        </button></Link>
       <Link 
      to={'/check-in'}
      ><button 
      className={`no-outline 
        btn-lg btn 
        ml-12
        uppercase
        text-orange-900
        disabled:pointer-events-none 
          disabled:cursor-default
          disabled:bg-warning/10
          btn-warning
          no-outline
        `}
        disabled={page === Page.CHECKIN}
      >
        Записаться
      </button></Link>
    </>
}
export default Navigation