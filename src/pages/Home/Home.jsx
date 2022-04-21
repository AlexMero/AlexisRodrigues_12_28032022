import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Keydata from '../../components/Keydata/Keydata.jsx'
import Poids from '../../components/Poids/Poids.jsx'
import Objectifs from '../../components/Objectifs/Objectifs.jsx'
import RadarSection from '../../components/RadarSection/RadarSection.jsx'
import Kpi from '../../components/Kpi/Kpi.jsx'
import {
  getName,
  getCalories,
  getCarbonhydrate,
  getLipid,
  getProtein,
} from '../../services/dataManager.js'
import { useContext } from 'react'

import { StoreContext } from '../../providers/Store'

function Home() {
  const [store] = useContext(StoreContext)
  getName()
  // const calories = await getCalories()
  // const carbonhydrate = await getCarbonhydrate()
  // const lipid = await getLipid()
  // const protein = await getProtein()

  return (
    <div className="Home">
      <Header />
      <main>
        <h1>
          Bonjour <span>{store.USER_MAIN_DATA.userInfos.name}</span>
        </h1>
        <p className="congratulation">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <div className="HomeContainer">
          {/* <Poids />
          <Objectifs />
          <RadarSection />
          <Kpi /> */}
          <div className="homeKeydataContainer">
            {/* <Keydata
              name="Calories"
              amount={calories}
              icon="iconFire"
              key={'Calories' + calories}
              bgColor={'rgba(255, 0, 0, 0.1)'}
            />
            <Keydata
              name="Proteines"
              amount={protein}
              icon="iconChicken"
              key={'Proteines' + protein}
              bgColor={'rgba(74, 184, 255, 0.1)'}
            />
            <Keydata
              name="Glucide"
              amount={carbonhydrate}
              icon="iconApple"
              key={'Glucide' + carbonhydrate}
              bgColor={'rgba(249, 206, 35, 0.1)'}
            />
            <Keydata
              name="Lipides"
              amount={lipid}
              icon="iconCheesburger"
              key={'Lipides' + lipid}
              bgColor={'rgba(253, 81, 129, 0.1)'}
            /> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
