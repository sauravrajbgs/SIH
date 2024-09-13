import Image from "next/image";
import { dummyStamps } from "@/utils/StampData";
import StampGrid from "@/components/StampGrid";

export default function Home() {
  return (
    <>
      <div className="px-4">
        <div className="broder border border-opacity-10 border-gray-300 rounded-md py-7 px-5">
          <div className="broder border border-opacity-10 border-gray-300 rounded-md p-x-3">
            <div className="flex flex-col gap-5">
              <div className="mx-5 border-b pt-4 py-2 border-gray-300 border-opacity-10 text-2xl font-bold">Latest Drops</div>
              <StampGrid stamps={dummyStamps} />
              </div>
     </div>
     </div>
     </div>
    </>
  );
}
