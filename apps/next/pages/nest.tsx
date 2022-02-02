import { useState } from 'react'

const apiURL =
  process.env.NODE_ENV === 'development'
    ? '/api'
    : 'https://nx-next-nest-prisma.an.r.appspot.com/api'

export function Index() {
  const [input, setInput] = useState('')
  const [src, setSrc] = useState(null)

  const handleChange = (e) => setInput(e.target.value)

  const onClick = async () => {
    const res = await fetch(
      apiURL + '/screenshot' + '?url=' + decodeURIComponent(input)
    )
    const image = 'data:image/png;base64,' + (await res.text())
    setSrc(image)
  }

  return (
    <div>
      <form>
        <label>
          <input
            type='text'
            placeholder='URL'
            value={input}
            onChange={handleChange}
          />
        </label>
        <button type='button' onClick={onClick}>
          Get Screenshot
        </button>
      </form>
      {src && <img src={src} />}
    </div>
  )
}

export default Index
