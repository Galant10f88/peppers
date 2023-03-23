import Image from 'next/image'
import React from 'react'

const style = {
    wrapper: 'relative',
    footer: `relative flex h-24 w-full items-center justify-center border-t text-cyan-300 backdrop-blur`
}


const Footer = () => {
    return (
        <div className={style.footer}>
        <a
          className="flex items-center justify-center gap-2"
          href="https://updatefaker.com/xp/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/pepper.png" alt="dna Logo" width={24} height={24} />
          Hot Rockets
        </a>
      </div>
    )
}

export default Footer

//<footer className="flex h-24 w-full items-center justify-center border-t text-[#fb4848]">