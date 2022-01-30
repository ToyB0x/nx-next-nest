import { useEffect, useState } from 'react'

export function Index() {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api')
        setText(await res.text())
      } catch (e) {
        setText(e.message)
      }
    })()
  })

  return <div>{text}</div>
}

export default Index
