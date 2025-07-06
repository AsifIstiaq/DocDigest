import { FileText } from "lucide-react";
import NavLink from "./nav-link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold text-xl lg:text-2xl text-gray-900">
            DocDigest
          </span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <SignedIn>
          <Button className="bg-white border border-gray-900 rounded-full hover:bg-gray-300 hover:scale-105">
            <NavLink href="/dashboard">Your Summaries</NavLink>
          </Button>
        </SignedIn>
      </div>
      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <Button className="bg-white border border-gray-900 rounded-full hover:bg-gray-300 hover:scale-105">
              <NavLink href="/upload">Upload a PDF</NavLink>
            </Button>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>
        <SignedOut>
          <Button className="bg-white border border-gray-900 rounded-full hover:bg-gray-300 hover:scale-105">
            <NavLink href="/sign-in">Sign In</NavLink>
          </Button>
        </SignedOut>
      </div>
    </nav>
  );
};
export default Header;
