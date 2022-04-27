/**
 * @typedef {Object} mainUserData
 * @property {Number} [id]
 * @property {userInfos} userInfos
 * @property {Number} score
 * @property {keyData} keyData
 *
 * @typedef {Object} userInfos
 * @property {String} firstName
 * @property {String} lastName
 * @property {Number} age
 *
 * @typedef {Object} keyData
 * @property {Number} calorieCount
 * @property {Number} proteinCount
 * @property {Number} carbohydrateCount
 * @property {Number} lipidCount
 */

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './data.js'

import { fetcher, setServerBaseUrl } from './fetcher.js'

import { store } from '../providers/Store'

const mocked = false
const userId = 12

const translation = {
  cardio: 'cardio',
  energy: 'energie',
  endurance: 'endurance',
  strength: 'force',
  speed: 'vitesse',
  intensity: 'intensité',
}

setServerBaseUrl('http://localhost:3000/user/')

/**
 * get USER_MAIN_DATA
 *
 * @return  {Promise.<void>}
 */
async function getUserData() {
  if (mocked)
    store.set({
      USER_MAIN_DATA: extractFromMocked(USER_MAIN_DATA),
    })
  const mainData = await fetcher(userId)
  const activityData = await fetcher(userId + '/activity')
  const averageData = await fetcher(userId + '/average-sessions')
  const performanceData = await fetcher(userId + '/performance')
  store.set({
    USER_MAIN_DATA: mainData.data,
    USER_ACTIVITY: activityData.data,
    USER_AVERAGE_SESSIONS: averageData.data,
    USER_PERFORMANCE: performanceData.data,
  })
}

/**
 * extract data from mocked file (data.js)
 *
 * @param   {Object}  data
 *
 * @return  {mainUserData}        [return description]
 */
function extractFromMocked(data) {
  for (const mockedData of data) {
    if (mockedData.id === userId) return mockedData
  }
}

/**
 * get name of current user from getMainData
 *
 * @return  {String}  name
 */
function getName() {
  return store.get.USER_MAIN_DATA.userInfos.firstName
}

function getKeyData() {
  return store.get.USER_MAIN_DATA.keyData
}

function getPoidsData() {
  return store.get.USER_ACTIVITY.sessions
}

function getAverageData() {
  return store.get.USER_AVERAGE_SESSIONS.sessions
}

function getPerformanceData() {
  let result = []
  for (const performance of store.get.USER_PERFORMANCE.data) {
    result.push({
      value: performance.value,
      kind: store.get.USER_PERFORMANCE.kind[performance.kind],
    })
  }
  return result
}

function getScoreData() {
  return {
    value: store.get.USER_MAIN_DATA.todayScore * 100,
    name: 'score',
    fill: 'red',
  }
}

// async function getCalories() {
//   const data = await getMainData()
//   return data.keyData.calorieCount
// }

// async function getProtein() {
//   const data = await getMainData()
//   return data.keyData.proteinCount
// }

// async function getCarbonhydrate() {
//   const data = await getMainData()
//   return data.keyData.carbohydrateCount
// }

// async function getLipid() {
//   const data = await getMainData()
//   return data.keyData.lipidCount
// }

// function getUserActivity() {
//   for (const activities of USER_ACTIVITY) {
//     if (activities.userId === userId) {
//       return activities
//     }
//   }
//   return null
// }

// function getBarchartData() {
//   let i = 0
//   const userActivity = getUserActivity()
//   userActivity.sessions.forEach((session) => {
//     session['name'] = i
//     i++
//   })
//   return userActivity.sessions
// }

// /**
//  * Need to know if dataMax-dataMin is even or odd number (called in Poids.jsx)
//  *
//  * @return  {Boolean}
//  */
// function calculDomain() {
//   let max = 0
//   let min = 1000
//   const userActivity = getUserActivity()
//   userActivity.sessions.forEach((session) => {
//     if (session.poids < min) min = session.poids
//     if (session.poids > max) max = session.poids
//   })

//   if ((max - min) % 2 === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// function getAverageData() {
//   let result
//   for (const average of USER_AVERAGE_SESSIONS) {
//     if (average.userId === userId) {
//       result = average.sessions
//     }
//   }
//   return result
// }

// //
// // function getPerformanceData() {
// //   let result
// //   let kindList
// //   console.log(USER_PERFORMANCE)
// //   for (const performance of USER_PERFORMANCE) {
// //     if (performance.userId === userId) {
// //       result = performance.data
// //       kindList = performance.kind
// //       break
// //     }
// //   }

// //   console.log(result)
// //   result.forEach((data) => {
// //     data.kind = kindList[data.kind]
// //   })

// //   return result
// // })
// async function getPerformanceData() {
//   async function getUserData() {
//     for (const performance of USER_PERFORMANCE) {
//       if (performance.userId === userId) return performance
//     }
//   }
//   const { kind, data } = await getUserData()
//   data.forEach((singleData) => {
//     singleData.kind = translation[kind[singleData.kind]]
//   })
//   console.log(data)
//   return data
// }

// async function getScoreDate() {
//   const data = await getMainData()
//   return { value: data.score * 100, name: 'score', fill: 'red' }
//   // { value: 1, name: 'unscore', fill: '#FBFBFB' },
// }
// // #FBFBFB

export {
  getUserData,
  getName,
  getKeyData,
  getPoidsData,
  getAverageData,
  getPerformanceData,
  getScoreData,
}
