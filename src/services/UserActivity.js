export default class UserActivity {
  userId
  sessions
  constructor(data) {
    for (const [key, value] of Object.entries(data)) {
      this[key] = value
    }
  }
}
