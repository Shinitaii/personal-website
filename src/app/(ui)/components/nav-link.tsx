import Link from "next/link";
import { Key, MouseEventHandler, ReactNode } from "react";

interface NavLinkProps {
    title: ReactNode;
    href: string;
    animation?: string;
    onPressed?: MouseEventHandler<HTMLAnchorElement>;
    key?: Key;
    className?: string;
}

export default function NavLink({key, className, title, href, animation = 'hover:-translate-y-1 focus:-translate-y-1 active:-translate-y-1', onPressed} : NavLinkProps){
    const mobileEffects = 'focus:text-yellow-300 active:text-yellow-300 focus:scale-125 active:scale-125'
    return <Link key={key} href={href} className={`${className} hover:text-yellow-300 flex justify-center items-center transition ease-in-out ${animation} hover:scale-125 duration-500 md:text-xl ${mobileEffects}`} onClick={onPressed}>{title}</Link>
}