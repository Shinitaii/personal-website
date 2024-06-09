import Link from "next/link";

interface NavLinkProps {
    title: string;
    href: string
}

export default function NavLink({title, href} : NavLinkProps){
    return <Link href={href} className="text-white hover:text-gray-500 transition ease-in-out 2s flex justify-center items-center">{title}</Link>
}