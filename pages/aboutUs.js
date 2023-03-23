import React from 'react'
import Link from 'next/link'
import Products from '../components/products'

const style = {
    wrapper: 'relative',
    container: 'before:content-[""] before:bg-black before:fixed before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Maler_der_Grabkammer_des_Sennudem_001.jpg/500px-Maler_der_Grabkammer_des_Sennudem_001.jpg")] before:bg-cover before:bg:-center before:opacity-60',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-fit bg-transparent backdrop-blur-xl rounded-lg px-2 mr-10',
    title: 'relative text-white text-[46px] font-semibold',
    description: 'text-white container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]',
    ctaContainer: 'flex',
    accentedButton: 'relative text-lg font-semibold px-12 py-4 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 hover:from-green-200 hover:via-green-400 hover:to-purple-700 rounded-full mr-5 text-black border border-black hover:border-white cursor-pointer',
    gameButton: 'relative text-lg font-semibold px-10 py-4 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 hover:from-green-200 hover:via-green-400 hover:to-purple-700 rounded-full mr-5 text-black border border-black hover:border-white cursor-pointer',
    button: 'relative text-lg animate-bounce font-semibold px-14 py-4 rounded-full mr-5 text-cyan-300 hover:text-black bg-gradient-to-br from-black to-black hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500 border border-cyan-300 hover:border-white cursor-pointer',
    cardContainer: 'rounded-lg hover:bg-green-600 transition ease-in-out duration-700 cursor-pointer',
    infoContainer: 'h-20 p-4 rounded-b-lg flex items-center text-white backdrop-blur-xl',
    author: 'flex flex-col justify-center ml-4',
    infoIcon: 'flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold',
    hot: `text-red-500 font-bold`,
    rocket: 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-lime-500 to-green-300 font-bold text-[46px]'
}

const AboutUs = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            About our Farming
                        </div>
                        <div className={style.description}>
                            We use a farming technique dating back 10,000 years. First used for peppers in South America.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs