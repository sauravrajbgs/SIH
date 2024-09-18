import Image from "next/image";
import { user } from "@/utils/ProfileData";
import UserProfile from "@/components/UserProfile";
import { dummyStamps } from "@/utils/StampData";

export default function ProfilePage() {
  return (
    <>
      <div>
          <UserProfile user={user[0]} collections={dummyStamps}/>
      </div>
    </>
  );
}
