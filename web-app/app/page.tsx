"use client";
import {MapChart}  from "./components/simplemap.jsx"; 
import { MyMap } from "./components/map.tsx"
import { Slider, Typography } from "@mui/material";
import React, { useState } from 'react';




export default function Home() {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          The Expansion Index{" "}
          <a className="text-sm text-blue-400">TeamSeven</a>
        </h1>
        <div className="flex items-center">
          <div className="text-white px-4 py-2 rounded-lg mr-4">
            Siyam Al Shahriar, Lucy Wu, Rejin Nepal, Joseph Musenge
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
      
      <div className="h-16 " />

      <main className="flex min-h-screen flex-row bg-slate-600 p-24">
        {/* Main Map area */}
        <div className="flex-grow rounded-lg">
          <MyMap/>

        </div>

        <div className="ml-8 w-1/4 flex flex-col"> 
          <div className="mb-4">
            <Typography>Median Household Income</Typography>
            <Slider
              defaultValue={50}
              aria-label="Adjust Metric 1"
              valueLabelDisplay="auto"
            />
          </div>

          <div className="mb-4">
            <Typography>Graduation Rate</Typography>
            <Slider
              defaultValue={50}
              aria-label="Adjust Metric 2"
              valueLabelDisplay="auto"
            />
          </div>

          <div>
            <Typography>Number of food stamps allocated</Typography>
            <Slider
              defaultValue={50}
              aria-label="Adjust Metric 3"
              valueLabelDisplay="auto"
            />
          </div>
          <div>
          <a
          href="/get-started"
          className="bg-gradient-to-r from-green-400 to-blue-500 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-xl`}>
            Get expansion suggestions{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        
        </a>
          </div>
        </div>
      </main>
      </div>
    );
}
