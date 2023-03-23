import Image from 'next/image'
import React from 'react'

const style = {
    wrapper: 'relative',
    container: '',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    cele: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-fuchsia-500 font-bold text-6xl',
    grid: 'flex h-[50vh] grid grid-cols-4 gap-20 w-full p-10 ml-4',
    carWrap: 'relative flex h-[300px] w-[200px] cursor-pointer flex-col rounded-lg bg-transparent backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-rose-400 hover:-translate-y-1 hover:scale-110 duration-300',
    card: 'h-9/10 overflow-hidden rounded-lg',
    lowCard: 'flex h-1/4 flex-col justify-between p-4',
    discount: 'text-gray-200 line-through'
}


const Products = () => {
    return (
        <div className={style.wrapper}>
        
        <div className={style.grid}> 
                                <div className={style.carWrap}>
                                  <div className={style.card}>
                                    <img src='https://cdn.shopify.com/s/files/1/0871/0950/products/CarolinaReaperpepperpic2020.jpg?v=1643732657' className="card-img-top" style={{ width: "100%", height: 200, objectFit: "contain" }} />
                                    <div className={style.lowCard}>
                                        <h5 className="card-title">Carolina Reaper</h5>
                                        <p className="card-text"><span className={style.discount}>$24.99</span>  $19.95</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.carWrap}>
                                  <div className={style.card}>
                                    <img src='https://cdn.shopify.com/s/files/1/0871/0950/products/TrinidadMorugapic.jpg?v=1643733638' className="card-img-top" style={{ width: "100%", height: 200, objectFit: "contain" }} />
                                    <div className={style.lowCard}>
                                        <h5 className="card-title">Trinidad Scorpion</h5>
                                        <p className="card-text"><span className={style.discount}>$26.99</span>  $12.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.carWrap}>
                                  <div className={style.card}>
                                    <img src='https://www.cayennediane.com/wp-content/uploads/2015/05/Naga_Viper_Pepper-2-300x300.webp' className="card-img-top" style={{ width: "100%", height: 200, objectFit: "contain" }} />
                                    <div className={style.lowCard}>
                                        <h5 className="card-title">Naga Viper</h5>
                                        <p className="card-text">$17.99</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.carWrap}>
                                  <div className={style.card}>
                                    <img src='https://i5.walmartimages.com/asr/540e857c-d063-4ad1-96a4-553c237171b3.080e0d33d92e26a5822927761234c7f1.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' className="card-img-top" style={{ width: "100%", height: 200, objectFit: "contain" }} />
                                    <div className={style.lowCard}>
                                        <h5 className="card-title">Jalapeno</h5>
                                        <p className="card-text">$267</p>
                                    </div>
                                </div>
                            </div>
                    </div>

      </div>
    )
}

export default Products