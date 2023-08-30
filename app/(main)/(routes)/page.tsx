import { ModeToggle } from '@/components/mode-toggle'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="flex justify-between">
      <p className="text-3xl font-bold">
        Hello Discord Clone
      </p>
      <ModeToggle />
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
