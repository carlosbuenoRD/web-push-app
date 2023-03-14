const router = require('express').Router()

// WEBPUSH
const webpush = require('../utils/webpush')

let pushSubscription

router.post('/subscription', async (req, res) => {
  pushSubscription = req.body
  res.status(200).json({ message: 'User subscribed' })
})

router.post('/email', async (req, res) => {
  let payload = JSON.stringify({
    title: 'Email notification',
    message: 'Reunion sobre alertdocs mañana a las 12:30 am',
  })

  try {
    await webpush.sendNotification(pushSubscription, payload)
  } catch (error) {
    console.log('NOTIFICATION ERROR: ', error.message)
  }
})

router.post('/chat', async (req, res) => {
  let payload = JSON.stringify({
    title: 'Chat notification',
    message: 'Carlos bueno te ha enviado un mensaje',
  })

  try {
    await webpush.sendNotification(pushSubscription, payload)
  } catch (error) {
    console.log('NOTIFICATION ERROR: ', error.message)
  }
})

router.post('/alert', async (req, res) => {
  let payload = JSON.stringify({
    title: 'Alert notification',
    message: 'Te han devuelto un documento terminalo lo mas rapido posible',
  })

  try {
    await webpush.sendNotification(pushSubscription, payload)
  } catch (error) {
    console.log('NOTIFICATION ERROR: ', error.message)
  }
})

module.exports = router
