import React from "react";
import { RenderNavigation } from "./components/RenderNavigation";
import Image from "next/image";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogPortal,
} from "@radix-ui/react-dialog";
import { LoginForm } from "../login";
import { DialogTitle } from "@/components/ui/dialog";

function Navbar() {
  return (
    <nav className="flex px-56 justify-between border-b border-gray-200 items-center h-[100px] ">
      <Image
        src={
          "https://louris.wpbingosite.com/wp-content/themes/louris/assets/images/logo/logo.svg"
        }
        width={100}
        height={50}
        alt="Logo"
      />
      <RenderNavigation />
      <div className="flex items-center space-x-4">
        <Search className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
        <Dialog>
          <DialogTrigger asChild>
            <User className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
          </DialogTrigger>
          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black opacity-70  z-40" />
            <DialogTitle>Login Form</DialogTitle>
            <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-50 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
              <LoginForm />
            </DialogContent>
          </DialogPortal>
        </Dialog>
        <div className="relative">
          <Heart className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        </div>
        <div className="relative">
          <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
