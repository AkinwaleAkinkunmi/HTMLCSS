import React from 'react'

import Image from 'next/image'
import skate from "../Ciseco images/skatekid.webp"

const SectionFive = () => {
  return (
    <div className="p-[62px] mt-16">
        <div className="bg-yellow-50 rounded-3xl flex">
            <div>
                <Image src={skate} width={0} height={0}/>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default SectionFive
