import { LineChart, XAxis, YAxis, Tooltip, Line, ReferenceLine } from 'recharts'
import { getAverageData } from '../../services/dataManager.js'

const data = getAverageData()

const renderLineCharts = (
  <LineChart
    width={258}
    height={263}
    data={data}
    margin={{ top: 120, right: 0, left: 0, bottom: 20 }}
  >
    <XAxis
      dataKey="day"
      color="white"
      label={{ fill: 'rgba(0, 0, 0, 0)' }}
      tickLine={false}
      padding={{ left: 10, right: 10 }}
      axisLine={false}
    />
    <YAxis hide={true} />
    <Tooltip />
    <ReferenceLine x={5} stroke={'white'} />
    <text x="30" y="45" width={147} fontSize="15" fontWeight="500">
      Durée moyenne des sessions
    </text>
    <Line type="natural" dataKey="sessionLength" stroke="#FFFFFF" dot={false} />
  </LineChart>
)

function Objectifs() {
  return <div className="Objectifs">{renderLineCharts}</div>
}

export default Objectifs
