import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <SignUp afterSignUpUrl={"/new-user"} redirectUrl="/new-user" />
      </div>
    </div>
  );
}
