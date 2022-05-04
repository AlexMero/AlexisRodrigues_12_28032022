import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from 'recharts'
import { getAverageData } from '../../services/dataManager.js'

/**
 * React component for the Objectifs
 * @component
 */
function Objectifs() {
  const data = getAverageData()
  return (
    <div className="Objectifs">
      <h2 className="objectifsTitle">Durée moyenne des sessions</h2>
      {renderLineCharts(data)}
    </div>
  )
}

/**
 * render from recharts
 * @param {*} data - data from dataManager.js
 * @returns
 */
function renderLineCharts(data) {
  return (
    <ResponsiveContainer
      className="averageResponsive"
      width="100%"
      height="100%"
    >
      <LineChart
        data={data}
        margin={{ top: 120, right: 0, left: 0, bottom: 20 }}
        onMouseMove={(e) => {
          if (e.isTooltipActive === true) {
            let div = document.querySelector('.averageResponsive')
            let windowWidth = div.clientWidth
            let mouseXpercentage = Math.round(
              (e.activeCoordinate.x / windowWidth) * 100
            )
            //@ts-ignore
            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
          }
        }}
      >
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.5)"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey="sessionLength"
          hide={true}
          type="number"
          domain={['dataMin -15', 'dataMax + 45']}
        />
        <YAxis
          dataKey="sessionLength"
          hide={true}
          type="number"
          domain={['dataMin -15', 'dataMax + 45']}
        />
        <Tooltip content={<AverageTooltip active={{}} payload={{}} />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#ffffff"
          dot={false}
          strokeWidth={2}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

/**
 * Customize Tooltip
 * @param {Object} param
 * @returns
 */
function AverageTooltip({ active, payload }) {
  return (
    active && (
      <div className="averageTooltip">
        <p className="value">{`${payload[0].value} min`}</p>
      </div>
    )
  )
}

export default Objectifs
