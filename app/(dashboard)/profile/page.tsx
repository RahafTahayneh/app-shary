import ProfileCard from "@/components/ProfileCard";
import UserDetails from "@/components/UserDetails";

const Page = () => {
  const isLoading = true;
  const profileName = "John Doe";
  const profilePictureURL = "https://via.placeholder.com/50";
  const cardList = ["Card 1", "Card 2", "Card 3"];

  return (
    <div className="flex flex-row">
      <div className="w-1/3 p-4">
        <ProfileCard
          isLoading={isLoading}
          profileName={profileName}
          profilePictureURL={profilePictureURL}
          cardList={cardList}
        />
      </div>
      <div className="w-2/3 p-4">
        <UserDetails />
      </div>
    </div>
  );
};

export default Page;
