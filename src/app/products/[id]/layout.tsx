import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <div>
        <h2>Featured products section</h2>
      </div>
    </div>
  );
}
