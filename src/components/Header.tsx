"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

const pages = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About Us",
        path: "/about"
    },
    {
        name: "Speaker",
        path: "/speaker"
    },
    {
        name: "Program Committee",
        path: "/committee"
    },
    {
        name: "Call For Papers",
        path: "/papers"
    },
    {
        name: "Important Dates",
        path: "/dates"
    },
    {
        name: "Submission",
        path: "/submissions"
    },
    {
        name: "Registration",
        path: "/registrations"
    },
    {
        name: "Contact",
        path: "/contact"
    },
]

export const Header = () => {

    const pathName = usePathname()

    return (
        <header className="w-full h-[14vh] sticky z-50 bg-white top-0 left-0 flex items-center justify-between pl-[2vw] pr-[2vw] border-b-[2px]">
            <div className="flex items-center justify-start gap-8 animate-animate-appear">
                <Image src={'/images/logo.jpeg'} width={90} height={20} alt="" />
                <Image src={'/images/iem-logo.png'} width={100} height={20} alt="" />
                <Image src={'/images/uem-logo.png'} width={100} height={20} alt="" />
            </div>
            <nav className="w-full h-full flex items-center animate-animate-appear justify-end gap-8 text-[1rem] font-[600] text-gray-600">
                {pages.map(page => (<div key={page.name} className={`hover:text-purple-600 transition-colors cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 ${pathName === page.path ? 'after:w-full text-purple-600' : 'after:w-0'} after:h-[3px] after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300 after:rounded-full`}>
                    {page.name}
                </div>))}
            </nav>
        </header>
    )

}