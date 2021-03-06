import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'
import { getPerformanceData } from '../../services/dataManager.js'

/**
 * React component for the RadarSection
 * @component
 */
function RadarSection() {
  const data = getPerformanceData()
  return <div className="RadarSection">{renderRadarCharts(data)}</div>
}

/**
 * render from recharts
 * @param {*} data - data from dataManager.js
 * @returns
 */
function renderRadarCharts(data) {
  return (
    <ResponsiveContainer width="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dy={3}
          tick={{ fill: 'white', fontSize: 12 }}
          dataKey="kind"
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RadarSection
