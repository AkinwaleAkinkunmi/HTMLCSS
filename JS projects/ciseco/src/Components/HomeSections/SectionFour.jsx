import React, { useState } from 'react'
import { IoIosMale } from "react-icons/io";
import { IoFemaleOutline } from "react-icons/io5";
import { TbUserHexagon } from "react-icons/tb";
import { TbBarbellFilled } from "react-icons/tb";
import { LuCrown } from "react-icons/lu";
import { IoDiamond } from "react-icons/io5";


const SectionFour = () => {
  const [men, setMen] = useState(true)
  const [women, setWomen] = useState(false)
  const [kid, setKid] = useState(false)
  const [sport, setSport] = useState(false)
  const [beauty, setBeauty] = useState(false)
  const [jewelry, setJewelry] = useState(false)

  const toggleMen = () => {
    setMen(true)
    setWomen(false)
    setKid(false)
    setSport(false)
    setBeauty(false)
    setJewelry(false)
  }

  const toggleWomen = () => {
    setMen(false)
    setWomen(true)
    setKid(false)
    setSport(false)
    setBeauty(false)
    setJewelry(false)
  }

  const toggleKid = () => {
    setMen(false)
    setWomen(false)
    setKid(true)
    setSport(false)
    setBeauty(false)
    setJewelry(false)
  }

  const toggleSport = () => {
    setMen(false)
    setWomen(false)
    setKid(false)
    setSport(true)
    setBeauty(false)
    setJewelry(false)
  }

  const toggleBeauty = () => {
    setMen(false)
    setWomen(false)
    setKid(false)
    setSport(false)
    setBeauty(true)
    setJewelry(false)
  }

  const toggleJewelry = () => {
    setMen(false)
    setWomen(false)
    setKid(false)
    setSport(false)
    setBeauty(false)
    setJewelry(true)
  }

  return (
    <div className='bg-neutral-100 rounded-3xl px-[62px] py-[7rem] mt-16'>
      <div>
        <h2 className='text-slate-900 text-center text-4xl font-bold mb-12'>Start exploring.</h2>
        <ul className='flex bg-white w-fit m-auto rounded-full px-1 cursor-pointer py-1 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
            {men === false ?
            <li className='px-7 py-3 flex gap-2 text-neutral-600 font-base items-center' onClick={toggleMen}><IoIosMale/> Men</li>
            :
            <li className='bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center' onClick={toggleMen}><IoIosMale/> Men</li>
            }
            
            {women === false ?
            <li className='px-7 py-3 flex gap-2 text-neutral-600 font-base items-center' onClick={toggleWomen}><IoFemaleOutline/> Women</li>
            :
            <li className='bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center' onClick={toggleWomen}><IoFemaleOutline/> Women</li>
            }
            
            {kid === false ?
            <li className='px-7 py-3 flex gap-2 text-neutral-600 font-base items-center' onClick={toggleKid}><TbUserHexagon/> Kids</li>
            :
            <li className='bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center' onClick={toggleKid}><TbUserHexagon/> Kids</li>
            }

            {sport === false ?
             <li className='px-7 py-3 flex gap-2 text-neutral-600 font-base items-center' onClick={toggleSport}><TbBarbellFilled/> Sport</li>
             :
             <li className='bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center' onClick={toggleSport}><TbBarbellFilled/> Sport</li>
            }  
            
            {beauty === false ?
            <li className='px-7 py-3 flex gap-2 text-neutral-600 font-base items-center' onClick={toggleBeauty}><LuCrown/> Beauty</li>
            :
            <li className='bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center' onClick={toggleBeauty}><LuCrown/> Beauty</li>
            }

            {jewelry === false ?
            <li className='px-7 py-3 flex gap-2 text-neutral-600 font-base items-center' onClick={toggleJewelry}><IoDiamond/> Jewelry</li>
            :
            <li className='bg-slate-900 px-7 py-3 flex gap-2 text-white rounded-full font-base items-center' onClick={toggleJewelry}><IoDiamond/> Jewelry</li>
            }
            
        </ul>
      </div>
    </div>
  )
}

export default SectionFour
