import { FC } from 'react'
import Link from 'next/link'

interface pageProps {

}

const page: FC<pageProps> = ({}) => {
  return (
    <main>
      <h1>Home</h1>
      <Link href='/about'>LINK TO ABOUT</Link>
    </main>
  )
}

export default page