const admin = require('firebase-admin')
const serviceAccount = require('./doceu-login-firebase-adminsdk-smibd-9b12eec34f.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
const auth = admin.auth()

module.exports = { db, auth }