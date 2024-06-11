import { motion } from "framer-motion";
import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface NavLinkProps {
    title: ReactNode;
    href: string;
    animation?: string;
    onPressed?: MouseEventHandler<HTMLAnchorElement>;
    className?: string;
    y?: number;
    delay?: number;
}

export default function NavLink({className, title, href, animation = 'hover:-translate-y-1 focus:-translate-y-1 active:-translate-y-1', onPressed, y = 0, delay = 0} : NavLinkProps){
    const mobileEffects = 'focus:text-yellow-300 active:text-yellow-300 focus:scale-125 active:scale-125'
    return (
        <>
            {y === 0 && delay === 0 ? (
                <Link 
                    href={href} 
                    className={`${className} hover:text-yellow-300 flex justify-center items-center transition ease-in-out ${animation} hover:scale-125 duration-500 md:text-xl ${mobileEffects}`} 
                    onClick={onPressed}
                >
                    {title}
                </Link>
            ) : (
                <motion.div
                    initial={{ y: y, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.5, delay: delay }}
                >
                    <Link 
                        href={href} 
                        className={`${className} hover:text-yellow-300 flex justify-center items-center transition ease-in-out ${animation} hover:scale-125 duration-500 md:text-xl ${mobileEffects}`} 
                        onClick={onPressed}
                    >
                        {title}
                    </Link>
                </motion.div>
            )}
        </>
    )
}