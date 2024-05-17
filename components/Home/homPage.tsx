'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Web3Desktop from '@/public/assets/images/web3Desktop.jpg'
import Web3Mobile from '@/public/assets/images/web3Mobile.jpg'
import RetroPcs from '@/public/assets/images/retroPcs.jpg'
import TopLaptops from '@/public/assets/images/topLaptops.jpg'
import GamingGrowth from '@/public/assets/images/gamingGrowth.jpg'

export default function HomePage() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 821); // Adjust the breakpoint as per your design
    };

    // Initial check on component mount
    handleResize();

    // Event listener for viewport resizing
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className=' md:flex gap-4'>
        <div>
          <div>
            {isMobile ? (
              <Image src={Web3Mobile} alt="Mobile Image" />
            ) : (
              <Image src={Web3Desktop} alt="Desktop Image" />
            )}
          </div>
          <div className='md:flex items-center w/full'>
            <h1 className='w-1/2 font-bold text-[42px] '>The Bright Future of Web 3.0?</h1>
            <span className='w-1/2'>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?</p>
              <button type="button">Read More</button>
            </span>
          </div>
        </div>
        <aside className=' bg-black py-4 px-2'>
          <h2 className='text-[#e9ab53] font-bold text-3xl '>New</h2>
          <div className='leading-7'>
            <div className=''>
              <h3>
                Hydrogen VS Electric Cars
              </h3>
              <p className=''>
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className='w-full h-0.5 my-4 bg-white dark:bg-black'></div>
            <div className=''>
              <h3>
                The Downsides of AI Artistry
              </h3>
              <p className=' '>
                What are the possible adverse effects of on-demand AI image generation?
              </p>
            </div>
            <div className='w-full h-0.5 my-4 bg-white dark:bg-black'></div>
            <div className=''>
              <h3>
                Is VC Funding Drying Up?
              </h3>
              <p >
                Private funding by VC firms is down 50% YOY. We take a look at what that means.
              </p>
            </div>
            <div className='w-full h-0.5 my-4 bg-white dark:bg-black'></div>
          </div>
        </aside>
      </div>

      <div className=" grid md:grid-cols-3 mt-10 w-full border border-black">
        <div className=' md:flex items-center justify-between mr-3 '>
          <Image
            src={RetroPcs}
            alt='Retro PCs image'
            
          />
          <div className='flex md:flex-col items-start justify-between w-full h-full'>
            <span className='text-2xl font-bold '>
              01
            </span>
            <h3>
              Reviving Retro PCs
            </h3>
            <p>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className=' md:flex items-center justify-between ' >
          <Image src={TopLaptops} alt='Top 10 Laptops images' />
          <div className='flex md:flex-col items-start justify-around w-full h-full'>
            <span className='text-2xl font-bold '>
              02
            </span>
            <h3>
              Top 10 Laptops of 2022
            </h3>
            <p>
              Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className=' md:flex items-center justify-between '>
          <Image src={GamingGrowth} alt='Growth of Gaming image ' />
          <div className='flex md:flex-col items-start justify-between w-full h-full'>
            <span className='text-2xl font-bold '>
                03
              </span>
            <h3>
              The Growth of Gaming
            </h3>
            <p>
              How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
