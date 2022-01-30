import { useEffect, useState } from 'react'

export function Index() {
  const [text, setText] = useState<string>('initialText')

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api')
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
