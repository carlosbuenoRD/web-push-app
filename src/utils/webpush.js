const webpush = require('web-push')

webpush.setVapidDetails(
  'mailto:test@buenodev.com',
  process.env.WEBPUSH_PUBLIC_KEY,
  process.env.WEBPUSH_PRIVATE_KEY
)

module.exports = webpush
