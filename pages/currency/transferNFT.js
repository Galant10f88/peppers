import React from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../../assets/eth.png'
import Image from 'next/image'
import Link from 'next/link'
import { ThirdwebSDK } from "@thirdweb-dev/sdk"

const style = {
    title: 'relative flex items-center justify-center text-white text-[40px] font-semibold',
    wrapper: `w-screen flex items-center justify-center mt-14`,
    content: `bg-gradient-to-b from-gray-900 to-gray-600 w-[40rem] rounded-2xl p-4 border border-cyan-300`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-neutral-900 my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-gray-400  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl text-white`,
    currencySelector: `flex w-1/4`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `bg-cyan-500 my-2 rounded-2xl py-5 px-8 text-2xl font-semibold flex items-center justify-center cursor-pointer border border-black hover:border-white`,
    swap: `text-cyan-300`,
    switch1: `relative text-lg font-semibold px-10 py-1 bg-black rounded-lg mr-5 text-cyan-300 hover:bg-black hover:text-cyan-300 border border-cyan-300 hover:border-cyan-300 shadow-lg hover:shadow-cyan-500/60 cursor-pointer`,
    switch2: `relative text-lg font-semibold px-8 py-1 bg-black rounded-lg mr-5 text-cyan-300 hover:bg-black hover:text-fuchsia-400 border border-black hover:border-fuchsia-400 shadow-lg hover:shadow-fuchsia-500/70 cursor-pointer`
}

const Wallet = () => {
    return (
        <div>
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.title}>
                    Wallet
                </div>
                <div>
                    <br/>
                </div>
                <div className={style.formHeader}>
                    <div className={style.swap}>Transfer</div>
                    <Link href='../../currency/wallet'>
                        <button className={style.switch2}>Crypto</button>
                    </Link>
                    <button className={style.switch1}>NFTs</button>
                    <div>
                        <RiSettings3Fill />
                    </div>
                </div>
                <div className={style.transferPropContainer}>
                    <input
                        type="text"
                        className={style.transferPropInput}
                        placeholder="NFT Token Id"
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        onChange={(e) => handleChange(e, 'amount')}
                    />
                </div>
                <div className={style.transferPropContainer}>
                    <input
                        type="text"
                        className={style.transferPropInput}
                        placeholder="To Address 0x ..."
                        onChange={(e) => handleChange(e, 'addressTo')}
                    />
                    <div className={style.currencySelector}></div>
                </div>
                <div onClick={(e) => handleSubmit(e)} className={style.confirmButton}>
                    Confirm
                </div>
            </div>
        </div>
        <div> <br/> </div>
        </div>
    )
}

export default Wallet