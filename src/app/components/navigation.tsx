"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center items-center p-4">
      <Link
        className={pathname === "/" ? "mr-4 font-bold" : "mr-4 text-blue-500"}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={
          pathname === "/about" ? "mr-4 font-bold" : "mr-4 text-blue-500"
        }
        href={"/about"}
      >
        About
      </Link>
      <Link
        className={
          pathname.startsWith("/products/1")
            ? "mr-4 font-bold"
            : "mr-4 text-blue-500"
        }
        href={"/products/1"}
      >
        Product
      </Link>
      <span className=" flex bg-blue-400 p-3 rounded-lg cursor-pointer">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </span>
    </nav>
  );
}
