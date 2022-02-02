import Link from 'next/link'
const apiURL =
  process.env.NODE_ENV === 'development'
    ? '/api'
    : 'https://nx-next-nest-prisma.an.r.appspot.com/api'

export function Index() {
  return (
    <div>
      <Link href='/next'>
        <a>1. Next</a>
      </Link>

      <br />

      <Link href='/nest'>
        <a>2. Nest</a>
      </Link>
    </div>
  )
}

export default Index
