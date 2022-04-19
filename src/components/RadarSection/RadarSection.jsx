import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'
import { getPerformanceData } from '../../services/dataManager.js'

const data = getPerformanceData()

const renderRadarCharts = (
  <RadarChart width={258} height={263} data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="kind" />
    <PolarRadiusAxis angle={30} domain={[0, 150]} />
    <Radar
      dataKey="value"
      stroke="rgba(255, 1, 1, 0)"
      fill="rgba(255, 1, 1, 0.7)"
      fillOpacity={0.6}
    />
  </RadarChart>
)

function RadarSection() {
  return <div className="RadarSection">{renderRadarCharts}</div>
}

export default RadarSection
