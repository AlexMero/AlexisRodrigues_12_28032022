import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Keydata from '../../components/Keydata/Keydata.jsx'
import {
  getName,
  getCalories,
  getCarbonhydrate,
  getLipid,
  getProtein,
} from '../../services/dataManager.js'

// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
// const data = [
//   { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
//   { name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
//   { name: 'Page A', uv: 500, pv: 2400, amt: 2400 },
//   { name: 'Page A', uv: 100, pv: 2400, amt: 2400 },
// ]

// const renderLineChart = (
//   <LineChart width={400} height={400} data={data}>
//     <Line type="monotone" dataKey="uv" stroke="black" />
//     <CartesianGrid stroke="green" />
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Tooltip />
//   </LineChart>
// )

function Home() {
  const name = getName()
  const calories = getCalories()
  const carbonhydrate = getCarbonhydrate()
  const lipid = getLipid()
  const protein = getProtein()

  return (
    <div className="Home">
      <Header />
      <main>
        <h1>
          Bonjour <span>{name}</span>
        </h1>
        <p className="congratulation">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        {/* {renderLineChart} */}
        <div className="homeKeydataContainer">
          <Keydata
            name="Calories"
            amount={calories}
            icon="iconFire"
            key={'Calories' + calories}
          />
          <Keydata
            name="Proteines"
            amount={protein}
            icon="iconChicken"
            key={'Proteines' + protein}
          />
          <Keydata
            name="Glucide"
            amount={carbonhydrate}
            icon="iconApple"
            key={'Glucide' + carbonhydrate}
          />
          <Keydata
            name="Lipides"
            amount={lipid}
            icon="iconCheesburger"
            key={'Lipides' + lipid}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
