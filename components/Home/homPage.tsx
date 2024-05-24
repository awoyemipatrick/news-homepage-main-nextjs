'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Web3Desktop from '@/public/assets/images/web3Desktop.jpg'
import Web3Mobile from '@/public/assets/images/web3Mobile.jpg'
import RetroPcs from '@/public/assets/images/retroPcs.jpg'
import TopLaptops from '@/public/assets/images/topLaptops.jpg'
import GamingGrowth from '@/public/assets/images/gamingGrowth.jpg'
import clsx from 'clsx';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    header: 'Reviving Retro PCs',
    number: '01',
    imageSrc: RetroPcs,
    imageAlt: "Reviving Retro PCs Image.",
    paragraph: 'What happens when old PCs are given modern upgrades?',
  },
  {
    id: 2,
    header: 'Top 10 Laptops of 2022',
    number: '02',
    imageSrc: TopLaptops,
    imageAlt: "Top 10 Laptops image",
    paragraph: ' Our best picks for various needs and budgets.',
  },
  {
    id: 3,
    header: ' The Growth of Gaming',
    number: '03',
    imageSrc: GamingGrowth,
    imageAlt: "Growth of Gaming image",
    paragraph: ' How the pandemic has sparked fresh opportunities.',
  },
]


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
                But is it really fulfilling its promise?
              </p>
              <button className='' type="button">Read More</button>
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

      <div className='grid md:grid-cols-3'>
        {articles.map((article) => (
          <figure key={article.id} className="md:flex bg-slate-100 md:p-0 dark:bg-slate-800">
            <Image className="w-24 h-auto mx-auto" src={article.imageSrc} alt={article.imageAlt} />
            <div className="pl-4">
              <figcaption className=" grid">
                <span className=" text-xl font-bold">
                  {article.number}
                </span>
                <Link href={''} className=" hover:text-red-500">
                  {article.header}
                </Link>
              </figcaption>
              <blockquote>
                <p className="">
                  {article.paragraph}
                </p>
              </blockquote>
            </div>
          </figure>
        ))}
      </div>
    </section >
  );
}