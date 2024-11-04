"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image';

function Carousel({ ...props }) {
    
    let counter = useRef(0);

    useEffect(() => {
        const slider: any = document.getElementById('slider')
        const bar = document.getElementById('bar')

        const interval = setInterval(() => {
            // console.log(counter)
            if (slider) {
                if (counter.current === 2) {
                    counter.current = 0;
                    slider?.childNodes?.forEach((node: any) => node.classList.replace('opacity-0', 'opacity-100'))
                } else {
                    slider?.childNodes[3 - counter.current - 1]?.classList.replace('opacity-100', 'opacity-0');
                    counter.current+=1;
                }
                bar?.childNodes?.forEach((node: any, index) => {
                    if (index === counter.current) {
                        node.classList.add('bg-black')
                        node.classList.add('scale-125')
                    }
                    else {
                        node.classList.remove('bg-black')
                        node.classList.remove('scale-125')
                    }
                })
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [])

    return (
        <>

            <div {...props} className='w-[100vw] h-[86vh] animate-animate-appear cursor-pointer relative overflow-hidden m-auto'>
                <div className='w-full h-full absolute top-0 left-0 transition duration-500 scroll-smooth opacity-100' id='slider'>
                    <Image src="/images/img1.jpg" fill={true} alt='' className='absolute left-0 top-0 w-full md:h-full h-[90%] transition-opacity duration-500 opacity-100  md:object-cover object-cover' />
                    <Image src="/images/img2.jpg" fill={true} alt='' className='absolute transition-opacity duration-500 opacity-100 left-0 top-0 w-full md:h-full md:object-cover h-[90%]' />
                    <Image src="/images/img3.jpeg" fill={true} alt='' className='absolute transition-opacity duration-500 opacity-100 left-0 top-0 w-full md:h-full h-[90%] md:object-cover' onLoad={(e) => e.currentTarget.parentElement?.classList.replace('opacity-0', 'opacity-100')} />

                    <div id='bar' className='absolute flex items-center shadow-xl border-[1px] border-white justify-center gap-2 rounded-md bg-white opacity-60 px-2 md:bottom-10 bottom-56 left-[50%] translate-x-[-50%] p-1'>
                        <div className='rounded-full size-2 border-[1px] border-black bg-black scale-125'></div>
                        <div className='rounded-full size-2 border-[1px] border-black'></div>
                        <div className='rounded-full size-2 border-[1px] border-black'></div>
                    </div>
                    <div className='w-full h-full bg-black absolute z-40 bg-opacity-60 flex flex-col items-center justify-center gap-2 text-white'>
                        <p className='text-xl text-center justify-self-start my-0 text-gray-300'>Organized by Department of Information Technology Department of Computer Science & Engineering <br /> Institute of Engineering & Management, Kolkata, India</p>
                        <h1 className='text-[5rem] font-bold'><span className='text-purple-400'>I</span>EM-<span className='text-purple-400'>I</span>CDC 2025</h1>
                        <p className='text-3xl text-center text-gray-200'>3rd International Conference on <br />Computational Intelligence, Data Science and Cloud Computing</p>
                        <h3 className='text-xl text-gray-300'>April 11-12, 2025</h3>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Carousel;