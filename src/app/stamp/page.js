import Image from "next/image";
import { dummyStamps } from "@/utils/StampData";
import StampDetails from "@/components/StampDetails";

export default function StampPage() {
  return (
    <>
      <div>
          <StampDetails product={dummyStamps[0]} />
      </div>
    </>
  );
}
