import React from "react";
import Navbar from "../(navbar)/Navbar";

export default async function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto">{children}</div>
    </>
  );
}
