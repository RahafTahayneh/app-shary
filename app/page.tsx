import { auth } from "@clerk/nextjs";
import Link from "next/link";
import "@/styles/globals.css";
import LottieAnimation from "@/components/LottieAnimation";
import welcomeAnimation from "@/public/animation.json";

export default async function Home() {
  const { userId } = await auth();
  const href = userId ? "/links" : "/new-user";
  return (
    <div className="w-screen h-screen  flex ">
      <div className="container mx-auto p-10 text-center bg-white overflow-hidden">
        <div className="absolute top-5 left-5">
          <h1 className="text-4xl font-bold ml-2 gradient-text cursor-pointer">
            shary
          </h1>
        </div>
        <div className="flex flex-col justify-center sm:flex-row items-center my-20">
          <div className="header-section my-20">
            <h1 className="text-4xl mb-8 max-w-[400px]">
              <span className="gradient-text font-semibold">Shary</span>:
              Connect Better, Faster
            </h1>
            <p className="text-xl mb-8 max-w-[500px]">
              Unify Your Online Presence—Easily Create and Share a Digital Card
              with Your Name, Email, and Essential Links.
            </p>
            <Link href={href}>
              <button className="bg-[#F3CC76] text-gray-[700] px-6 py-3 mb-10 sm:mb-0 rounded font-semibold">
                Get Started
              </button>
            </Link>
          </div>
          <LottieAnimation animationData={welcomeAnimation} className="" />
        </div>
      </div>
    </div>
  );
}
