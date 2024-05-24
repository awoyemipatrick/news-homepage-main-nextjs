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

const asides = [
  {
    id: 1,
    header: ' Hydrogen VS Electric Cars',
    paragraph: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    id: 2,
    header: ' The Downsides of AI Artistry',
    paragraph: ' What are the possible adverse effects of on-demand AI image generation?.',
  },
  {
    id: 3,
    header: 'Is VC Funding Drying Up?',
    paragraph: ' Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
]


export default function HomePage() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 821);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className="container md:mx-auto flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      <div className=' md:flex gap-4'>
        <div>
          <div>
            {isMobile ? (
              <Image src={Web3Mobile} alt="Mobile Image" priority  className=' text-f ' />
            ) : (
              <Image src={Web3Desktop} alt="Desktop Image" priority />
            )}
          </div>
          <div className='md:flex items-center w/full my-3'>
            <div className='w-1/2'>
              <h1 className=' md:w-[65%] text-xl md:text-[45px] font-bold leading-tight '>The Bright Future of Web 3.0?</h1>
            </div>
            <span className='w-1/2'>
              <p >
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button
                className='text-[#fffdfa] bg-[#f15e50] hover:bg-[#00001a] px-4 py-1 mt-3 transition-all duration-300 '
                type="button">
                Read More
              </button>
            </span>
          </div>
        </div>
        <aside className=' bg-black px-2 leading-7'>
          <h2 className='text-[#e9ab53] font-bold text-3xl '>New</h2>
          <div className='mt-2'>
            {asides.map((aside) => (
              <div key={aside.id} className='my-[7.5%] '>
                <h3 className=' text-[#fffdfa] font-bold hover:text-[#e9ab53] '>
                  {aside.header}
                </h3>
                <p className=''>
                  {aside.paragraph}
                </p>
                <div className=' bg-[#c5c6ce] h-[1px] mt-[7.5%] '></div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className='grid md:grid-cols-3 dark:bg-[#fffdfa] dark:p-1 '>
        {articles.map((article) => (
          <figure key={article.id} className="flex py-2 md:p-0">
            <Image className="w-24 h-auto mx-auto" src={article.imageSrc} alt={article.imageAlt} />
            <div className="pl-4 ">
              <figcaption className=" grid">
                <span className="text-[#c5c6ce] text-xl font-bold">
                  {article.number}
                </span>
                <Link href={''} className=" text-lg font-bold text-[#00001a] hover:text-[#f15e50] ">
                  {article.header}
                </Link>
              </figcaption>
              <blockquote className=''>
                <p className="text-[] ">
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