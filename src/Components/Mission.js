import React from 'react'
import Tick from './Tick.svg'
import UserCheck from './UserCheck.svg'
export const Mission = () => {
  return (
    <>
    {/* fluid container */}
    <div className='max-w-[1184px] mx-auto font-Poppins'>
        {/* parent*/}
        <div className='mt-[96px] pb-[96px]'>
        {/* Mission */}
        <div className='text-[#22252B] font-[600] text-[36px] text-center'>Our Mission</div>
        {/* revolution */}
        <div className='revolution mt-[24px] leading-[60px] font-Poppins font-[900] text-[48px] text-[#754BC9] italic text-center'>“To revolutionize business and<br></br>economic growth and broadcast it to<br></br>the world.”</div>
        {/* grid */}
        <div className='grid_mission grid grid-cols-2 gap-[48px] mt-10'>
            {/* left */}
            <div>
                {/* paragraph */}
                <div className='leading-[28px] font-[400] text-[16px] text-[#434956]'>We strive to be much more than just a software, technology, or data company. Yes - each of those are incredibly powerful tools for changing the lives of our local-service small business customers and partners, but they alone aren’t enough to truly innovate on a centuries old industry. To revolutionize on how we help businesses grow and scale, we have to do much more than simply
                     provide technology and know-how. We have to enable our customers with anything and everything they may need to take their businesses to the next level, whether it be technology-based or otherwise.  </div>
            </div>
            {/* right */}
            <div className='mission_right'>
                {/* para one */}
                <div className='leading-[28px] font-[400] text-[16px] text-[#434956]'>From community building, to industry panels, to global events, we take offline learning and bring them online. </div>
                {/* para two */}
                <div className='leading-[28px] mt-[24px] font-[400] text-[16px] text-[#434956]'>Above all, we are committed to putting business growth above all else and are honored to support the hardworking business owners and partners who are driving our economy forward.</div>
            </div>
        </div>
    </div>
    </div>
    {/* container */}
    <div className='flex justify-start flex_resp'>
        {/* parent */}
        <div className='w-[50%]'>
        <div className='left_side bg-[#754BC9] font-Poppins px-[2.6rem] pt-14 flex justify-end'> 
            {/* fluid container */}
            <div className='font-Poppins font-[600] text-[20px] text-[#ffff]'>
                {/* content left */}
                 <div className=''>
                    {/* traits */}
                    <div className='traits font-[600] text-[16px]'>Traits of A players</div>
                    {/* first text + img */}
                    <div className='mt-[24px] flex items-center'>
                        {/* first img */}
                        <div><img src={Tick}></img></div>
                        {/* text */}
                        <div className='ml-[12px]'>You have an unmatched work ethic.</div>
                    </div>
                    {/* second text + img */}
                    <div className='mt-[24px] flex items-center'>
                        {/* first img */}
                        <div><img src={Tick}></img></div>
                        {/* text */}
                        <div className='ml-[12px]'>You have an outstanding approach to<br></br>creative problem solving.</div>
                    </div>
                    {/* third text + img */}
                    <div className='mt-[24px] flex items-center'>
                        {/* first img */}
                        <div><img src={Tick}></img></div>
                        {/* text */}
                        <div className='ml-[12px]'>You’re an exceptional team player.</div>
                    </div>
                    {/* fourth text + img */}
                    <div className='mt-[24px] flex items-center pb-11'>
                        {/* first img */}
                        <div><img src={Tick}></img></div>
                        {/* text */}
                        <div className='ml-[12px]'>You have a burning desire to help change the world.</div>
                    </div>
                 </div>
                 </div>
            </div>
            </div>
        {/* parent */}
        <div className='right_side bg-gradient pl-[3rem] pr-[3rem] pt-14 w-[50%]'>
            {/* content right */}
        <div className='c_right'>
                   {/* img */}
                   <div><img src={UserCheck}></img></div>
                   {/* who */}
                   <div className='mt-[18px] leading-[45px] font-[600] text-[36px] text-[#22252B]'>Who should work at Growthware?</div>
                   {/* small text */}
                   <div className='mt-[18px] font-[400] text-[16px] text-[#434956]'>Be yourself, be an individual, be the best version of yourself.<br></br>Growthware is a team sport, but great ideas and true innovation<br></br>can come from anywhere and anyone. No matter your background<br></br>or role, unlock your mind - our customers are counting on you.</div>
                 </div>
                 </div>
                 </div>
    </>
  )
}
