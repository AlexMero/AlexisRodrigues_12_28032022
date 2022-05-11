export default class UserPerformance {
  userId
  kind
  data
  constructor(data) {
    for (const [key, value] of Object.entries(data)) {
      this[key] = value
    }
  }
}
