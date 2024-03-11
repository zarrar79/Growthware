import React from 'react'
import Growthware from './Growthware.svg'
import Drop from './Drop.svg'
import Girl from './Girl.svg'
import Rocket from './Rocket.svg'
export const Hero = () => {
    const display = () => {
        const menuElements = document.getElementsByClassName('menuNew');

  // Loop through each element with the 'menuNew' class and toggle its display style
  for (let i = 0; i < menuElements.length; i++) {
    if (menuElements[i].style.display === "block") {
      menuElements[i].style.display = "none";
    } else {
      menuElements[i].style.display = "block";
    }
  }
    }
  return (
   <>
   <div className='background pb-[27px]'>
   {/* fluid container */}
   <div className='max-w-[1184px] mx-auto'>
    {/* flex container */}
    <div className="flex justify-between font-Poppins items-center mt-[48px]">
      {/* image */}
      <div className='growth cursor-pointer'><img src={Growthware}></img></div>
      {/* middle */}
      <div className='font-[400] text-[16px] text-[#22252B] flex items-center middle'>
        {/* home */}
        <div className='cursor-pointer'>Home</div>
        {/* company */}
        <div className='flex items-center ml-[30px] cursor-pointer'>
            {/* comp */}
            <div>Company</div>
            {/* icon */}
            <div className='ml-[2.5px]'><img src={Drop}></img></div>
        </div>
        {/* platform */}
        <div className='flex items-center ml-[30px] cursor-pointer'>
            {/* platform */}
            <div>Platform</div>
            {/* icon */}
            <div className='ml-[2.5px]'><img src={Drop}></img></div>
        </div>
        {/* resources */}
        <div className='flex items-center ml-[30px] cursor-pointer'>
            {/* text */}
            <div>Resources</div>
            {/* icon */}
            <div className=' ml-[2.5px]'><img src={Drop}></img></div>
        </div>
      </div>
      {/* right */}
      <div className='flex items-center ml-[30px]'>
        {/* hamb div */}
        <div>
        {/* Hamburger */}
        <div className='font-Poppins' id="menuToggle" onClick={display}>
                               
                                <input type="checkbox" />

                                               <span></span>
                                <span></span>
                                <span></span>

                             

                                <ul id="menu">
                                    <a href="#"><li>Home</li></a>
                                    <a href="#"><li>About</li></a>
                                    <a href="#"><li>Info</li></a>
                                    <a href="#"><li>Contact</li></a>
                                    <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                                </ul>
                            </div>
                            <div className='menuNew bg-[#041123] custom-shadow space-y-5 p-6 rounded absolute top-16 right-11 hidden'>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Login</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Create Account</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Home</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Company</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Background</div>
                            <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Resources</div>
                            </div>
                            </div>
        {/* login */}
        <div className='right font-Poppins font-semibold text-[14px] cursor-pointer'>Log in</div>
        {/* create account */}
        <div className='right ml-[36px]'><button className='px-[18px] py-[15px] rounded-[48px] bg-[#754BC9] text-[#ffff] font-[600] text-[14px]'>Create Account</button></div>
      </div>
    </div>
    {/* grid */}
    <div className='grid_responsive grid grid-cols-2 mx-auto font-Poppins mt-[6rem] pb-[5.2rem] background_hero'>
        {/* left */}
        <div>
         {/* big text */}
         <div className='leading-[80px] font-[600] text-[64px] text-[#22252B] large_text'>Become a part <br></br>of the growth revolution</div>
         {/* small */}
         <div className='small_text leading-[42px] text-[24px] mt-[48px] font-[300] italic text-[#754BC9]'>A workplace of innovative thinkers who share<br></br>a passion for unlocking the secrets of<br></br>business growth. We want to unlock the true<br></br>you.</div>
        {/* Apply now */}
        <div className='mt-[48px]'>
            <button className='text-[#ffff] bg-[#22252B] font-[600] text-[16px] rounded-[48px] px-[24px] py-[18px]'>
                {/* text + img */}
                <div className='flex items-center'>
                    {/* text */}
                    <div>Apply Now</div>
                    {/* img */}
                    <div className='ml-[12px]'>
                        <img src={Rocket}></img>
                    </div>
                </div>
                
            </button>
        </div>
        </div>
        {/* right */}
        <div className='left_image mr-[-13px] top-56'>
            <img src={Girl}></img>
        </div>
    </div>

   </div>
   </div>
   </> 
  );
}
