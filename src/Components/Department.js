import React from 'react'
import Down from './Down.svg'
import Search from './Search.svg'
import Forward from './Forward.svg'
export const Department = () => {
    return (
        <>
            {/* fluid container */}
            <div className='max-w-[978px] mx-auto font-Poppins pb-[96px]'>
                {/* flex */}
                <div className='menu_flex flex justify-between'>
                    {/* left */}
                    <div className='flex left_flex'>
                        {/* select relative */}
                        <div className='dep_pos relative'>
                        <select className=' cursor-pointer font-[500] text-[16px] text-[#434956] rounded-[6px] w-[240px] border-[1px] border-solid border-[#D4D5D9] py-[8px] pl-[16px]'>
                            <option value="Department">Department</option>
                            <option value="saab">Full Stack Engineer</option>
                            <option value="mercedes">Director of Sales</option>
                        </select> 
                        {/* img */}
                        <div className='absolute top-4 right-[18px]'><img src={Down}></img></div>
                        </div>
                        {/* select relative */}
                        <div className='relative dep_pos pos_par'>
                        <select className='pos ml-[24px] cursor-pointer font-[500] text-[16px] text-[#434956] rounded-[6px] w-[240px] border-[1px] border-solid border-[#D4D5D9] py-[8px] pl-[16px]'>
                            <option value="volvo">Position</option>
                            <option value="saab">Engineering</option>
                            <option value="mercedes">Sales</option>
                        </select> 
                        {/* img */}
                        <div className='absolute top-4 right-[18px]'><img src={Down}></img></div>
                        </div>
                    </div>
                    {/* right */}
                        {/* box 2 */}
                        {/* div for abs */}
                        <div className='search_1 dep_pos relative'>
                            <input className='search ml-[24px] font-[400] text-[16px] text-[#8D95A5] rounded-[48px]  w-[240px] border-[1px] border-solid border-[#D4D5D9] py-[8px] pr-[16px] pl-[3.2rem] ' type='text' placeholder='Search' ></input>
                            <div className='search_resp top-2 left-10 absolute'><img src={Search}></img></div>
                        </div>
                </div>
                <hr className='hr border-b-[1px] border-solid border-[#D4D5D9] mt-[24px] w-[978px]'></hr>
                {/* full stack */}
                <div className='stack_marketing mt-[48px] pl-[24px] border-l-[2px] border-solid border-[#754BC9]'>
                    {/* full stack head */}
                    <div className='font-[600] text-[24px] text-[#22252B]'>Full Stack Software Engineer</div>
                    {/* items flex */}
                    <div className='flex'>
                        {/* engineering */}
                        <div className='pr-[12px] border-r-[#D4D5D9] border-r-[1px] border-solid'>Engineering</div>
                        {/* principal */}
                        <div className='px-[12px] border-r-[#D4D5D9] border-r-[1px] border-solid'>Principal L6</div>
                        {/* Remote */}
                        <div className=' pl-[12px]'>Remote</div>
                    </div>
                    {/* responsible */}
                    <div className='font-[400] text-[16px] text-[#434956] mt-[12px]'>Responsible for designing, developing, and deploying software applications across the full stack of web technologies...</div>
                    {/* learn more */}
                    <button className='mt-[12px]'>
                        {/* learn + img */}
                        <div className='flex items-center'>
                            {/* learn more */}
                            <div className='font-[600] text-[16px] text-[#754BC9]'>Learn More</div>
                            {/* img */}
                            <div className='ml-[12px]'><img src={Forward}></img></div>
                        </div>
                    </button>
                </div>
                {/* product marketing */}
                <div className='stack_marketing mt-[48px] pl-[24px] border-l-[2px] border-solid border-[#754BC9]'>
                    {/* product */}
                    <div className='font-[600] text-[24px] text-[#22252B]'>Product Marketing Manager</div>
                    {/* items flex */}
                    <div className='flex'>
                        {/* Marketing */}
                        <div className='pr-[12px] border-r-[#D4D5D9] border-r-[1px] border-solid'>Marketing</div>
                        {/* Marketing Manager */}
                        <div className='px-[12px] border-r-[#D4D5D9] border-r-[1px] border-solid'>Marketing Manager</div>
                        {/* Dallas, TX */}
                        <div className=' pl-[12px]'>Dallas, TX</div>
                    </div>
                    {/* conducting */}
                    <div className='font-[400] text-[16px] text-[#434956] mt-[12px]'>Responsible for developing marketing plans and strategies for specific products or product lines,including conducting...</div>
                    {/* learn more */}
                    <button className='mt-[12px]'>
                        {/* learn + img */}
                        <div className='flex items-center'>
                            {/* learn more */}
                            <div className='font-[600] text-[16px] text-[#754BC9]'>Learn More</div>
                            {/* img */}
                            <div className='ml-[12px]'><img src={Forward}></img></div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}
