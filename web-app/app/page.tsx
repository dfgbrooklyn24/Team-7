"use client";
import Image from "next/image";


import {MapChart}  from "./components/simplemap.jsx"; 
import { MyMap } from "./components/map.tsx";



import { Slider, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Team{" "}
          <a className="text-blue-400">Seven</a>
        </h1>
        <div className="flex items-center">
          <div className="text-white px-4 py-2 rounded-lg mr-4">
            Member 1, Member 2, Member 3, Member 4, Member 5
          </div>
        </div>
        <div className="flex items-center">
          <a
            href="" // GitHub repo link here
            className="bg-gray-600 text-white px-4 py-2 rounded-lg mr-4"
          >
            GitHub
          </a>
          <a
            href="https://nextjs.org/docs"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </header>

      <div className="h-16" />

      <main className="flex min-h-screen flex-row p-24">
        {/* Main Map area */}
        <div className="flex-grow">
          Main Map Goes Here
        </div>

        <div className="ml-8 w-1/4 flex flex-col"> 
          <div className="mb-4">
            <Typography>Adjust Metric 1</Typography>
            <Slider
              defaultValue={50}
              aria-label="Adjust Metric 1"
              valueLabelDisplay="auto"
            />
          </div>

          <div className="mb-4">
            <Typography>Adjust Metric 2</Typography>
            <Slider
              defaultValue={50}
              aria-label="Adjust Metric 2"
              valueLabelDisplay="auto"
            />
          </div>

          <div>
            <Typography>Adjust Metric 3</Typography>
            <Slider
              defaultValue={50}
              aria-label="Adjust Metric 3"
              valueLabelDisplay="auto"
            />
          </div>
          <div>
            <Typography>Adjust Metric 4</Typography>
            <Slider
              defaultValue={50}
              aria-label="Adjust Metric 3"
              valueLabelDisplay="auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}




//  New layout
