import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";



const SocialLink = () => {
    const sLinks = [
        {
            id: 1,
            child: (
                <>Linkedin <FaLinkedin size={30} /></>
            ),
            href: "https://www.linkedin.com/in/don-amicable-aa0945239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            // sytle: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>GitHub < FaGithub size={30} /></>
            ),
            href: "https://github.com/DonAmicable",
            // sytle: "rounded-tr-md"
        },
        {
            id: 3,
            child: (
                <>Instagram <FaInstagram size={30} /></>
            ),
            href: "https://www.linkedin.com/in/don-amicable-aa0945239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            // sytle: "rounded-tr-md"
        },
        {
            id: 4,
            child: (
                <>Twitter <RiTwitterXFill size={30} /> </>
            ),
            href: "https://x.com/donamicabledev?s=11",
            // sytle: "rounded-tr-md"
        },
        {
            id: 5,
            child: (
                <>WhatsApp <FaWhatsappSquare size={30} /></>
            ),
            href: "https://wa.me/c/2349013230019",
            // sytle: "rounded-tr-md"
        },
    ];



    return (
        <div>

            <div className=' lg:flex  flex-col  top-[710%] left-0 absolute lg:top-[38%] md:fixed z-20  '>
                <ul>
                    {sLinks.map(({ id, child, href, style }) => (
                        <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-[#150F26] hover:ml-[-10px] hover:rounded-md duration-300' + "" + style}><a href={href} className='flex justify-between items-center w-full  text-white'> {child} </a></li>

                    ))}

                </ul>
            </div>
        </div>
    )
}

export default SocialLink