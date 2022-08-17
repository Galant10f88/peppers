import React from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../../assets/eth.png'
import Image from 'next/image'
import TopNavbarLayout from '../../layouts/TopNavbarLayout'
import Footer from '../../components/Footer'
import HeadF from '../../components/Head'

const style = {
    title: 'relative flex items-center justify-center text-white text-[40px] font-semibold',
    wrapper: `w-screen flex items-center justify-center mt-14`,
    content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
    currencySelector: `flex w-1/4`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `bg-[#f51111] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#fb4848] hover:border-black`,
    swap: `text-[#fb4848]`,
}

const FyreSwap = () => {
    return (
        <div>
            <HeadF />
            <TopNavbarLayout>
                <div className={style.wrapper}>
                    <div className={style.content}>
                        <div className={style.title}>
                            🔥FyreSwap🔥
                        </div>
                        <div className={style.formHeader}>
                            <div className={style.swap}>Swap</div>
                            <div>
                                <RiSettings3Fill />
                            </div>
                        </div>
                        <div className={style.transferPropContainer}>
                            <input
                                type="text"
                                className={style.transferPropInput}
                                placeholder="0.0"
                                pattern="^[0-9]*[.,]?[0-9]*$"
                                onChange={(e) => handleChange(e, 'amount')}
                            />
                            <div className={style.currencySelector}>
                                <div className={style.currencySelectorContent}>
                                    <div className={style.currencySelectorIcon}>
                                        <Image src={ethLogo} alt="eth logo" height={20} width={20} />
                                    </div>
                                    <div className={style.currencySelectorTicker}>ETH</div>
                                    <AiOutlineDown className={style.currencySelectorArrow} />
                                </div>
                            </div>
                        </div>
                        <div className={style.transferPropContainer}>
                            <input
                                type="text"
                                className={style.transferPropInput}
                                placeholder="0.0"
                                pattern="^[0-9]*[.,]?[0-9]*$"
                                onChange={(e) => handleChange(e, 'amount')}
                            />
                            <div className={style.currencySelector}>
                                <div className={style.currencySelectorContent}>
                                    <div className={style.currencySelectorIcon}>
                                        <Image src={ethLogo} alt="eth logo" height={20} width={20} />
                                    </div>
                                    <div className={style.currencySelectorTicker}>ETH</div>
                                    <AiOutlineDown className={style.currencySelectorArrow} />
                                </div>
                            </div>
                        </div>
                        <div onClick={(e) => handleSubmit(e)} className={style.confirmButton}>
                            Confirm
                        </div>
                    </div>
                </div>
                <Footer />
            </TopNavbarLayout>
        </div>
    )
}

export default FyreSwap