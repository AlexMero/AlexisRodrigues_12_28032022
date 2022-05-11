import { RadialBarChart, RadialBar } from 'recharts'
import { getScoreData } from '../../services/dataManager.js'

/**
 * React component for the Kpi
 * @component
 */
function Kpi() {
  const data = getScoreData()
  return <div className="Kpi">{renderPieCharts(data)}</div>
}

const max = {
  fill: 'transparent',
  name: 'score',
  value: 100,
}

/**
 * render from recharts
 * @param {*} data - data from dataManager.js
 * @returns
 */
function renderPieCharts(data) {
  let widthPx
  let heightPx
  let innerradius
  let outerRadius
  let circleR
  let textX
  let textY
  if (window.matchMedia('(min-width: 1439px)').matches) {
    widthPx = 258
    heightPx = 263
    innerradius = 80
    outerRadius = 100
    circleR = '85'
    textX = '30'
    textY = '35'
  } else {
    widthPx = 200
    heightPx = 225
    innerradius = 60
    outerRadius = 83
    circleR = '65'
    textX = '25'
    textY = '35'
  }

  return (
    <div className="KpiContainer">
      <RadialBarChart
        width={widthPx}
        height={heightPx}
        innerRadius={innerradius}
        outerRadius={outerRadius}
        data={[max, data]}
        startAngle={205}
        endAngle={-155}
        cx="50%"
        cy="50%"
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <RadialBar dataKey="value" background cornerRadius={10} />
        <circle cx="50%" cy="50%" fill="white" r={circleR}></circle>
        <text x={textX} y={textY} width={147} fontSize="15" fontWeight="500">
          Score
        </text>
      </RadialBarChart>
      <p>
        <span>{data.value}%</span>
        <br></br> de votre objectif
      </p>
    </div>
  )
}

export default Kpi
