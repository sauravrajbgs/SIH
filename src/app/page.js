import Image from "next/image";
import { dummyStamps } from "@/utils/StampData";
import StampGrid from "@/components/StampGrid";
import SwiperComponent from "@/components/Slider";
import Spotlight from "@/components/Spotlight";
import Subscribe from "@/components/Subscribe";
import PhilatelicResources from "@/components/PhilatelicResources";
import Footers from "@/components/Footers";

export default function Home() {
  return (
    <>
    <div className="px-3">
    <div className="h-[100vh] p-3 mb-10">
      <div className="rounded-lg overflow-hidden relative h-[100vh]">
      <SwiperComponent/>
      </div>
      </div>
      <div className="px-4">
        <div className="broder border border-opacity-10 border-gray-300 rounded-md py-7 px-5">
          <div className="broder border border-opacity-10 border-gray-300 rounded-md p-x-3">
            <div className="flex flex-col gap-5">
              <div className="mx-5 border-b pt-4 py-2 border-gray-300 border-opacity-10 text-2xl font-bold">Latest Drops</div>
              <StampGrid stamps={dummyStamps} />
              </div>
              
     </div>
     </div>
     <div className="broder border border-opacity-10 border-gray-300 rounded-md p-x-3">
            <div className="flex flex-col gap-5">
              {/* <div className="mx-5 border-b pt-4 py-2 border-gray-300 border-opacity-10 text-2xl font-bold">Spotlight</div> */}
              <Spotlight />
              </div>
              
     </div>
     
     <div className="broder border border-opacity-10 border-gray-300 rounded-md p-x-3">
            <div className="flex flex-col gap-5 pt-5">
               {/* <div className="mx-5 border-b pt-4 py-2 border-gray-300 border-opacity-10 text-2xl font-bold">Spotlight</div>  */}
              <PhilatelicResources />
              </div>
              
     </div>
     <div className="broder border border-opacity-10 border-gray-300 rounded-md p-x-3">
            <div className="flex flex-col gap-5 pt-5">
               {/* <div className="mx-5 border-b pt-4 py-2 border-gray-300 border-opacity-10 text-2xl font-bold">Spotlight</div>  */}
              <Footers />
              </div>
              
     </div>
     
     </div>
     </div>
   
         
     
     
     
    </>
  );
}
