import {
  BarChart,
  Bar,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { getPoidsData } from '../../services/dataManager.js'

/**
 * React component for the Poids
 * @component
 */
function Poids() {
  const datas = getPoidsData()
  console.log(datas)
  return <div className="Poids">{renderBarChart(datas)}</div>
}

/**
 * render from recharts
 * @param {*} datas - data from dataManager.js
 * @returns
 */
function renderBarChart(datas) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        width={835}
        height={320}
        data={datas}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        barSize={10}
        barGap={10}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickMargin={16}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          type="number"
          dataKey="kilogram"
          tickCount={3}
          axisLine={false}
          tickLine={false}
          tickMargin={44}
          // domain={cutomDomain()}
          domain={['dataMin - 1', 'dataMax + 2']}
        />
        <Tooltip content={<CustomTooltip active={{}} payload={{}} />} />
        <Legend
          formatter={renderColorfulLegendText}
          iconType={'circle'}
          verticalAlign={'top'}
          align={'right'}
          height={40}
        />
        <text x="30" y="45" fontSize="15" fontWeight="500">
          Activité quotidienne
        </text>
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="black"
          name="Poids (kg)"
          radius={[10, 10, 0, 0]}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          dataKey="calories"
          domain={[0, 'dataMax + 100']}
          hide={true}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="red"
          name="Calories brûlées (kCal)"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

/**
 * Customize Legend
 * @param {Object} value
 * @returns
 */
const renderColorfulLegendText = (value) => {
  return <span style={{ color: '#74798C' }}>{value}</span>
}

/**
 * Customize Tooltip
 * @param {Object} param
 * @returns
 */
function CustomTooltip({ active, payload }) {
  return (
    active && (
      <div className="CustomTooltip">
        <p>{`${payload[0].value}kg`}</p>
        {/* <p>{`${payload[1].value}Kcal`}</p> */}
      </div>
    )
  )
}

export default Poids
