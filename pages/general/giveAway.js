import React from 'react'

const style = {
    wrapper: 'relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    title: 'relative text-white text-[46px] font-semibold',
    description: 'text-white container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]',
    copyContainer: 'w-1/2',
    fyre: `text-cyan-400 font-semibold`
}

const GiveAway = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                        GiveAway Scavenger hunt!
                    </div>
                    <div className={style.description}>
                        There is a hidden button on the header. If you can find it you will recieve a free NFT from the <span className={style.fyre}>CRYPTABLE</span> collection!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiveAway