import React from "react";
import WhitepaperResearch from "../components/journel";
import Nav from "../components/nav";
import Footer from "../components/footer";

export const metadata = {
  title: "Research & Whitepapers — Displaced Voices Network",
  description:
    "Curated research papers, policy analyses, and firsthand oral histories by Saira Gulati and the Displaced Voices Network on refugee displacement, institutional policy, and human dignity.",
};

export default function Page() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <div>
        <Nav />
        <WhitepaperResearch />
      </div>
      <Footer />
    </div>
  );
}
