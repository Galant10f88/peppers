import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  wrapper: `rounded-lg border dark:border-transparent bg-[#313339]`,
  nftHeader: `flex items-center justify-between p-4`,
  likesContainer: `flex items-center justify-end space-x-2`,
  heartIcon: `h-5 w-5 text-red-500`,
  likesCount: `text-sm font-semibold text-gray-500`,
  nftImage: `rounded-b-lg object-cover`
}

const NFTImage = () => {
  return (
    <div className = {style.wrapper}>
      <div className = {style.nftHeader}>

        <div className = {style.likesContainer}>
          <AiOutlineHeart className = {style.heartIcon}/>
          
        </div>
      </div>

      <div>
        <img
          src = "https://cdn.shopify.com/s/files/1/0257/4565/3811/products/061422_T118630_202040_Bonnie_RedGhostPepper_ALT_02.jpg?v=1656011722&width=250"
          width = {448}
          height = {448}
          alt = "nft"
        />
      </div>
    </div>
  )
}

export default NFTImage