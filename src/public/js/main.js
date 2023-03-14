const PUBLIC_KEY =
  'BAhVtttimxpOn0lZBdr8M1g6AYTpWZ69ugOT7l95ANaZ95QrK4XSXzYt1VZvwYDEuJM77RHSGtl_wVVUxFeM0L8'

const subscription = async () => {
  // Service worker
  const register = await navigator.serviceWorker.register('./worker.js', {
    scope: '/',
  })

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: PUBLIC_KEY,
  })

  await fetch('/notification/subscription', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'Content-type': 'application/json',
    },
  })

  console.log('Subscribe!')
}

const email = document.getElementById('email')
const chat = document.getElementById('chat')
const alert = document.getElementById('alert')

email.addEventListener('click', () => handleSendNotification('email'))
chat.addEventListener('click', () => handleSendNotification('chat'))
alert.addEventListener('click', () => handleSendNotification('alert'))

const handleSendNotification = async (type) => {
  await fetch(`/notification/${type}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  })
}

subscription()
