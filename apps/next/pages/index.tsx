import {useEffect, useState} from "react";

export function Index() {
  const [text, setText] = useState<string>("")

  useEffect(() => {
    ;(async () => {
      const res = await fetch("/api")
      setText(await res.text())
    })()
  })

  return <div>{text}</div>
}

export default Index;
