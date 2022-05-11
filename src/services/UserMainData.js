export default class UserMainData {
  id
  userInfos
  score
  keyData
  constructor(data) {
    for (const [key, value] of Object.entries(data)) {
      this[key] = value
    }
  }
}
