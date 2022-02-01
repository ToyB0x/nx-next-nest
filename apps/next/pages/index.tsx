import { useEffect, useState } from 'react'

const apiURL =
  process.env.NODE_ENV === 'production'
    ? 'https://nx-next-nest-prisma.an.r.appspot.com/api'
    : '/api'

export function Index() {
  const [text, setText] = useState<string>('initialText')

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch(apiURL)
        if (res.status !== 404) {
          setText(await res.text())
        } else {
          setText('404')
        }
      } catch (e) {
        setText('api error')
      }
    })()
  }, [])

  return <div>{text}</div>
}

export default Index
