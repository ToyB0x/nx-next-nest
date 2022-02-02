import { useState } from 'react'

export function Index() {
  const [input, setInput] = useState('')
  const [src, setSrc] = useState(null)

  const handleChange = (e) => setInput(e.target.value)

  const onClickApiRoute = async () => {
    const res = await fetch(
      '/api/screenshot' + '?url=' + decodeURIComponent(input)
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
        <button type='button' onClick={onClickApiRoute}>
          Get Screenshot with ApiRoute
        </button>
      </form>
      {src && <img src={src} />}
    </div>
  )
}

export default Index
