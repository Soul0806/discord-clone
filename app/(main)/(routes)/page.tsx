import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold">
        Hello Discord Clone
      </p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}