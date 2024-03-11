import React from 'react'
import G from './G.svg'
import social from './social.svg'

export const Footer = () => {
  return (
    <>
    {/* background */}
    <div className='bg-[#434956] py-[72px] px-[128px] bg_fluid'>
        {/* fluid container */}
        <div className='max-w-[1184px] mx-auto font-Poppins'>
         {/* flex */}
         <div className='f_footer flex justify-between'>
            {/* box 1 */}
            <div className='cap_G'>
                <img src={G}></img>
            </div>
            {/* right */}
            <div className='flex_right flex justify-between'>
            {/* box 2 */}
            <div className='componetns ml-[48px] mr-[95px]'>
                {/* company */}
                <div className='font-[600] text-[16px] text-[#FFFFFF]'>Company</div>
                {/* About Us */}
                <div className='mt-[24px] font-[400] text-[16px] text-[#ffff]'>About Us</div>
                {/* Careers */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Careers</div>
                {/* Partners */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Partners</div>
                {/* Events */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Events</div>
                {/* Press */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Press</div>
            </div>
            {/* box 3 */}
            <div className='componetns mr-[95px]'>
                {/* company */}
                <div className='font-[600] text-[16px] text-[#FFFFFF]'>Platform</div>
                {/* About Us */}
                <div className='mt-[24px] font-[400] text-[16px] text-[#ffff]'>Platform Overview</div>
                {/* Careers */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Calendar & Scheduling</div>
                {/* Partners */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Contacts</div>
                {/* Events */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Sites</div>
                {/* Press */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Growthbooks</div>
                {/* Payments */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Payments</div>
                {/* Listings */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Listings</div>
            </div>
            {/* box 4 */}
            <div className='componetns mr-[100px]'>
                {/* company */}
                <div className='font-[600] text-[16px] text-[#FFFFFF]'>Resources</div>
                {/* About Us */}
                <div className='mt-[24px] font-[400] text-[16px] text-[#ffff]'>Blog</div>
                {/* Careers */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Book a Demo</div>
                {/* Partners */}
                <div className='mt-[12px] font-[400] text-[16px] text-[#ffff]'>Contact Us</div>
            </div>
         </div>
         </div>
         <hr className='hr_last opacity-[10%] mt-[2.6rem] w-[100%] border-b-[#ffff] border-b-solid border-b-[1px]'></hr>
        {/* foot footer */}
        <div className='footer_last flex justify-between mt-[2.5rem]'>
            {/* social */}
            <div className='footer_last_img'><img src={social}></img></div>
            {/* right  */}
            <div className='flex font-[400] text-[16px] text-[#D4D5D9] last_module'>
                <div className='comp'>Terms of use</div>
                <div className='comp ml-[48px]'>Privacy</div>
                <div className='comp ml-[48px]'>Legal</div>
                <div className='comp ml-[48px]'>© Growthware 2023 </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
