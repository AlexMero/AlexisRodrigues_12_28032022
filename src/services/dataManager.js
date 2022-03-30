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

export {
  getMainData,
  getName,
  getCalories,
  getProtein,
  getCarbonhydrate,
  getLipid,
}
