import React from "react";

type ProfileCardProps = {
  isLoading: boolean;
  profileName?: string;
  profilePictureURL?: string;
  cardList: string[];
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  isLoading,
  profileName,
  profilePictureURL,
  cardList,
}) => {
  return (
    <div className="p-16 rounded-md bg-white flex justify-center h-full">
      <div className="bg-gray-200 rounded-lg overflow-hidden w-64 h-128 p-2">
        <div className="bg-white rounded-lg h-full p-2">
          {/* Top-notch area */}
          <div className="bg-gray-200 h-4 mx-auto mt-2 rounded-full w-20"></div>

          {/* Content */}
          <div className="p-4">
            {/* Profile Picture and Name */}
            <div className="flex flex-col items-center justify-center">
              {isLoading ? (
                <div className="w-24 h-24 bg-gray-300 rounded-full animate-pulse"></div>
              ) : (
                <img
                  src={profilePictureURL}
                  alt={profileName}
                  className="w-24 h-24 rounded-full"
                />
              )}
              {isLoading ? (
                <div className="w-40 h-5 bg-gray-300 rounded mt-4 animate-pulse"></div>
              ) : (
                <h2 className="text-xl font-semibold mt-4">{profileName}</h2>
              )}
            </div>

            {/* Card List */}
            <div className="mt-8">
              <ul>
                {cardList.map((card, index) => (
                  <li key={index} className="border rounded-md p-2 mb-2">
                    {card}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
