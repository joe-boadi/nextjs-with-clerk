"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function About() {
  //Programmatic routing
  const router = useRouter();
  return (
    <>
      <p>
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sunt dicta
        a odit corrupti, laboriosam maxime esse, voluptatem ab vitae ratione
        praesentium dolore consequatur voluptate itaque harum. Beatae, dolore
        culpa?
      </p>
      <button
        type="button"
        onClick={() => router.push("/")}
        className="bg-slate-400 rounded-2xl p-3 cursor-pointer"
      >
        Back to Home
      </button>
    </>
  );
}
