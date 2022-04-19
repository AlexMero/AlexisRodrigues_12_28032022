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

const mocked = true
const userId = 12

const translation = {
  cardio: 'cardio',
  energy: 'energie',
  endurance: 'endurance',
  strength: 'force',
  speed: 'vitesse',
  intensity: 'intensité',
}

/**
 * get USER_MAIN_DATA
 *
 * @return  {mainUserData}
 */
function getMainData() {
  if (mocked) return extractFromMocked(USER_MAIN_DATA)
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
  const data = getMainData()
  return data.userInfos.firstName
}

function getCalories() {
  const data = getMainData()
  return data.keyData.calorieCount
}

function getProtein() {
  const data = getMainData()
  return data.keyData.proteinCount
}

function getCarbonhydrate() {
  const data = getMainData()
  return data.keyData.carbohydrateCount
}

function getLipid() {
  const data = getMainData()
  return data.keyData.lipidCount
}

function getUserActivity() {
  for (const activities of USER_ACTIVITY) {
    if (activities.userId === userId) {
      return activities
    }
  }
  return null
}

function getBarchartData() {
  let i = 0
  const userActivity = getUserActivity()
  userActivity.sessions.forEach((session) => {
    session['name'] = i
    i++
  })
  return userActivity.sessions
}

/**
 * Need to know if dataMax-dataMin is even or odd number (called in Poids.jsx)
 *
 * @return  {Boolean}
 */
function calculDomain() {
  let max = 0
  let min = 1000
  const userActivity = getUserActivity()
  userActivity.sessions.forEach((session) => {
    if (session.poids < min) min = session.poids
    if (session.poids > max) max = session.poids
  })

  if ((max - min) % 2 === 0) {
    return true
  } else {
    return false
  }
}

function getAverageData() {
  let result
  for (const average of USER_AVERAGE_SESSIONS) {
    if (average.userId === userId) {
      result = average.sessions
    }
  }
  return result
}

//
// function getPerformanceData() {
//   let result
//   let kindList
//   console.log(USER_PERFORMANCE)
//   for (const performance of USER_PERFORMANCE) {
//     if (performance.userId === userId) {
//       result = performance.data
//       kindList = performance.kind
//       break
//     }
//   }

//   console.log(result)
//   result.forEach((data) => {
//     data.kind = kindList[data.kind]
//   })

//   return result
// })
function getPerformanceData() {
  function getUserData() {
    for (const performance of USER_PERFORMANCE) {
      if (performance.userId === userId) return performance
    }
  }
  const { kind, data } = getUserData();
  data.forEach((singleData) => {
    singleData.kind = translation[kind[singleData.kind]]
  })
  console.log(data)
  return data
}

function getScoreDate() {
  const data = getMainData()
  return { value: data.score * 100, name: 'score', fill: 'red' }
  // { value: 1, name: 'unscore', fill: '#FBFBFB' },
}
// #FBFBFB

export {
  getMainData,
  getName,
  getCalories,
  getProtein,
  getCarbonhydrate,
  getLipid,
  getBarchartData,
  calculDomain,
  getAverageData,
  getPerformanceData,
  getScoreDate,
}
