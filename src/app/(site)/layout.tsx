import React from "react";
import SideBar from "@/components/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SideBar>{children}</SideBar>
    </>
  );
};

export default layout;
