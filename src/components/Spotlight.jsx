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
         
       
        // Add more news articles as needed
      ];
    
  return (
    <div className="bg-[#FF7A0014] p-4 text-white min-h-screen broder border border-opacity-10 border-gray-300 rounded-md p-x-3 flex">
    <div className="container mx-auto px-4 py-7 ">
        <div>
        <h1 className="text-3xl font-bold mb-8">Spotlight</h1>
        </div>
     

      
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8   border-gray-300 rounded-md p-x-3">
        <div className="md:col-span-2 ">
          {/* Wrap Image in an <a> tag to make it clickable */}
          <a href="https://economictimes.indiatimes.com/news/politics-and-nation/india-post-to-release-stamps-on-ramayana-mahabharata-ravi-shankar-prasad/articleshow/48775918.cms?from=mdr" target="_blank" rel="noopener noreferrer">
            <img
              className="rounded-md w-full h-45 cursor-pointer mt-3 "
              src={posts[0].imageUrl}
              alt={posts[0].title}
            />
          </a>
          <h2 className="text-2xl font-bold mt-4">{posts[0].title}</h2>
          <p className="text-sm  mt-2 text-red-500">Powered by Stampick</p>
          <p className="mt-2 text-gray-300">{posts[0].description}</p>
        </div>

        {/* Sidebar Articles */}
        <div className=''>
          {posts.slice(1).map((post, index) => (
          
            <div key={index} className="mb-6 ">
                
              <h3 className="text-sm text-yellow-400 uppercase ">
                {post.category}
              </h3>
              <div className='flex gap-3'>
              <div>
                  <h4 className="text-md font-semibold">{post.title}</h4>
              </div>
              <div className="flex space-x-4">
                < a href={post.link}>
                <img
                  className="w-25 h-25 object-cover rounded cursor-pointer "
                 
                  alt={post.title}
                  src={post.imageUrl}
                />
                </a>
               
              </div>
            </div>
            </div>
          ))}
          <div className="mt-4 text-yellow-400 hover:underline">
            <a href="#">View all posts →</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Spotlight