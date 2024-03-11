import React from 'react'
import Laptop from './Laptop.svg'
import Dumbell from './Dumbbell.svg'
import Bag from './Bag.svg'
import coins from './coins.svg'
import Globe from './Globe.svg'
import Piggy from './piggy.svg'
import tshirt from './tshirt.svg'
import aid from './Aid.svg'
export const Working = () => {
  return (
    <>
    {/* parent */}
    <div className='mt-[96px]'>
    {/* perk + working */}
    <div className='font-Poppins  text-center'>
        {/* perk */}
        <div className='font-[600] text-[16px] text-[#754BC9]'>Perks</div>
        {/* working */}
        <div className='mt-[5px] font-[600] text-[36px] text-[#22252B]'>Working with us</div>
    </div>
    </div>
    {/* centering the grid */}
    <div className='c_grid flex justify-center mt-16 pb-48'>
    {/* grid */}
    <div className='working_grid grid grid-cols-4 font-Poppins gap-[40px]'>
        {/* col 1 */}
        <div>
            {/* child parent one */}
            <div className=' px-[12px] pb-6 shadow_all rounded-[24px] items-center'>
                {/* img */}
               <div className='flex justify-center'><img src={Laptop}></img></div>
                {/* text */}
                <div className='mt-[12px] text-center font-[600] text-[16px] text-[#22252B]'>16” Macbook<br></br>Pro</div>
            </div>
            {/* child parent two */}
            <div className='shadow_all p-[12px] rounded-[24px] mt-[48px]'>
                {/* img */}
               <div className='flex justify-center'><img src={Dumbell}></img></div>
                {/* text */}
                <div className='mt-[12px] pb-1 text-center font-[600] text-[16px] text-[#22252B]'>Classpass<br></br>Membership</div>
            </div>
        </div>
        {/* col 2 */}
        <div className='items-center'>
            {/* child parent three */}
            <div className='shadow_all p-[12px] rounded-[24px] pb-[2.34rem]'>
                {/* img */}
               <div className='flex justify-center'><img src={Globe}></img></div>
                {/* text */}
                <div className='mt-[12px] text-center font-[600] text-[16px] text-[#22252B]'>Remote HQ</div>
            </div>
            {/* child parent four */}
            <div className='shadow_all p-[12px] rounded-[24px] mt-[48px]'>
                {/* img */}
               <div className='flex justify-center'><img src={Bag}></img></div>
                {/* text */}
                <div className='mt-[12px] text-center font-[600] text-[16px] text-[#22252B] pb-[2.1rem]'>Flexible PTO</div>
            </div>
        </div>
        {/* col 3 */}
        <div className='items-center'>
            {/* child parent five */}
            <div className='shadow_all p-[12px] rounded-[24px]'>
                {/* img */}
               <div className='flex justify-center'><img src={aid}></img></div>
                {/* text */}
                <div className='mt-[12px] text-center font-[600] text-[16px] text-[#22252B] pb-[2px]'>Health<br></br>Insurance</div>
            </div>
            {/* child parent six */}
            <div className='shadow_all p-[12px] pb-[13px] rounded-[24px] mt-[48px]'>
                {/* img */}
               <div className='flex justify-center'><img src={tshirt}></img></div>
                {/* text */}
                <div className='mt-[12px] text-center font-[600] text-[16px] text-[#22252B] pb-2'>Growthware<br></br>swag</div>
            </div>
        </div>
        {/* col 4 */}
        <div className='items-center'>
            {/* child parent seven */}
            <div className='shadow_all p-[12px] rounded-[24px] '>
                {/* img */}
               <div className='flex justify-center'><img src={coins}></img></div>
                {/* text */}
                <div className='mt-[12px] text-center font-[600] text-[16px] text-[#22252B] pb-6'>401k Match</div>
            </div>
            {/* child parent eight */}
            <div className=' shadow_all p-[12px] pb-[15px] rounded-[24px] mt-[48px]'>
                {/* img */}
               <div className='flex justify-center'><img src={Piggy}></img></div>
                {/* text */}
                <div className = 'pb-6 mt-[12px] text-center font-[600] text-[16px] text-[#22252B]'>Stock Options</div>
            </div>
        </div>
        </div>
        </div>
    </>
  )
}
