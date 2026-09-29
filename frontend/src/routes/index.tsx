import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <p>Hello</p>

      <Button className="bg-red-600 cursor-pointer">
        <Link to="/about">about</Link>
      </Button>
    </div>
  )
}
