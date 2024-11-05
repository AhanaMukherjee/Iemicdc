"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

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
        name: "Committee",
        path: "/committee"
    },
    {
        name: "Call For Papers",
        path: "/papers"
    },
    // {
    //     name: "Important Dates",
    //     path: "/dates"
    // },
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

    const [menu, setMenu] = useState(false)
    const pathName = usePathname()
    const router = useRouter()

    useEffect(() => {
        setMenu(false)
    }, [pathName])

    return (
        <header className="w-full md:h-[14vh] h-[10vh] sticky z-50 bg-white top-0 left-0 flex items-center justify-between md:pl-[2vw] md:pr-[2vw] border-b-[2px]">
            <div className="flex items-center justify-start gap-8 animate-animate-appear">
                <Image src={'/images/logo.jpeg'} width={90} height={20} alt="" className=" cursor-pointer md:h-auto h-[10vh] object-fit" onClick={() => router.push("/")} />
                <Image src={'/images/iem-logo.png'} width={100} height={20} alt="" className=" cursor-pointer hidden md:block" onClick={() => window.open("https://iem.edu.in/", "__blank")}/>
                <Image src={'/images/uem-logo.png'} width={100} height={20} alt="" className=" cursor-pointer hidden md:block" onClick={() => window.open("https://uem.edu.in/uem-kolkata/", "__blank")} />
                {/* <h1 className="w-full text-4xl">IEMICDC 2025</h1> */}
            </div>
            {/* <h1 className="text-xl md:hidden ">IEM-ICDC 2025</h1> */}
            <Menu className="md:hidden mr-3 cursor-pointer" onClick={() => setMenu((prev) => !prev)} />
            <nav className={`w-full ${menu ? 'h-[100vh] pt-6' : 'h-0 p-0'} transition-all duration-300 flex md:flex-row flex-col bg-white backdrop-blur-md md:static absolute bg-opacity-80 top-[10vh] left-0 items-center animate-animate-appear md:justify-end justify-start md:pt-0 gap-8 text-[1rem] font-[600] text-gray-600`}>
                {pages.map(page => (<div
                key={page.name}
                onClick={() => router.push(page.path)}
                className={`hover:text-primary transition-colors cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 ${pathName === page.path ? 'after:w-full text-primary' : 'after:w-0'} after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:rounded-full`}>
                    {page.name}
                </div>))}
            </nav>
        </header>
    )

}