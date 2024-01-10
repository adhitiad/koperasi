"use client";
import React from "react";

import { Provider } from "react-redux";
import store from "@/libs/store";

const Redux = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Redux;
