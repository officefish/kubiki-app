import { FC, PropsWithChildren } from "react";

const Header: FC <PropsWithChildren> = ({ children }) => {
    return <header className="w-full absolute top-0 h-12 flex items-center justify-center pr-8 gap-4">{children}</header>
}
export default Header