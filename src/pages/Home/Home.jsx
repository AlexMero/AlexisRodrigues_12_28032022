import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Keydata from '../../components/Keydata/Keydata.jsx'
import Poids from '../../components/Poids/Poids.jsx'
import Objectifs from '../../components/Objectifs/Objectifs.jsx'
import RadarSection from '../../components/RadarSection/RadarSection.jsx'
import Kpi from '../../components/Kpi/Kpi.jsx'
import { getName, getKeyData, getUserData } from '../../services/dataManager.js'
import { useContext, useEffect } from 'react'
import { StoreContext } from '../../providers/Store'

function Home() {
  const [store, updateStore] = useContext(StoreContext)
  useEffect(() => {
    getUserData()
  }, [])
  const name = getName()
  const keyData = getKeyData()

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
        <div className="HomeContainer">
          <Poids />
          <div className="HomeSubContainer">
            <Objectifs />
            <RadarSection />
            <Kpi />
          </div>
          <div className="homeKeydataContainer">
            <Keydata
              name="Calories"
              amount={keyData.calorieCount}
              icon="iconFire"
              key={'Calories' + keyData.calorieCount}
              bgColor={'rgba(255, 0, 0, 0.1)'}
            />
            <Keydata
              name="Proteines"
              amount={keyData.proteinCount}
              icon="iconChicken"
              key={'Proteines' + keyData.proteinCount}
              bgColor={'rgba(74, 184, 255, 0.1)'}
            />
            <Keydata
              name="Glucide"
              amount={keyData.carbohydrateCount}
              icon="iconApple"
              key={'Glucide' + keyData.carbohydrateCount}
              bgColor={'rgba(249, 206, 35, 0.1)'}
            />
            <Keydata
              name="Lipides"
              amount={keyData.lipidCount}
              icon="iconCheesburger"
              key={'Lipides' + keyData.lipidCount}
              bgColor={'rgba(253, 81, 129, 0.1)'}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
