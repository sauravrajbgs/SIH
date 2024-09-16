// pages/profile.js
import React from "react";
import UserStampCollections from './UserStampCollections'


const UserProfile = ({user, collections}) => {
  return (
    <div className="min-h-screen bg-[#191C1E] text-white">
      {/* Profile Cover */}
      <div className="bg-[#222528] h-72 w-[95%] rounded-3xl m-[2.5%]"></div>

      {/* Profile Info */}
      <div className="relative -mt-16 px-6">
        <div className="flex justify-between items-center">
          {/* Profile Picture and Name */}
            <div className="flex flex-col space-x-4 ml-10 -mt-24">
                <img
                src={user?.profileImage} 
                alt="Profile"
                className="w-36 h-36 rounded-full"
                />
                <div>
                <h1 className="text-4xl mt-4 -ml-7">{user?.name}</h1>
                </div>
                
                <div className="flex space-x-4">
                    {/* Follow button */}
                    <button className="bg-white text-black py-3 px-6 rounded-2xl font-bold hover:bg-gray-200 transition mt-6 -ml-7">
                    + Follow
                    </button>
                    {/* Share button */}
                    <div className="w-12 h-12 bg-[#242527] flex justify-center rounded-2xl mt-6">
                        <button className="text-gray-400">
                            <img src='/images/Share.svg' />
                        </button>
                    </div>
                    {/* Options button */}
                    <div className="w-12 h-12 bg-[#242527] flex justify-center rounded-2xl mt-6">
                        <button className="text-gray-400">
                            <img src='/images/Ellipsis.svg' />
                        </button>
                    </div>
                </div>
            </div>
            {/* Followers and Following Info */}
            <div className="bg-[#191c1e] rounded-2xl flex justify-between w-80 h-28 text-gray-400 p-4 m-4 mt-20 ml-10 border border-opacity-10">
                <div className="flex flex-col items-start m-4">
                    <p className="mb-2">Followers</p>
                    <p>Following</p>
                </div>
                <div className="flex flex-col items-end m-4">
                    <p className="text-gray-400 mb-2">{user?.followers}</p>
                    <p className="text-gray-400">{user?.following}</p>
                </div>
            </div>
        </div>
      </div>
      <div>
        <UserStampCollections user={user} collections={collections} />
      </div>
    </div>
  );
};

export default UserProfile;
