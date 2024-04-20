"use client";
import Image from "next/image";


import {MapChart}  from "./components/simplemap.jsx"; 
import { MyMap } from "./components/map.tsx";

export default function Home() {
  return (
    <div className="page-content">
      <MyMap/>
    </div>
  );
}
