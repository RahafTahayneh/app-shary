import React from "react";

type CardProps = {
  isLoading?: boolean;
  profileName?: string;
  profilePictureURL?: string;
  cardList?: string[];
};

const ProfileCard: React.FC<CardProps> = ({
  isLoading,
  profileName,
  profilePictureURL,
  cardList,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "400px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          {isLoading ? (
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#eee",
              }}
            ></div>
          ) : (
            <img
              src={profilePictureURL}
              alt={profileName}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          )}
        </div>
        <div style={{ marginLeft: "20px" }}>
          {isLoading ? (
            <div
              style={{
                width: "100px",
                height: "20px",
                backgroundColor: "#eee",
              }}
            ></div>
          ) : (
            <h2>{profileName}</h2>
          )}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Your Cards:</h3>
        <ul>
          {cardList?.map((card, index) => (
            <li
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              {card}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
