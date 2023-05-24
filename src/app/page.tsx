import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href={'/animate'} className='hover:underline'>Animated Homepage</Link>
      <Link href={'/loop'} className='hover:underline'>Continuous loop animation</Link>
      <Link href={'/parallax'} className='hover:underline'>Parallax Background</Link>
      <Link href={'/framer'} className='hover:underline'>Framer Parallax</Link>
    </main>
  )
}
