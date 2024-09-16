import Image from 'next/image';
import { collections } from '@/utils/CollectionData';

const MoreCollectionSlider = () => {
  return (
    <div className="bg-[#191C1E] text-white p-8">
      <h2 className="text-2xl font-semibold mb-6 flex justify-center items-center">More from this collection</h2>
      <div className="flex space-x-6 overflow-x-scroll scrollbar-hide w-full h-full">
        {collections.map((collection) => (
          <div key={collection?.id} className="bg-[#191c1e] rounded-2xl w-[300px] flex-shrink-0 p-6 border border-opacity-10">
            <Image
              src={collection?.image}
              alt={collection?.title}
              width={300}  
              height={150} 
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold mt-4">{collection?.title}</h3>
            <div className='bg-[#252728] rounded-lg flex flex-row text-[15px] mt-4'>
              <div className="p-2">
                <p className="text-gray-400">Price</p>
                <p className="text-white font-bold">{collection?.price}</p>
              </div>
              <div className="p-2 ml-10">
                <p className="text-gray-400">Highest bid</p>
                <p className="text-white">{collection?.highestBid}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreCollectionSlider;
