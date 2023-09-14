import { Tabs } from "@/components/Tabs";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen relative ">
      <div className=" h-full">
        <header className="h-[80px] border-b border-black/10 flex flex-row items-center p-4 justify-between">
          <div>
            <h1 className="text-3xl font-bold ml-2 gradient-text cursor-pointer">
              shary
            </h1>
          </div>
          {/* PAGES LINKS */}
          <div>
            <Tabs />
          </div>
          <nav className="h-full">
            <div className="flex items-center justify-end h-full">
              <UserButton afterSignOutUrl="/" />
            </div>
          </nav>
        </header>
        <div className="h-[calc(100vh-80px)] p-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
