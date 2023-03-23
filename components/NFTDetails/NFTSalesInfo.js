import { BsCreditCard2FrontFill, BsFillTagFill } from 'react-icons/bs'
import {AiOutlineQuestionCircle, AiOutlineClockCircle } from 'react-icons/ai'
import Image from 'next/image'

const style = {
  wrapper: `flex flex-col divide-y border divide-black rounded-lg border-black`,
  header: `flex items-center justify-between rounded-t-lg px-6 py-4 bg-[#262a30]`,
  headerContent: `flex items-center space-x-2`,
  headerIcon: `h-6 w-6`,
  greyText: `text-gray-400`,
  mainContainer: `space-y-4 rounded-b-lg px-6 py-4 bg-[#313339]`,
  priceInfoContainer: `space-y-1`,
  mediumFont: `font-medium`,
  priceContainer: `flex items-center space-x-2`,
  price: `text-3xl font-bold text-green-500`,
  buttonsContainer: `flex space-x-4`,
  button: `flex w-[14rem] items-center cursor-pointer justify-center space-x-4 rounded-lg py-2 text-white`,
  purchaseButton: `bg-blue-500 hover:bg-green-500`,
  offerButton: `border border-black bg-[#363840]`,
  buttonIcon: 'h-6 w-6'
}

const NFTSalesInfo = ({price, buyNFT}) => {
  return(
    <div className = {style.wrapper}>
      <div className = {style.header}>
        <div className = {style.headerContent}>
          <AiOutlineClockCircle className = {`${style.greyText} ${style.headerIcon}`} />
        </div>
        <AiOutlineQuestionCircle className = {style.headerIcon} />
      </div>

      <div className = {style.mainContainer}>
        <div className = {style.priceInfoContainer}>
          <div className = {style.priceContainer}>
            <span className = {style.price}>$25</span>
          </div>
        </div>

        <div className = {style.buttonContainer}>
          <div 
            className = {`${style.button} ${style.purchaseButton}`}
            onClick = {buyNFT}
          >
            <BsCreditCard2FrontFill className = {style.buttonIcon} />
            <span className = 'text-lg font-semibold'>Buy Now</span>
          </div>
        </div>
        <div className = {style.buttonContainer}>
          <div className = {`${style.button} ${style.offerButton}`}>
            <BsFillTagFill className = {style.buttonIcon} />
            <span className = 'text-lg font-semibold'>Add to cart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTSalesInfo