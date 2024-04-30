"use client";
import {MapChart}  from "./components/simplemap.jsx"; 
import { MyMap } from "./components/map.tsx"
import { Slider, Typography } from "@mui/material";
import React, { useState, useEffect } from 'react';
import data from '../json/final_dataframe.json';


// Home page component
export default function Home() {
  // track selected metrics
  const [selectedMetrics, setSelectedMetrics] = useState({
    income: 50,
    graduation: 50,
    foodstamps: 50,
  });

  const [topZipCodes, setTopZipCodes] = useState<string[]>([]);

  const updateTopZipCodes = () => {
    // Sort ZIP codes based on selected metrics
    const sortedZipCodes = data.sort((a, b) => {
      // Criteria 1: Lower median income is better
      const incomeComparison = a["MEDIAN INCOME"] - b["MEDIAN INCOME"];
      
      // Criteria 2: Lower average daily attendance is better
      const attendanceComparison = a["Average Daily Attendance (YTD)"] - b["Average Daily Attendance (YTD)"];
      
      // Criteria 3: Higher number of food stamps is better
      const foodStampsComparison = b["Food stamps"] - a["Food stamps"];

      // Combine all criteria
      return incomeComparison + attendanceComparison + foodStampsComparison;
    });
    
    // Select top 10 ZIP codes
    const top10ZipCodes = sortedZipCodes.slice(0, 10);
    setTopZipCodes(top10ZipCodes);
  };

  const handleButtonClick = () => {
    updateTopZipCodes();
  };

  useEffect(() => {
    updateTopZipCodes();
  }, [selectedMetrics]);

  const handleSliderChange = (metric, value) => {
    setSelectedMetrics(prevState => ({
      ...prevState,
      [metric]: value
    }));
    updateTopZipCodes();
  };
  
  // Render the UI
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

      <div className="h-16" />

      <main className="flex min-h-screen flex-row p-24">
        {/* Main Map area */}
        <div className="flex-grow rounded-lg">
          <MyMap/>

        </div>

        <div className="ml-8 w-1/4 flex flex-col"> 
          <div className="mb-4">
            <Typography>Income Median</Typography>
            <Slider
              defaultValue={selectedMetrics.income}
              aria-label="Income Median"
              valueLabelDisplay="auto"
              min={0}
              max={100}
              onChange={(event, value) => handleSliderChange('income', value)}
            />
          </div>

          <div className="mb-4">
            <Typography>Graduation Rate</Typography>
            <Slider
              defaultValue={selectedMetrics.graduation}
              aria-label="Graduation Rate"
              valueLabelDisplay="auto"
              min={0}
              max={100}
              onChange={(event, value) => handleSliderChange('graduation', value)}
            />
          </div>
          
          <div className='mb-8'>
            <Typography>Food Stamps Received</Typography>
            <Slider
              defaultValue={selectedMetrics.foodstamps}
              aria-label="Food Stamps Received"
              valueLabelDisplay="auto"
              min={0}
              max={100}
              onChange={(event, value) => handleSliderChange('foodstamps', value)}
            />
          </div>
        </div>
      </main>
      {/* Display top zip codes */}
      <div className='mt-2 flex justify-center'>
        <div>
            <h2 className='text-xl leading-6 mb-3'>Top 10 Zip Codes for Non-Profit Operations:</h2>
            <ul>
              {topZipCodes.map((zipCode, index) => (
                <li key={index}>
                  ZIP: {zipCode.ZIP}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

