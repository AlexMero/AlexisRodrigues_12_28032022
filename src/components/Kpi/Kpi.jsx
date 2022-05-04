import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { getScoreData } from '../../services/dataManager.js'

function Kpi() {
  const data = getScoreData()
  return <div className="Kpi">{renderPieCharts(data)}</div>
}

const max = {
  fill: 'transparent',
  name: 'score',
  value: 100,
}

function renderPieCharts(data) {
  return (
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
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <RadialBar dataKey="value" background cornerRadius={10} />
        <circle cx="50%" cy="50%" fill="white" r="85"></circle>
        <text x="30" y="35" width={147} fontSize="15" fontWeight="500">
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
