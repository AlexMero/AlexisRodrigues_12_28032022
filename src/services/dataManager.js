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

import { USER_MAIN_DATA } from './data.js'

import { fetcher, setServerBaseUrl } from './fetcher.js'

import { store } from '../providers/Store'

const { mocked, userId } = extractFromUrl()

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
 * update store with user data mocked or from api
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
    console.log(mockedData)
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

/**
 * get data for keyData
 *
 * @return  {Object} - {calorieCount, carbohydrateCount, lipidCount, proteinCount}
 */
function getKeyData() {
  return store.get.USER_MAIN_DATA.keyData
}

/**
 * get data for Poids
 *
 * @return  {Array[Object]} - array of session object [{day, kilogram, calories}]
 */
function getPoidsData() {
  let result = []
  for (const session of store.get.USER_ACTIVITY.sessions) {
    result.push({
      day: session.day.slice(-1),
      kilogram: session.kilogram,
      calories: session.calories,
    })
  }
  return result
}

/**
 * get data for Average
 *
 * @return  {Array[Object]} - array of session object [{day, sessionLength}]
 */
function getAverageData() {
  const numberToLetter = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
  }
  let result = []
  store.get.USER_AVERAGE_SESSIONS.sessions.forEach((session) => {
    result.push({
      day: numberToLetter[session.day],
      sessionLength: session.sessionLength,
    })
  })
  return result
}

/**
 * get data for Performance
 *
 * @return  {Array[Object]} - array of performance object [{value, kind}]
 */
function getPerformanceData() {
  let result = []
  for (const performance of store.get.USER_PERFORMANCE.data) {
    result.push({
      value: performance.value,
      kind: translation[store.get.USER_PERFORMANCE.kind[performance.kind]],
    })
  }
  return result
}

/**
 * get data for Score
 *
 * @return  {Object} - {value, name, fill}
 */
function getScoreData() {
  let score = 0
  if (store.get.USER_MAIN_DATA.todayScore)
    score = store.get.USER_MAIN_DATA.todayScore
  if (store.get.USER_MAIN_DATA.score) score = store.get.USER_MAIN_DATA.score
  return {
    value: score * 100,
    name: 'score',
    fill: 'red',
  }
}

/**
 * extract userId and mocked from url
 *
 * @return  {Object} - {userId, mocked}
 */
function extractFromUrl() {
  let userIdString = window.location.pathname.split('/')[2] || '1'
  let userId = parseInt(userIdString)
  const mocked = window.location.search.slice(1) === 'mocked'
  if (
    window.location.pathname.split('/')[1] === 'user' &&
    ![18, 12].includes(userId)
  )
    window.location.href = '/404'
  return {
    userId,
    mocked,
  }
}

export {
  getUserData,
  getName,
  getKeyData,
  getPoidsData,
  getAverageData,
  getPerformanceData,
  getScoreData,
}
