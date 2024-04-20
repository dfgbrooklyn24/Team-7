
import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"
import { blue } from "@mui/material/colors"
import Tooltip from '@mui/material/Tooltip';

export function MyMap() {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`
  return (
    <Map height={300} defaultCenter={[40.0150, -75.1472]} defaultZoom={11}>
        
      <Marker width={50} anchor={[40.01445,-75.18663]} />
      <Marker width={50} anchor={[39.99646,-75.17241]} />
      <Marker width={50} anchor={[40.03166,-75.17983]} />
      <Marker width={50} anchor={[40.03722,-75.14702]} />
      <Marker width={50} anchor={[40.03331,-75.11749]} />
      <Marker width={50} anchor={[40.01708,-75.09426]} />
      
      <Marker 
        width={50}
        anchor={[40.0150, -75.1472]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
    </Map>
  )
}
// 40.01445,-75.18663
// 39.99646,-75.17241
// 40.03166,-75.17983
// 40.03722,-75.14702
// 40.03331,-75.11749
// 40.01708,-75.09426
