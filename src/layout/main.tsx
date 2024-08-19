import { FC, PropsWithChildren } from "react";

const Content: FC <PropsWithChildren> = ({ children }) => {
    return  <main className='flex items-start pt-8 justify-center w-full h-full'>
    <div className='w-[75%] h-[82%] rounded-lg flex items-center justify-center'>
        {children}
    </div>
  </main>
}
export default Content