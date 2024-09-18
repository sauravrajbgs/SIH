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
        {
          title: "Britain's Royal Mail celebrates 65 years of Paddington",
          description: "Sept. 5 issue celebrates Paddington.",
          imageUrl: "https://www.linns.com/images/default-source/news/great-britain-2023-paddington-bear-stamps.jpg?sfvrsn=6c070ad1_4",
          category: "SPOTLIGHT",
           link:"https://google.com"
        },
        {
            title: "Britain's Royal Mail celebrates 65 years of Paddington",
            description: "Sept. 5 issue celebrates Paddington.",
            imageUrl: "https://www.linns.com/images/default-source/news/great-britain-2023-paddington-bear-stamps.jpg?sfvrsn=6c070ad1_4",
            category: "SPOTLIGHT",
             link:"https://google.com"
          },
          {
            title: "Britain's Royal Mail celebrates 65 years of Paddington",
            description: "Sept. 5 issue celebrates Paddington.",
            imageUrl: "https://www.linns.com/images/default-source/news/great-britain-2023-paddington-bear-stamps.jpg?sfvrsn=6c070ad1_4",
            category: "SPOTLIGHT",
            link:"https://google.com"
          },
         
       
        
      ];
    //grid-cols-1 md:grid-cols-3 gap-8   border-gray-300 rounded-md  p-x-3  gap-600
  return (
    <div className="bg-[#FF7A0014] h-[943px]  p-[48px] w-full flex gap-28">
    {/* <div className="container px-4 py-7 bg-black">  */}
    <div className=" w-[608px] h-[943px]">
        
      <h1 className="text-3xl font-bold mb-8 ml-8 italic" >Spotlight</h1>
        {/* <div className="md:col-span-2 "> */}
          {/* Wrap Image in an <a> tag to make it clickable */}
          <a href="https://economictimes.indiatimes.com/news/politics-and-nation/india-post-to-release-stamps-on-ramayana-mahabharata-ravi-shankar-prasad/articleshow/48775918.cms?from=mdr" target="_blank" rel="noopener noreferrer">
          
            <img
              className="rounded-md  cursor-pointer mt-3  w-[608px] h-[400px] ml-10"
              src={posts[0].imageUrl}
              alt={posts[0].title}
            />
          </a>
          <p className="text-sm  mt-2 text-pink-600 ml-10">POWERED BY STAMPICK</p>
          <h2 className="text-2xl font-bold mt-4 text-center">{posts[0].title}</h2>
          
          <p className="mt-2 text-gray-300 text-center">{posts[0].description}</p>
        </div>

    
      
        {/* Sidebar Articles */}
        <div className='w-[740px] h-[943px] mt-20 '>
          {posts.slice(1).map((post, index) => (
          
            <div key={index} className="mb-1">
               
              <h3 className="text-sm text-yellow-400 uppercase   ">
                {post.category}
              </h3>
              <div className='flex gap-3'>
            <div>
                  <h4 className="text-md font-semibold ">{post.title}</h4>
             </div>
              <div className="flex space-x-4 ">
                < a href={post.link}>
                <img
                  className=" object-cover rounded cursor-pointer w-[240px] h-[115px] "
                 
                  alt={post.title}
                  src={post.imageUrl}
                />
                </a>
               
              </div>
            </div>
            </div>
          ))}
          {/* <div className="mt-4 text-yellow-400 hover:underline">
            <a href="#">View all posts →</a>
          </div> */}
        </div>
      </div>
    
  

  )
}

export default Spotlight