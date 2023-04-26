import { FC } from 'react'
import Link from 'next/link'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <main>
        <h1>ABOUT</h1>
        <Link href='/'>LINK TO HOME</Link>
    </main>
  )
}

export default page