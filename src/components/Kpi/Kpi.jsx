import { RadialBarChart, RadialBar } from 'recharts'
import { getScoreDate } from '../../services/dataManager.js'

const data = getScoreDate()
const max = {
  fill: 'transparent',
  name: 'score',
  value: 100,
}
console.log(data)

const renderPieCharts = (
  <div className="KpiContainer">
    <RadialBarChart
      width={258}
      height={263}
      innerRadius={80}
      outerRadius={100}
      data={[max, data]}
      startAngle={205}
      endAngle={-155}
      cx="50%"
      cy="50%"
    >
      <RadialBar
        dataKey="value"
        background
        // label={{ position: 'center' }}
        cornerRadius={10}
        // isAnimationActive={false}
      />
      <circle cx="50%" cy="50%" fill="white" r="85"></circle>
      <text x="30" y="25" width={147} fontSize="15" fontWeight="500">
        Score
      </text>
    </RadialBarChart>
    <p>
      <span>{data.value}%</span><br></br> de votre objectif
    </p>
  </div>
)

function Kpi() {
  return <div className="Kpi">{renderPieCharts}</div>
}

export default Kpi
