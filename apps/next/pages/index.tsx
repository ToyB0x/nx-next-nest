import { useEffect, useState } from 'react'

export function Index() {
  const [text, setText] = useState<string>('initialText')

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api')
        setText(await res.text())
      } catch (e) {
        setText('api error')
      }
    })()
  }, [])

  return <div>{text}</div>
}

export default Index
