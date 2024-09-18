import { Link } from 'lucide-react';
import React from 'react'

function Spotlight() {
    const posts = [
        {
          title: "India Post to release stamps on Ramayana, Mahabharata",
          description:
            "Government will release stamps on Ramayana, Mahabharata, besides honouring freedom fighters like Batukeshwar Dutt, Sukhdev, Ashfaqulla Khan.",
          imageUrl:
            "https://img.etimg.com/thumb/msid-48775918,width-300,height-225,imgsize-265874,resizemode-75/.jpg", // Use actual image URL
          category: "SPOTLIGHT",
        },
       
       
        
      ];
      return(
        <>
        < div className='w-full h-[943.95px] bg-[#FF7A0014]'>
        <div className=''>
          <h1 className='mx-5  text-2xl font-bold mt-10 ml-5'>Spotlight</h1>
        </div>
        <div className='ml-5 flex justify-between border-b pt-4 py-2 border-gray-300 border-opacity-10 '>
<div className='flex' >
  <ul className='flex gap-4'>
    <li>All</li>
    <li>News</li>
    <li>Interviews</li>
    <li>Insights</li>
  </ul>
</div>
<div className='pr-3'>
  <p>View latest post --</p>
</div>
        </div>
        <div className='w-full h-[807px] flex gap-32 mt-4'>
          <div className='w-[608px] h-[807px] ml-12'>
          <div className="md:col-span-2">
            <img
              className="rounded-lg w-[608px] h-auto"
              src={posts[0].imageUrl}
              alt={posts[0].title}
            />
             <p className="text-sm text-[#783A73] mt-2">Powered by Stampick</p>
             <a href='https://www.linns.com/news/world-stamps-postal-history/britain-s-royal-mail-celebrates-65-years-of-paddington-with-sept.-5-issue'>
             <h2 className="text-4xl font-bold mt-4">{posts[0].title}</h2>
             </a>
           
           
            <p className=" text-gray-300 mt-3">{posts[0].description}</p>
          </div>
          </div>
          <div className='w-[608px] h-[707.9px]  '>
            <div className='border-gray-300 border-opacity-5 border-b '>
            <div className='  flex justify-between  w-[608px] h-[148px]  '>
           
              <div className='w-[368px] h-[115.19px] py-[0px] px-[32px]'>
                <div className='mt-2 text-[#786B3A]'>SPOTLIGHT</div>
                <div className='text-1.2xl '>
                  <a href='https://economictimes.indiatimes.com/news/politics-and-nation/india-post-to-release-stamps-on-ramayana-mahabharata-ravi-shankar-prasad/articleshow/48775918.cms?from=mdr '>
                  <h4>Britain’s Royal Mail celebrates 65 years of Paddington with Sept. 5 issue </h4>
                  </a>
                 
                </div>
              </div>
              <div className=' h-[115px] w-[240px]  '>
                <img className='rounded-[14px] ' src='https://www.linns.com/images/default-source/news/great-britain-2023-paddington-bear-stamps.jpg?sfvrsn=6c070ad1_4'/>
              </div>
              
              
            </div>
            
            
            </div>
            <div className='border-gray-300 border-opacity-5 border-b mt-1.5'>
            <div className='  flex justify-between  w-[608px] h-[148px]  '>
           
              <div className='w-[368px] h-[115.19px] py-[0px] px-[32px]'>
                <div className='mt-2 text-[#786B3A]'>SPOTLIGHT</div>
                <div className='text-1.2xl '>
                  <a href='https://www.linns.com/news/world-stamps-postal-history/britain-celebrates-discworld-book-series-with-aug.-10-set'>
                  <h4>Britain celebrates Discworld book series with Aug. 10 set </h4>
                  </a>
                 
                </div>
              </div>
              <div className=' h-[115px] w-[240px]  '>
                <img className='rounded-[14px] ' src='https://www.linns.com/images/default-source/news/great-britain-terry-pratchett-discworld-first-class-stamps.tmb-slide-1900.jpg?sfvrsn=c7f80bd1_4'/>
              </div>
              
              
            </div>
            
            
            </div>
            <div className='border-gray-300 border-opacity-5 border-b mt-1.5'>
            <div className='  flex justify-between  w-[608px] h-[148px]  '>
           
              <div className='w-[368px] h-[115.19px] py-[0px] px-[32px]'>
                <div className='mt-2 text-[#786B3A]'>SPOTLIGHT</div>
                <div className='text-1.2xl '>
                  <a href='https://www.linns.com/news/world-stamps-postal-history/dramatic-designs-highlight-germany-1933-wagner-semipostals'>
                  <h4>Dramatic designs highlight Germany 1933 Wagner semipostals</h4>
                  </a>
                 
                </div>
              </div>
              <div className=' h-[115px] w-[240px]  '>
                <img className='rounded-[14px] ' src='https://www.linns.com/images/default-source/news/germany-1933-richard-wagner-operas-semipostal-stamp.jpg?sfvrsn=2eae0bd1_4'/>
              </div>
              
              
            </div>
            
            
            </div>
            <div className='border-gray-300 border-opacity-5 border-b mt-1.5'>
            <div className='  flex justify-between  w-[608px] h-[148px]  '>
           
              <div className='w-[368px] h-[115.19px] py-[0px] px-[32px]'>
                <div className='mt-2 text-[#786B3A]'>SPOTLIGHT</div>
                <div className='text-1.2xl '>
                  <a href='https://www.linns.com/news/world-stamps-postal-history/details-for-stampex-sept.-27-30-in-london-england '>
                  <h4>Details for Stampex Sept. 27-30 in London, England </h4>
                  </a>
                 
                </div>
              </div>
              <div className=' h-[115px] w-[240px]  '>
                <img className='rounded-[14px] ' src='https://www.linns.com/images/default-source/news/stampex-international-stamp-show-exhibition08a9664011176df9aa55ff0000be2468.jpg?sfvrsn=e6be0bd1_2'/>
              </div>
              
              
            </div>
            
            
            </div>
            <div className='border-gray-300 border-opacity-5 border-b mt-1.5'>
            <div className='  flex justify-between  w-[608px] h-[148px]  '>
           
              <div className='w-[368px] h-[115.19px] py-[0px] px-[32px]'>
                <div className='mt-2 text-[#786B3A]'>SPOTLIGHT</div>
                <div className='text-1.2xl '>
                  <a href='https://www.linns.com/news/world-stamps-postal-history/iceland-stamps-are-back-to-commemorate-150th-anniversary '>
                  <h4>Iceland stamps are back to commemorate 150th anniversary </h4>
                  </a>
                 
                </div>
              </div>
              <div className=' h-[115px] w-[240px]  '>
                <img className='rounded-[14px] ' src='https://www.linns.com/images/default-source/news/iceland-2023-150th-annversary-first-stamps-souvenir-sheet.jpg?sfvrsn=5e1e0ad1_4'/>
              </div>
              
              
            </div>
            
            
            </div>

              
            
             
            
</div>
          </div>
        
        </div>
        </>
      )
    
 
}
  

export default Spotlight