import Image from "next/image";
import { dummyStamps } from "@/utils/StampData";
import StampGrid from "@/components/StampGrid";
import SwiperComponent from "@/components/Slider";
import Spotlight from "@/components/Spotlight";

import PhilatelicResources from "@/components/PhilatelicResources";
import Footers from "@/components/Footers";
import Subscribe from "@/components/Subscribe";
import { Footprints } from "lucide-react";
import Footer from "@/components/Footer";

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
        <div className="broder border border-opacity-10 border-gray-300  py-7 px-5 rounded-md">
          <div className="broder border border-opacity-10 border-gray-300 rounded-3xl p-x-3">
            <div className="flex flex-col gap-5">
              <div className="mx-5 border-b pt-4 py-2 border-gray-300 border-opacity-10 text-2xl font-bold">Latest Drops</div>
              <StampGrid stamps={dummyStamps} />
              </div>
              
      </div>
        </div>
        <Spotlight/>
        <Subscribe/>
        <PhilatelicResources/>
        <Footers/>
      </div>  
    </div>
   
         
     
     
     
    </>
  );
}
