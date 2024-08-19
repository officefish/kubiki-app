import { FC, PropsWithChildren } from "react";

const Footer: FC <PropsWithChildren> = ({ children }) => {
    return <footer className="
    w-full 
    font-rubik 
    text-xl 
    absolute bottom-0 h-24 flex items-center justify-center pb-6 pr-8 gap-4">{children}</footer>
}
export default Footer