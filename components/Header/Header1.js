import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import diamond from '../../assets/pepper.png'

//text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
//bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
//bg-[#04111d]
//bg-opacity-90
//bg-gradient-to-r from-fuchsia-600 to-pink-600
//shadow-cyan-500/50
//bg-gradient-to-r from-red-500 to-green-500
//text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-lime-500 to-green-300

const style = {
    wrapper: 'sticky top-0 z-50 bg-[#04111d] bg-gradient-to-r from-green-500/20 to-red-500/20 bg-opacity-20 w-screen px-[1.2rem] py-4 flex shadow-xl backdrop-blur-lg',
    logoContainer: 'flex items-center cursor-pointer',
    logoText: 'ml-[0.8rem] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-lime-500 to-green-300 font-bold text-3xl',
    searchBar: 'flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]',
    searchIcon: 'text-[#8a939b] mx-3 font-bold text-lg',
    searchInput: 'h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]',
    headerItems: 'flex items-center justify-end w-9/12',
    headerItem: 'flex text-white text-xl px-4 font-bold hover:text-green-500 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    headerSwap: 'text-white px-2 font-bold hover:text-fuchsia-500 border border-transparent hover:border-cyan-300 bg hover:bg-[#04111d] rounded-full shadow-lg hover:shadow-cyan-400/90 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    headerIcon: 'text-slate-400 text-4xl px-4 hover:text-white cursor-pointer',
    cheating: 'text-transparent px-4 font-bold',
    button: `border px-1 border-cyan-300 bg-[#04111d] p-[0.1rem] text-xl font-semibold rounded-lg cursor-pointer text-[#fb4848]`,
    snow: `h-screen w-screen bg-blue-200 relative`
}


const Header1 = () => {
    return <div className={style.wrapper}>
        <Link href="/">
            <div className={style.logoContainer}>
                <Image src={diamond} height={40} width={40} alt='' />
                <div className={style.logoText}>Hot Rockets</div>
            </div>
        </Link>
        <div className={style.headerItems}>
            <Link href='../cart'>
                <div className={style.headerItem}> Cart </div>
            </Link>
            <Link href='../aboutUs'>
                <div className={style.headerItem}> About Us </div>
            </Link>
        </div>
    </div>;
}

export default Header1