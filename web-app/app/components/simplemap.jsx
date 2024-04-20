import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_10m_admin_0_antarctic_claim_limit_lines.geojson"

export function MapChart() {
  return (
    <Geographies geography="/output.json">
      {({ geographies }) =>
        geographies.map((geo) => {
          // You can access `firstProperty` and `secondProperty`
          // via geo.properties.firstProperty and geo.properties.secondProperty

          return <Geography key={geo.rsmKey} geography={geo} />
        })
      }
    </Geographies>

  )
}
