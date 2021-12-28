import React from "react";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import TabComponent from "../components/TabComponent";

export default function Layout() {
  return (
    <div>
      <HeaderComponent />
      <TabComponent />
      <FooterComponent />
    </div>
  );
}
