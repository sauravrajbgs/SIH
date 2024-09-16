import Image from 'next/image';
import StampCard from './StampCard';
import { dummyStamps } from '@/utils/StampData';

const MoreCollectionSlider = () => {
  return (
    <div className="bg-[rgb(25,28,30)] text-white p-8">
      <h2 className="text-2xl font-semibold mb-6 flex justify-center items-center">More from this collection</h2>
      <div className="flex space-x-6 overflow-x-scroll scrollbar-hide w-full">
        {dummyStamps.map((stamp) => (
          <div className="min-w-[240px] transform hover:scale-105 transition duration-300 ease-in-out">
            <StampCard stamp={stamp} key={stamp.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreCollectionSlider;
