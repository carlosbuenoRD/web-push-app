console.log('service worker')

self.addEventListener('push', (e) => {
  const data = e.data.json()
  console.log(data)

  self.registration.showNotification(data.title, {
    body: data.message,
    icon: 'https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1',
  })
})
