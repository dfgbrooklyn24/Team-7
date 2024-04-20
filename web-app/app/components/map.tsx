import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"
import { blue } from "@mui/material/colors"
import Tooltip from '@mui/material/Tooltip';

export function MyMap() {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Tooltip
        title="Add"
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [10, 14],
                },
              },
            ],
          },
        }}
      >
      <Marker width={50} anchor={[50.879, 4.6997]} />
      </Tooltip>
      <Marker 
        width={50}
        anchor={[50.875, 4.6997]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
    </Map>
  )
}