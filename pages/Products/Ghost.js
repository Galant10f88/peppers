import NFTImage from '../../components/NFTDetails/NFTImage'
import NFTSalesInfo from '../../components/NFTDetails/NFTSalesInfo'
import NFTDetails from '../../components/NFTDetails/NFTDetails'
import NFTBasicInfo from '../../components/NFTDetails/NFTBasicInfo'

const style = {
  wrapper: `h-[130vh] mx-auto flex max-w-2xl flex-col space-y-4 py-4 bg:-[#202226] lg:max-w-none lg:py-8 lg:px-24`,
  nftContainer: `flex flex-col lg:flex-row lg:space-x-4`,
  leftContainer: `flex flex-col space-y-4`,
  leftElement: `hidden lg:block`,
  rightContainer: `flex flex-1 flex-col space-y-4`,
  buyoutContainer: `flex-1`,
  loading: `text-white text-xl`
}

const Ghost = () => {

  return (
    <div className={style.wrapper}>
        <div className={style.nftContainer}>
          <div className={style.leftContainer}>
            <div className={style.leftElement}>
              <NFTImage />
            </div>

            <div className={style.leftElement}>
              <NFTDetails />
            </div>
          </div>

          <div className={style.rightContainer}>
            <NFTBasicInfo />

            <div className={style.buyoutContainer}>
              <NFTSalesInfo />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Ghost