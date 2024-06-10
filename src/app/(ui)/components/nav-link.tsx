import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface NavLinkProps {
    title: ReactNode;
    href: string;
    animation?: string;
    onPressed?: MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLink({title, href, animation = 'hover:-translate-y-1', onPressed} : NavLinkProps){
    return <Link href={href} className={`hover:text-yellow-300 flex justify-center items-center transition ease-in-out ${animation} hover:scale-125 duration-500 md:text-xl text-xs`} onClick={onPressed}>{title}</Link>
}