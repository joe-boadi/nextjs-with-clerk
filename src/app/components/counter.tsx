"use client";
import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";

export default function Counter() {
  const { isLoaded, userId } = useAuth();
  const [count, setCount] = useState(0);
  if (!isLoaded || !userId) return null;
  //   console.log("Cunter component");
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase : {count}
      </button>
    </div>
  );
}
