import React from 'react'
import Link from 'next/link'
import Products from '../components/products'

const style = {
    wrapper: 'relative',
    container: 'before:content-[""] before:bg-black before:fixed before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://cdn.wikifarmer.com/wp-content/uploads/2020/03/Growing-Peppers-for-Profit-%E2%80%93-Pepper-and-Chilies-Farming.jpg")] before:bg-cover before:bg:-center before:opacity-60',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-1/4 bg-transparent backdrop-blur-xl rounded-lg px-2 mr-10 pb-14',
    title: 'relative text-white text-[46px] font-semibold',
    description: 'text-white container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]',
    ctaContainer: 'flex',
    button: 'flex relative w-1/2 text-lg font-semibold px-8 py-2 rounded-full text-cyan-300 hover:text-black bg-gradient-to-br from-gray-400 to-black hover:from-red-500 hover:via-green-500 hover:to-red-500 border border-cyan-300 hover:border-white cursor-pointer',
    cardContainer: 'rounded-lg hover:bg-green-600 transition ease-in-out duration-700 cursor-pointer',
    infoContainer: 'h-20 p-4 rounded-b-lg flex items-center text-white backdrop-blur-xl',
    author: 'flex flex-col justify-center ml-4',
    infoIcon: 'flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold',
    hot: `text-red-500 font-bold`,
    rocket: 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-lime-500 to-green-300 font-bold text-[46px]'
}

const Cart = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Cart
                        </div>
                        <div className={style.description}>
                        <ul className="list-disc ml-8">
                            <li>Pepper 1</li>
                            <li>Pepper 2</li>
                            <li>Pepper 3</li>
                        </ul>
                        </div>
                        <div className={style.button}>Purchase</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart